/**
 *
 * SearchInput
 *
 */
import React from 'react';
import { ISearchInputProps } from '../../interfaces';
import { ReactComponent as Search } from '../../assets/svgs/search.svg';
import {
  StyledSearchInput,
  StyledSearchInputContainer,
  StyledSearchIcon,
} from './styledComponents';

function SearchInput({ onSearch }: ISearchInputProps): JSX.Element {
  return (
    <StyledSearchInputContainer>
      <StyledSearchIcon>
        <Search />
      </StyledSearchIcon>
      <StyledSearchInput
        placeholder="Search for things like address, transaction, block"
        onChange={(searchValue) => onSearch(searchValue.target.value)}
      />
    </StyledSearchInputContainer>
  );
}

export default SearchInput;
