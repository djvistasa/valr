import styled from 'styled-components';

const StyledBlocksList = styled.div`
  width: calc(100% - 300px);
  float: right;

  table {
    border-spacing: 30px 0;
    border-collapse: separate;

    th {
      text-align: left;
    }

    tr {
      cursor: pointer;
    }
  }
`;

export { StyledBlocksList };
