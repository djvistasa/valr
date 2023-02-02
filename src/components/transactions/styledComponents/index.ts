import styled from 'styled-components/macro';
import { calculateRem } from '../../../utils';

const StyledTransactions = styled.div`
  margin-top: ${calculateRem(20)};
`;

const StyledTransaction = styled.div`
  border-bottom: ${({
    theme: {
      colors: { lightgrey },
    },
  }) => `1px solid ${lightgrey}`};
  padding: ${calculateRem(30)} 0;
  > div {
    display: flex;
    margin-bottom: ${calculateRem(10)};
    p {
      margin: 0;
    }
    span {
      min-width: ${calculateRem(150)};
      display: inline-block;
      color: ${({
        theme: {
          colors: { mainBackgroundColor },
        },
      }) => mainBackgroundColor};
    }
  }
`;

export { StyledTransactions, StyledTransaction };
