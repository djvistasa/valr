/**
 *
 * Header
 *
 */

import { useRef } from 'react';
import { IHeaderProps } from '../../interfaces';
import Button from '../button';
import {
  StyledHeader,
  StyledTitleWrapper,
  StyledActionsWrapper,
  StyledHeaderInner,
} from './styledComponents';
import SearchInput from '../searchInput';

function Header({ handleBlockSearch }: IHeaderProps): JSX.Element {
  const searchInput = useRef<string>('');

  const onBlockInputValue = (searchValue: string) =>
    (searchInput.current = searchValue);

  const onBlockSearch = () =>
    searchInput.current && handleBlockSearch(searchInput.current);

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledTitleWrapper>
          <h1>Block Explorer</h1>
        </StyledTitleWrapper>
        <SearchInput
          onSearch={(searchValue: string) => onBlockInputValue(searchValue)}
          onSubmit={onBlockSearch}
        />
        <StyledActionsWrapper>
          <Button onClick={() => onBlockSearch()} title="Search" />
        </StyledActionsWrapper>
      </StyledHeaderInner>
    </StyledHeader>
  );
}

export default Header;
