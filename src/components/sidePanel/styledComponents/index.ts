import styled from 'styled-components';
import { calculateRem } from '../../../utils';

const StyledSidePanel = styled.div`
  width: ${calculateRem(300)};
  height: 100vh;
  float: left;
`;

export { StyledSidePanel };
