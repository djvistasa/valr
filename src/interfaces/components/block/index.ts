import { IBlock } from '../..';

interface IBlockProps {
  block: IBlock;
  onClick: (blockId: string) => void;
}

export type { IBlockProps };
