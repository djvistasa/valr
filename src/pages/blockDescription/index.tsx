/**
 *
 * BlockDescription
 *
 */
import { useEffect } from 'react';
import { useNavigation, useParams } from 'react-router';
import { useBlocks } from '../../hooks';
import { StyledApplicationWrapper } from '../../theme/global-styles';

function BlockDescription(): JSX.Element {
  const { id } = useParams();
  const { block, getBlockByAssetAndId } = useBlocks();

  useEffect(() => {
    if (id) {
      getBlockByAssetAndId('btc', id);
    }
  }, [id]);

  useEffect(() => {
    if (block) {
      console.log(block);
    }
  }, [block]);
  return <StyledApplicationWrapper></StyledApplicationWrapper>;
}

export default BlockDescription;
