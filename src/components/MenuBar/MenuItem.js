import styled from 'styled-components';

const MenuItem = styled.button`
  width: 100px;
  height: 24px;
  margin-left: 2px;
  background-color: #c0c0c0;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-top: 2px solid #dfdfdf;
  border-left: 2px solid #dfdfdf;
  outline: none;

  &:active {
    border: 0;
    /* box-shadow: 2px 2px 0 inset; */
    border-bottom: 2px solid #dfdfdf;
    border-right: 2px solid #dfdfdf;
    border-top: 2px solid black;
    border-left: 2px solid black;
    outline: none;
  }
`;

export default MenuItem;
