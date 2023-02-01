import { IBlock } from '../../shared';

interface IBlocksListProps {
  blocks: IBlock[];
  onBlockClick: (blockId: number) => void;
}

export type { IBlocksListProps };
