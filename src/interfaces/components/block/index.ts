import { IBlock } from '../..';

interface IBlockProps {
  block: IBlock;
  onClick: (blockId: number) => void;
}

export type { IBlockProps };
