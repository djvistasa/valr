/**
 *
 * Button
 *
 */

import React from 'react';
import { IButtonProps } from '../../interfaces';
import { StyledButton } from './styledComponents';

function Button({ title, onClick }: IButtonProps): JSX.Element {
  return <StyledButton onClick={(e) => onClick(e)}>{title}</StyledButton>;
}

export default Button;
