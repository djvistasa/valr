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
      <td className="highlight">{height}</td>
      <td className="highlight">{hash}</td>
      <td>{time}</td>
      <td className="highlight">N/A</td>
      <td>{size} bytes</td>
    </StyledBlock>
  );
}

export default Block;
