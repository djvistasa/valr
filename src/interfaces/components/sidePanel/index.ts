import { IAsset } from '../asset';

interface ISidePanelProps {
  onAssetClick: (name: string) => void;
  assets: IAsset[];
}

export type { ISidePanelProps };
