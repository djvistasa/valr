import styled from 'styled-components';
import { calculateRem } from '../../../utils';

const StyledBlock = styled.tr`
  border-top: ${({
    theme: {
      colors: { gray },
    },
  }) => `1px solid ${gray}`};
  border-bottom: ${({
    theme: {
      colors: { gray },
    },
  }) => `1px solid ${gray}`};
  /* column-gap: 10px; */

  td {
    padding: ${calculateRem(20)} 0;
    column-span: 10px;
  }
`;

export { StyledBlock };
