import styled from 'styled-components/macro';

import { calculateRem } from '../../../utils';

const StyledSearchInputContainer = styled.div`
  width: ${calculateRem(500)};
  height: ${calculateRem(50)};
  border-radius: ${calculateRem(3)};
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({
    theme: {
      colors: { lightgrey },
    },
  }) => lightgrey};
  padding: 0 ${calculateRem(20)};
  border: ${({
    theme: {
      colors: { lightgrey },
    },
  }) => `1px solid ${lightgrey}`};
`;

const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({
      theme: {
        colors: { blackOlive },
      },
    }) => blackOlive};
    font-size: ${calculateRem(16)};
  }
`;

const StyledSearchIcon = styled.div`
  svg {
    width: ${calculateRem(20)};
  }
`;

export { StyledSearchInput, StyledSearchInputContainer, StyledSearchIcon };
