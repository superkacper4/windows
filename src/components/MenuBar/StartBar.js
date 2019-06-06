import styled from 'styled-components';

const StartBar = styled.div`
  transform: scale(1);
  width: 400px;
  height: 500px;
  background-color: #c0c0c0;
  position: absolute;
  bottom: 30px;
  left: 0;
  z-index: 3;
  transform: scale(${props => props.scale});
`;

export default StartBar;
