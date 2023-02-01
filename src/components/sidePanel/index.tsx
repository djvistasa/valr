/**
 *
 * SidePanel
 *
 */

import { ISidePanelProps } from '../../interfaces';
import { StyledSidePanel } from './styledComponents';
import { assets } from './mockData';
import Asset from '../asset';

function SidePanel({ onAssetClick }: ISidePanelProps): JSX.Element {
  return (
    <StyledSidePanel>
      {assets.map((asset) => (
        <Asset key={asset.name} asset={asset} onClick={onAssetClick} />
      ))}
    </StyledSidePanel>
  );
}

export default SidePanel;
