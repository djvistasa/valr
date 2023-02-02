import styled from 'styled-components';
import { calculateRem } from '../../../utils';

const StyledBlock = styled.tr`
  td {
    padding: ${calculateRem(20)} 0;
    column-span: 10px;
  }
`;

export { StyledBlock };
