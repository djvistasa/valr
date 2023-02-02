import { IBlock } from '../../shared';

interface IBlocksListProps {
  blocks: IBlock[];
  onBlockClick: (blockHash: string) => void;
}

export type { IBlocksListProps };
