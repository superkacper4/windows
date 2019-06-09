import React from 'react';
import styled from 'styled-components';
import AppContext from '../../context';
import MenuItem from './MenuItem';
import Clock from './Clock';
import StartBar from './StartBar';
import StartBarItem from './StartBarItem';
import logo from '../../assets/logo2.png';

const StyledMenuBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  background-color: #c0c0c0;
  border-top: 2px solid #dfdfdf;
  display: flex;
  align-items: center;
`;

const StyledStartButton = styled(MenuItem)`
  width: 80px;
  display: flex;
  /* background-color: black;
  color: white; */
  justify-content: space-around;
`;

const StyledLogo = styled.img`
  width: 24px;
  height: 18px;
`;

const StyledStartBarItem = styled(StartBarItem)`
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
`;

const StyledStartBar = styled(StartBar)`
  bottom: 160px;
  left: 153px;
  height: 400px;
  transform: scale(${props => props.scale});
`;

// class MenuBar extends React.Component {

//   state = {
//     scale: 0,
//     scale2ndBar: 0,
//   };

//   render() {
//     const { scale, scale2ndBar } = this.state;

//     return (

//     );
//   }
// }

const MenuBar = () => (
  <AppContext.Consumer>
    {context => (
      <StyledMenuBar>
        <StartBar scale={context.state.scale}>
          <StartBarItem>Programs</StartBarItem>
          <StartBarItem>Programs</StartBarItem>
          <StartBarItem more onClick={context.startBarFn2}>
            Programs
          </StartBarItem>
          <StartBarItem>Programs</StartBarItem>
          <StartBarItem>Programs</StartBarItem>
          <StartBarItem>Programs</StartBarItem>
          <StyledStartBarItem>Programs</StyledStartBarItem>
          <StartBarItem>Programs</StartBarItem>
          <StartBarItem>Programs</StartBarItem>
        </StartBar>
        <StyledStartBar scale={context.state.scale2ndBar} />
        {/* <StyledStartButton onClick={() => this.startBarFn(this.props.scale)}> */}
        <StyledStartButton onClick={context.startBarFn}>
          <StyledLogo src={logo} />
          Start
        </StyledStartButton>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
        <Clock />
      </StyledMenuBar>
    )}
  </AppContext.Consumer>
);

export default MenuBar;
