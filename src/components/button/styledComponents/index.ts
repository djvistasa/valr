import styled from 'styled-components';
import { calculateRem } from '../../../utils';
import { StyledButtonProps } from '../../../interfaces';

const StyledButton = styled.button<StyledButtonProps>`
  height: ${calculateRem(40)};
  min-width: ${calculateRem(80)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${calculateRem(25)};
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ titleColor }) => titleColor};
  font-family: ${({
    theme: {
      fonts: { spartanRegular },
    },
  }) => spartanRegular};
  padding-left: ${({ hasIcon }) => (hasIcon ? 'auto' : calculateRem(15))};
  padding-right: ${({ hasIcon }) => (hasIcon ? 'auto' : calculateRem(15))};
  font-size: ${calculateRem(16)};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: 0.3s background-color 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

const StyledIconWrapper = styled.div`
  margin-right: ${calculateRem(8)};
`;

export { StyledButton, StyledIconWrapper };
