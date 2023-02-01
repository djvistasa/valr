/**
 *
 * BlocksList
 *
 */

import { IBlocksListProps } from '../../interfaces';
import Block from '../block';
import { StyledBlocksList } from './styledComponents';

function BlocksList({ blocks, onBlockClick }: IBlocksListProps): JSX.Element {
  return (
    <StyledBlocksList>
      <table>
        <thead>
          <tr>
            <th>Height</th>
            <th>Hash</th>
            <th>Mined</th>
            <th>Miner</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block) => (
            <Block key={block.height} block={block} onClick={onBlockClick} />
          ))}
        </tbody>
      </table>
    </StyledBlocksList>
  );
}

export default BlocksList;
