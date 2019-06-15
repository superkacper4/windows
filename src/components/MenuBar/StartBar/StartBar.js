import styled from 'styled-components';

const StartBar = styled.div`
  transform: scale(1);
  width: 150px;
  height: 200px;
  background-color: #c0c0c0;
  position: absolute;
  bottom: 28px;
  left: 4px;
  z-index: 3;
  transform: scale(${props => props.scale});
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-top: 1px solid #dfdfdf;
  border-left: 1px solid #dfdfdf;
`;

export default StartBar;
