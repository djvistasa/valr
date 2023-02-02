import styled from 'styled-components/macro';
import { calculateRem } from '../../../utils';

const StyledButton = styled.button`
  height: ${calculateRem(40)};
  width: ${calculateRem(90)};
  align-items: center;
  justify-content: center;
  border-radius: ${calculateRem(5)};
  border: none;
  background-color: ${({
    theme: {
      colors: { skyBlue },
    },
  }) => skyBlue};
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  font-family: ${({
    theme: {
      fonts: { spartanRegular },
    },
  }) => spartanRegular};
  font-size: ${calculateRem(16)};
  cursor: pointer;
`;

export { StyledButton };
