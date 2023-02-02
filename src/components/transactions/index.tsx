/**
 *
 * Transactions
 *
 */

import { IInput, IOutput, ITransactionsProps } from '../../interfaces';
import { StyledHeading } from '../../theme/global-styles';
import { formatter } from '../../utils';
import { StyledTransactions, StyledTransaction } from './styledComponents';

function Transactions({ transactions = [] }: ITransactionsProps): JSX.Element {
  const getFromAddresses = (inputs: IInput[]) =>
    inputs.map(({ address }) => <p>{address || 'N/A'}</p>);
  const getToAddresses = (outputs: IOutput[]) =>
    outputs.map(({ address }) => <p>{address || 'N/A'}</p>);

  const getTransactionAmounts = (outputs: IOutput[]) =>
    outputs.reduce((total, output) => total + output.value, 0);

  return (
    <StyledTransactions>
      <StyledHeading>Transactions</StyledHeading>
      {transactions.map(({ txid, inputs, outputs }) => (
        <StyledTransaction key={txid}>
          <div className="highlight">
            <span>Hash:</span> {txid}
          </div>
          <div>
            <span>From address(es):</span>{' '}
            <span>{getFromAddresses(inputs)}</span>
          </div>
          <div>
            <span>To address(es):</span> <span>{getToAddresses(outputs)}</span>
          </div>
          <div>
            <span>Amounts:</span>
            <span>
              <p>{formatter.format(getTransactionAmounts(outputs))}</p>
            </span>
          </div>
        </StyledTransaction>
      ))}
    </StyledTransactions>
  );
}

export default Transactions;
