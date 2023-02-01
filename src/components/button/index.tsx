/**
 *
 * Button
 *
 */

import React from 'react';
import { withTheme } from 'styled-components';
import { ButtonVariant } from '../../enums';
import { ButtonProps } from '../../interfaces';
import { StyledButton, StyledIconWrapper } from './styledComponents';

function Button({
  title,
  onClick,
  type,
  variant,
  disabled,
  icon,
  theme: {
    colors: {
      primary,
      deleteAction,
      secondaryTwo,
      secondary,
      light,
      primaryTwo,
      secondaryBackgroundColor,
      deleteActionTwo,
    },
  },
}: ButtonProps): JSX.Element {
  const getBackgroundColorByVariant = () => {
    switch (variant) {
      case ButtonVariant.PrimaryAction:
        return primary;
      case ButtonVariant.SecondaryAction:
        return secondaryBackgroundColor;
      case ButtonVariant.DeleteAction:
        return deleteAction;
      default:
        return secondary;
    }
  };

  const getHoverColorByVariant = () => {
    switch (variant) {
      case ButtonVariant.PrimaryAction:
        return primaryTwo;
      case ButtonVariant.SecondaryAction:
        return secondaryTwo;
      case ButtonVariant.DeleteAction:
        return deleteActionTwo;
      default:
        return light;
    }
  };

  const getTitleColorByVariant = () => {
    switch (variant) {
      case ButtonVariant.PrimaryAction:
      case ButtonVariant.SecondaryAction:
      case ButtonVariant.DeleteAction:
        return light;
      default:
        return secondaryTwo;
    }
  };
  return (
    <StyledButton
      backgroundColor={getBackgroundColorByVariant()}
      type={type}
      disabled={disabled}
      titleColor={getTitleColorByVariant()}
      onClick={(e) => onClick(e)}
      hasIcon={!!icon}
      hoverColor={getHoverColorByVariant()}
    >
      {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
      {title}
    </StyledButton>
  );
}

export default withTheme(Button);
