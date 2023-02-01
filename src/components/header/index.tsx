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
import { ButtonVariant } from '../../enums';

function Header({ handleBlockSearch }: IHeaderProps): JSX.Element {
  const searchInput = useRef<string>('');

  const onBlockInputValue = (searchValue: string) => {
    return (searchInput.current = searchValue);
  };

  const onBlockSearch = () => {
    return handleBlockSearch(searchInput.current);
  };

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledTitleWrapper>
          <h1>Block Explorer</h1>
        </StyledTitleWrapper>
        <SearchInput
          onSearch={(searchValue: string) => onBlockInputValue(searchValue)}
        />
        <StyledActionsWrapper>
          <Button
            onClick={() => onBlockSearch()}
            title="Search"
            variant={ButtonVariant.PrimaryAction}
          />
        </StyledActionsWrapper>
      </StyledHeaderInner>
    </StyledHeader>
  );
}

export default Header;