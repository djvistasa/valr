/**
 *
 * Blocks
 *
 */
import { StyledApplicationWrapper } from '../../theme/global-styles';
import SidePanel from '../../components/sidePanel';
import Header from '../../components/header';
import { useBlocks } from '../../hooks';
import { useEffect } from 'react';
import BlocksList from '../../components/blocksList';

function Blocks(): JSX.Element {
  const { blocks, getBlocksByAsset } = useBlocks();
  const handleBlockSearch = (blockSearchValue: string) => {
    console.log(blockSearchValue);
  };

  const handleAssetClick = (asset: string) => getBlocksByAsset(asset);
  const handleBlockClick = (blockId: number) => console.log(blockId);

  useEffect(() => {
    getBlocksByAsset('btc');
  }, [getBlocksByAsset]);

  return (
    <StyledApplicationWrapper>
      <Header handleBlockSearch={handleBlockSearch} />
      <SidePanel onAssetClick={handleAssetClick} />
      <BlocksList blocks={blocks} onBlockClick={handleBlockClick} />
    </StyledApplicationWrapper>
  );
}

export default Blocks;
