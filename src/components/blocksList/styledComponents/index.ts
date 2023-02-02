import styled from 'styled-components/macro';

const StyledBlocksList = styled.div`
  width: calc(100% - 300px);
  float: right;

  table {
    border-spacing: 30px 0;
    border-collapse: separate;

    th {
      text-align: left;
    }
  }
`;

export { StyledBlocksList };
