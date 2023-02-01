interface IAsset {
  change24h: number;
  name: string;
  price: number;
  ticker: string;
}

interface IAssetProps {
  asset: IAsset;
  onClick: (name: string) => void;
}

export type { IAssetProps, IAsset };
