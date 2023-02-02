/**
 *
 * Block
 *
 */

import { IBlockProps } from '../../interfaces';
import { StyledBlock } from './styledComponents';

function Block({
  block: { height, hash, time, size },
  onClick,
}: IBlockProps): JSX.Element {
  return (
    <StyledBlock>
      <td className="highlight">{height}</td>
      <td className="highlight">
        <a onClick={() => onClick(hash)}>{hash}</a>
      </td>
      <td>{time}</td>
      <td className="highlight">N/A</td>
      <td>{size} bytes</td>
    </StyledBlock>
  );
}

export default Block;
