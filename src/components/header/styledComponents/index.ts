import styled from 'styled-components';
import { calculateRem } from '../../../utils';

const StyledHeader = styled.div`
  margin-top: ${calculateRem(50)};
  margin-bottom: ${calculateRem(50)};

  h1 {
    font-size: ${calculateRem(30)};
    margin: 0;
  }

  p {
    font-family: ${({
      theme: {
        fonts: { spartanRegular },
      },
    }) => spartanRegular};
    font-size: ${calculateRem(20)};
  }
`;

const StyledHeaderInner = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitleWrapper = styled.div`
  h1 {
    color: ${({
      theme: {
        colors: { black },
      },
    }) => black};
  }
`;

const StyledActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export {
  StyledHeader,
  StyledTitleWrapper,
  StyledActionsWrapper,
  StyledHeaderInner,
};
