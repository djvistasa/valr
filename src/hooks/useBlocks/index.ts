import { useCallback, useState } from 'react';
import { BlocksApi } from '../../api';
import { IAsset, IBlock } from '../../interfaces';

function useBlocks() {
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [assets, setAssets] = useState<IAsset[]>([]);
  const [block, setBlock] = useState<IBlock>();

  const getBlocksByAsset = useCallback(async (asset: string) => {
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

      if (ok && result) {
        setBlock(result);
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
