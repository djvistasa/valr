/**
 *
 * BlockDetails
 *
 */

import { IBlockDetailsProps } from '../../interfaces';
import { iconDictionary, formatter } from '../../utils';
import Transactions from '../transactions';
import { StyledHeading } from '../../theme/global-styles';
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
    confirmations,
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
    blockReward,
    feeReward,
    transactionVolume,
    difficulty,
  },
}: IBlockDetailsProps): JSX.Element {
  const Icon: React.FunctionComponent =
    iconDictionary()[network as keyof typeof iconDictionary];

  return (
    <StyledBlockDetails>
      <StyledBlockHeader>
        <div>
          <Icon />
          <StyledHeading>{network} </StyledHeading>
          <h1> / Block</h1>
        </div>
      </StyledBlockHeader>
      <p>Block at depth {height} in the Bitcoin chain</p>
      <StyledRow>
        <p>Hash</p>
        <p>{hash}</p>
      </StyledRow>
      {confirmations ? (
        <StyledRow>
          <p>Confirmations</p>
          <p>{confirmations}</p>
        </StyledRow>
      ) : null}
      <StyledRow>
        <p>Timestamp</p>
        <p>{time}</p>
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
      {difficulty ? (
        <StyledRow>
          <p>Difficulty</p>
          <p>{difficulty}</p>
        </StyledRow>
      ) : null}

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
      {transactionVolume ? (
        <StyledRow>
          <p>Transaction Volume</p>
          <p>{formatter.format(transactionVolume)}</p>
        </StyledRow>
      ) : null}

      {blockReward ? (
        <StyledRow>
          <p>Block Reward</p>
          <p>{formatter.format(blockReward)}</p>
        </StyledRow>
      ) : null}

      {feeReward ? (
        <StyledRow>
          <p>Fee Reward</p>
          <p>{formatter.format(feeReward)}</p>
        </StyledRow>
      ) : null}

      <Transactions transactions={transactions} />
    </StyledBlockDetails>
  );
}

export default BlockDetails;
