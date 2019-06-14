import styled from 'styled-components';

const StartBarItem = styled.div`
position:relative;
  height: 22px;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* background-color: ${props => (props.more ? 'black' : 'red')} */

  &::after{
    content: "";
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-bottom-width: 6px;
    border-top-width: 6px;
    border-left: 6px solid black;
    position:absolute;
    right:5px;
    top:50%;
    transform: scale(${props => (props.more ? '1' : '0')}) translateY(-50%);
  }

  &:hover {
    background-color: #0090e4;
  }
`;

export default StartBarItem;
