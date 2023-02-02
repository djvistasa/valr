/**
 *
 * BlockDetails
 *
 */

import { IBlockDetailsProps } from '../../interfaces';
import { iconDictionary, formatter } from '../../utils';
import {
  StyledBlockDetails,
  StyledBlockHeader,
  StyledRow,
} from './styledComponents';

function BlockDetails({
  block: {
    network,
    height,
    hash,
    latestBlockNumber,
    latestBlock,
    time,
    miningInfo,
    transactions = [],
    bits,
    merkle,
    version,
    weight,
    size,
    nonce,
    totalTransactions,
  },
}: IBlockDetailsProps): JSX.Element {
  const Icon: React.FunctionComponent =
    iconDictionary()[network as keyof typeof iconDictionary];

  const halvingInterval = 210000;
  const initialBlockReward = 50;

  const calculateBlockReward = () => {
    const blockHeightAfterHalvings = height / halvingInterval;
    const blockReward = initialBlockReward / 2 ** blockHeightAfterHalvings;
    return blockReward;
  };

  const calculateTransactionVolume = () =>
    transactions.reduce((volume, transaction) => {
      return (
        volume +
        transaction.outputs.reduce((outputVolume, output) => {
          return outputVolume + output.value;
        }, 0)
      );
    }, 0);

  const getBlockConfirmations = () => {
    const latestBlockHeight =
      latestBlock &&
      latestBlockNumber &&
      latestBlock.find(({ height }) => height === latestBlockNumber)?.height;

    return latestBlockHeight ? latestBlockHeight - height : '';
  };

  const getBlockDifficulty = () => {
    const max = 0xffff * Math.pow(2, 208);
    const difficulty = max / bits;
    return difficulty;
  };

  const getBlockTimestamp = () => {
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

  const calculateFeeReward = () => {
    let totalFee = 0;
    transactions.forEach(function (tx) {
      totalFee += tx.fee;
    });
    return totalFee;
  };
  return (
    <StyledBlockDetails>
      <StyledBlockHeader>
        <div>
          <Icon />
          <h1>{network} </h1>
          <h1> / Block</h1>
        </div>
      </StyledBlockHeader>
      <p>Block at depth {height} in the Bitcoin chain</p>
      <StyledRow>
        <p>Hash</p>
        <p>{hash}</p>
      </StyledRow>
      {getBlockConfirmations() ? (
        <StyledRow>
          <p>Confirmations</p>
          <p>{getBlockConfirmations()}</p>
        </StyledRow>
      ) : null}
      <StyledRow>
        <p>Timestamp</p>
        <p>{getBlockTimestamp()}</p>
      </StyledRow>
      <StyledRow>
        <p>Height</p>
        <p>{height}</p>
      </StyledRow>
      {miningInfo && miningInfo.name ? (
        <StyledRow>
          <p>Miner</p>
          <p className="highlight">{miningInfo.name}</p>
        </StyledRow>
      ) : null}

      <StyledRow>
        <p>Transactions</p>
        <p>{totalTransactions}</p>
      </StyledRow>

      <StyledRow>
        <p>Difficulty</p>
        <p>{getBlockDifficulty()}</p>
      </StyledRow>
      <StyledRow>
        <p>Merkle root</p>
        <p>{merkle}</p>
      </StyledRow>
      <StyledRow>
        <p>Version</p>
        <p>{version}</p>
      </StyledRow>
      <StyledRow>
        <p>Bits</p>
        <p>{bits}</p>
      </StyledRow>
      <StyledRow>
        <p>Weight</p>
        <p>{weight}</p>
      </StyledRow>
      <StyledRow>
        <p>Size</p>
        <p>{size}</p>
      </StyledRow>
      <StyledRow>
        <p>Nonce</p>
        <p>{nonce}</p>
      </StyledRow>
      <StyledRow>
        <p>Transaction Volume</p>
        <p>{formatter.format(calculateTransactionVolume())}</p>
      </StyledRow>
      <StyledRow>
        <p>Block Reward</p>
        <p>{formatter.format(calculateBlockReward())}</p>
      </StyledRow>
      <StyledRow>
        <p>Fee Reward</p>
        <p>{formatter.format(calculateFeeReward())}</p>
      </StyledRow>
    </StyledBlockDetails>
  );
}

export default BlockDetails;
