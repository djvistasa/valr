/**
 *
 * BlockDescription
 *
 */
import { useEffect } from 'react';
import { useParams } from 'react-router';
import BlockDetails from '../../components/blockDetails';
import { useBlocks } from '../../hooks';
import { StyledApplicationWrapper } from '../../theme/global-styles';

function BlockDescription(): JSX.Element {
  const { id, asset } = useParams();
  const { block, getBlockByAssetAndId } = useBlocks();

  useEffect(() => {
    if (id && asset) {
      getBlockByAssetAndId(asset as string, id);
    }
  }, [id]);

  return (
    <StyledApplicationWrapper>
      {block ? <BlockDetails block={block} /> : null}
    </StyledApplicationWrapper>
  );
}

export default BlockDescription;
