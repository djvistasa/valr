import styled from 'styled-components/macro';
import { calculateRem } from '../../../utils';

const StyledAsset = styled.a`
  display: flex;
  align-items: center;
  height: ${calculateRem(50)};
  margin-bottom: ${calculateRem(15)};
`;

const StyledIconWrapper = styled.div`
  margin-right: ${calculateRem(10)};
  svg {
    width: ${calculateRem(50)};
  }
`;

const StyledInfoWrapper = styled.div`
  color: ${({
    theme: {
      colors: { mainBackgroundColor },
    },
  }) => mainBackgroundColor};

  h2 {
    font-weight: 600;
  }
`;

export { StyledAsset, StyledIconWrapper, StyledInfoWrapper };
