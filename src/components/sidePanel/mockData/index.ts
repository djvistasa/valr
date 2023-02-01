import { IAsset } from '../../../interfaces';
import { Assets } from '../../../enums';

const assets: IAsset[] = [
  {
    name: 'Bitcoin',
    icon: Assets.Bitcoin,
    price: '21',
    shortName: 'btc',
  },
  {
    name: 'Ethereum',
    icon: Assets.Ethereum,
    price: '21',
    shortName: 'eth',
  },
  {
    name: 'Bitcoin Cash',
    icon: Assets.BitcoinCash,
    price: '21',
    shortName: 'bch',
  },
];
export { assets };
