/**
 *
 * Loader
 *
 */

import { ILoaderProps } from '../../interfaces';
import { StyledLoader, StyledLoaderWrapper } from './styledComponents';

function Loader(_props: ILoaderProps): JSX.Element {
  return (
    <StyledLoaderWrapper>
      <StyledLoader></StyledLoader>
    </StyledLoaderWrapper>
  );
}

export default Loader;
