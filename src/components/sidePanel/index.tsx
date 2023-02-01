/**
 *
 * SidePanel
 *
 */

import { ISidePanelProps } from '../../interfaces';
import { StyledSidePanel } from './styledComponents';
import Asset from '../asset';

function SidePanel({ onAssetClick, assets }: ISidePanelProps): JSX.Element {
  return (
    <StyledSidePanel>
      {assets.map((asset) => (
        <Asset key={asset.name} asset={asset} onClick={onAssetClick} />
      ))}
    </StyledSidePanel>
  );
}

export default SidePanel;
