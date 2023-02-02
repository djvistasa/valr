/**
 *
 * SearchInput
 *
 */
import React, { useEffect, useRef } from 'react';
import { ISearchInputProps } from '../../interfaces';
import { ReactComponent as Search } from '../../assets/svgs/search.svg';
import {
  StyledSearchInput,
  StyledSearchInputContainer,
  StyledSearchIcon,
} from './styledComponents';

function SearchInput({ onSearch, onSubmit }: ISearchInputProps): JSX.Element {
  const textInputRef = useRef<string>('');

  const handleChange = (value: string) => {
    textInputRef.current = value;
    onSearch(value);
  };

  useEffect(() => {
    document.addEventListener('keyup', function (event) {
      if (event.key === 'Enter' && textInputRef.current) {
        onSearch(textInputRef.current);
        onSubmit();
      }
    });
  }, []);

  return (
    <StyledSearchInputContainer>
      <StyledSearchIcon>
        <Search />
      </StyledSearchIcon>
      <StyledSearchInput
        ref={textInputRef}
        placeholder="Search for things like address, transaction, block"
        onChange={(element) => handleChange(element.target.value)}
      />
    </StyledSearchInputContainer>
  );
}

export default SearchInput;
