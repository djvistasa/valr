/**
 *
 * SearchInput
 *
 */
import { useEffect } from 'react';
import { ISearchInputProps } from '../../interfaces';
import { ReactComponent as Search } from '../../assets/svgs/search.svg';
import {
  StyledSearchInput,
  StyledSearchInputContainer,
  StyledSearchIcon,
} from './styledComponents';

function SearchInput({ onSearch, onSubmit }: ISearchInputProps): JSX.Element {
  useEffect(() => {
    document.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
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
        placeholder="Search for things like address, transaction, block"
        onChange={(element) => onSearch(element.target.value)}
      />
    </StyledSearchInputContainer>
  );
}

export default SearchInput;
