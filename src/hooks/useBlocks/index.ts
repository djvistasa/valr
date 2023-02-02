import { useCallback, useState } from 'react';
import { BlocksApi } from '../../api';
import { IAsset, IBlock, ILatestBlock, ITransaction } from '../../interfaces';

function useBlocks() {
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [assets, setAssets] = useState<IAsset[]>([]);
  const [block, setBlock] = useState<IBlock>();

  const getBlockConfirmations = (
    latestBlock: ILatestBlock[],
    latestBlockNumber: number,
    height: number,
  ) => {
    const latestBlockHeight =
      latestBlock &&
      latestBlockNumber &&
      latestBlock.find(({ height }) => height === latestBlockNumber)?.height;

    return latestBlockHeight ? latestBlockHeight - height : '';
  };

  const calculateBlockReward = (height: number) => {
    const halvingInterval = 210000;
    const initialBlockReward = 50;
    const blockHeightAfterHalvings = height / halvingInterval;
    const blockReward = initialBlockReward / 2 ** blockHeightAfterHalvings;
    return blockReward;
  };

  const calculateFeeReward = (transactions: ITransaction[]) => {
    let totalFee = 0;
    transactions.forEach(function (transaction) {
      totalFee += transaction.fee;
    });
    return totalFee;
  };

  const calculateTransactionVolume = (transactions: ITransaction[]) =>
    transactions.reduce((volume, transaction) => {
      return (
        volume +
        transaction.outputs.reduce((outputVolume, output) => {
          return outputVolume + output.value;
        }, 0)
      );
    }, 0);

  const getBlockTimestamp = (time: number) => {
    const date = new Date(time * 1000);
    const dateString = date
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\. /g, '-')
      .replace('.', ' ');

    const timeString = date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    });

    return `${dateString}: ${timeString}`;
  };

  const getBlockDifficulty = (bits: number) => {
    const max = 0xffff * Math.pow(2, 208);
    const difficulty = max / bits;
    return difficulty;
  };

  const prepareBlock = (block: IBlock): IBlock => {
    return {
      ...block,
      confirmations: getBlockConfirmations(
        block.latestBlock as ILatestBlock[],
        block.latestBlockNumber as number,
        block.height,
      ) as string,
      blockReward: calculateBlockReward(block.height),
      feeReward: block.transactions
        ? calculateFeeReward(block.transactions as ITransaction[])
        : undefined,
      transactionVolume: block.transactions
        ? calculateTransactionVolume(block.transactions)
        : undefined,
      time: getBlockTimestamp(Number(block.time)),
      difficulty: getBlockDifficulty(block.bits),
    };
  };

  const getBlocksByAsset = useCallback(async (asset: string) => {
    setBlocks([]);
    const { error, ok, result } = await BlocksApi.getBlocksByAsset(asset);

    if (error) {
      return alert(error);
    }

    if (ok && result) {
      if (result.pageProps && result.pageProps.latestBlocks) {
        setBlocks(result.pageProps.latestBlocks);
      }

      if (result.headerTickers) {
        filterOutUnusedAssets(result.headerTickers);
      }
    }
  }, []);

  const filterOutUnusedAssets = (assets: IAsset[]) => {
    const filteredAssets = assets.filter(({ ticker }) => {
      const code = ticker.toLowerCase();
      return code === 'btc' || code === 'eth' || code === 'bch';
    });

    setAssets(filteredAssets);
  };

  const getBlockByAssetAndId = useCallback(
    async (asset: string, id: string) => {
      const { error, ok, result } = await BlocksApi.getBlockByAssetAndId(
        id,
        asset,
      );

      if (error) {
        return alert(error);
      }

      if (ok && result && result.pageProps && result.pageProps.block) {
        const block = prepareBlock(result.pageProps.block);

        setBlock(block);
      }
    },
    [],
  );

  return {
    getBlocksByAsset,
    getBlockByAssetAndId,
    block,
    blocks,
    assets,
  };
}

export default useBlocks;
