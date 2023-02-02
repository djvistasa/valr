import styled from 'styled-components/macro';
import { calculateRem } from '../../../utils';

const StyledBlockDetails = styled.div`
  width: 100%;

  p {
    color: ${({
      theme: {
        colors: { gray },
      },
    }) => gray};
    font-size: ${calculateRem(15)};
    margin-top: ${calculateRem(15)};
  }
`;

const StyledBlockHeader = styled.div`
  height: ${calculateRem(80)};
  border-bottom: ${({
    theme: {
      colors: { lightgrey },
    },
  }) => `1px solid ${lightgrey}`};

  > div {
    svg {
      width: 50px;
      margin-right: ${calculateRem(10)};
    }

    h1 {
      text-transform: uppercase;
      font-size: ${calculateRem(20)};
      color: ${({
        theme: {
          colors: { gray },
        },
      }) => gray};
      margin-right: 8px;

      &:nth-child(3) {
        color: ${({
          theme: {
            colors: { mainBackgroundColor },
          },
        }) => mainBackgroundColor};
      }
    }
    height: inherit;
    display: flex;
    align-items: center;
  }
`;

const StyledRow = styled.div`
  width: 100%;
  border-bottom: ${({
    theme: {
      colors: { lightgrey },
    },
  }) => `1px solid ${lightgrey}`};
  display: flex;
  padding: ${calculateRem(15)} 0;
  align-items: center;

  > p {
    min-width: ${calculateRem(300)};
    &:nth-child(2) {
      color: ${({
        theme: {
          colors: { mainBackgroundColor },
        },
      }) => mainBackgroundColor};
    }
  }
`;

export { StyledBlockDetails, StyledBlockHeader, StyledRow };
