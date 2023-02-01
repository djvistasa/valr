import { useCallback, useState } from 'react';
import { BlocksApi } from '../../api';
import { IBlock } from '../../interfaces';

function useBlocks() {
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [block, setBlock] = useState<IBlock>();

  const getBlocksByAsset = useCallback(async (asset: string) => {
    const { error, ok, result } = await BlocksApi.getBlocksByAsset(asset);

    if (error) {
      return alert(error);
    }

    if (ok && result && result.pageProps && result.pageProps.latestBlocks) {
      setBlocks(result.pageProps.latestBlocks);
    }
  }, []);

  const getBlockByAssetAndId = useCallback(
    async (asset: string, id: string) => {
      const { error, ok, result } = await BlocksApi.getBlockByAssetAndId(
        id,
        asset,
      );

      if (error) {
        return alert(error);
      }

      if (ok && result) {
        setBlock(result);
      }
    },
    [],
  );

  return {
    getBlocksByAsset,
    getBlockByAssetAndId,
    block,
    blocks,
  };
}

export default useBlocks;
