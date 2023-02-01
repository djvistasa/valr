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
import { Assets } from '../../enums';

import { ReactComponent as Bitcoin } from '../../assets/svgs/bitcoin.svg';
import { ReactComponent as BitcoinCash } from '../../assets/svgs/bitcoin-cash.svg';
import { ReactComponent as Ethereum } from '../../assets/svgs/ethereum.svg';

function Asset({
  asset: { icon, name, price, shortName },
  onClick,
}: IAssetProps): JSX.Element {
  const iconDictionary = () => {
    return {
      [Assets.Bitcoin]: <Bitcoin />,
      [Assets.Ethereum]: <Ethereum />,
      [Assets.BitcoinCash]: <BitcoinCash />,
    };
  };
  return (
    <StyledAsset onClick={() => onClick(shortName)}>
      <StyledIconWrapper>{iconDictionary()[icon]}</StyledIconWrapper>
      <StyledInfoWrapper>
        <h2>{name}</h2>
        <p>{price}</p>
      </StyledInfoWrapper>
    </StyledAsset>
  );
}

export default Asset;
