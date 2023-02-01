/**
 *
 * Block
 *
 */

import { IBlockProps } from '../../interfaces';
import { StyledBlock } from './styledComponents';
import { truncate } from '../../utils';

function Block({
  block: { height, hash, time, size },
  onClick,
}: IBlockProps): JSX.Element {
  return (
    <StyledBlock onClick={() => onClick(height)}>
      <td>{height}</td>
      <td>{hash}</td>
      <td>{time}</td>
      <td>N/A</td>
      <td>{size} bytes</td>
    </StyledBlock>
  );
}

export default Block;
