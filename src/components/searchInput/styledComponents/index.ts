import styled from 'styled-components';

import { calculateRem } from '../../../utils';

const StyledSearchInputContainer = styled.div`
  width: ${calculateRem(335)};
  height: ${calculateRem(50)};
  border-radius: ${calculateRem(8)};
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  padding: 0 ${calculateRem(20)};
`;

const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({
      theme: {
        colors: { darkGray },
      },
    }) => darkGray};
    font-size: ${calculateRem(16)};
  }
`;

const StyledSearchIcon = styled.div`
  svg {
    width: ${calculateRem(20)};
  }
`;

export { StyledSearchInput, StyledSearchInputContainer, StyledSearchIcon };
