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
import { useNavigate } from 'react-router';

function Blocks(): JSX.Element {
  const { blocks, assets, getBlocksByAsset } = useBlocks();

  const navigate = useNavigate();

  const handleBlockSearch = (blockHash: string) => {
    navigate({ pathname: `/block/btc/${blockHash}` });
  };

  const handleAssetClick = (asset: string) => getBlocksByAsset(asset);

  const handleBlockClick = (blockHash: string) =>
    navigate({ pathname: `/block/btc/${blockHash}` });

  useEffect(() => {
    getBlocksByAsset('btc');
  }, [getBlocksByAsset]);

  return (
    <StyledApplicationWrapper>
      <Header handleBlockSearch={handleBlockSearch} />
      <SidePanel onAssetClick={handleAssetClick} assets={assets} />
      {blocks.length > 0 ? (
        <BlocksList blocks={blocks} onBlockClick={handleBlockClick} />
      ) : null}
    </StyledApplicationWrapper>
  );
}

export default Blocks;
