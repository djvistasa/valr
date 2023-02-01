import { Assets } from '../../../enums';

interface IAsset {
  name: string;
  icon: Assets;
  price: string;
  shortName: string;
}

interface IAssetProps {
  asset: IAsset;
  onClick: (name: string) => void;
}

export type { IAssetProps, IAsset };
