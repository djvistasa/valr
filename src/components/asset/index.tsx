/**
 *
 * Asset
 *
 */

import { IAssetProps } from '../../interfaces';

import {
  StyledAsset,
  StyledIconWrapper,
  StyledInfoWrapper,
} from './styledComponents';
import { iconDictionary } from '../../utils';

function Asset({
  asset: { name, price, ticker },
  onClick,
}: IAssetProps): JSX.Element {
  const Icon: React.FunctionComponent =
    iconDictionary()[ticker.toLocaleLowerCase() as keyof typeof iconDictionary];
  return (
    <StyledAsset onClick={() => onClick(ticker.toLowerCase())}>
      <StyledIconWrapper>
        <Icon />
      </StyledIconWrapper>
      <StyledInfoWrapper>
        <h2>{name}</h2>
        <p>$ {price}</p>
      </StyledInfoWrapper>
    </StyledAsset>
  );
}

export default Asset;
