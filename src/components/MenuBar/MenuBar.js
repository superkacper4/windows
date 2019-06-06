import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import Clock from './Clock';
import StartBar from './StartBar';
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

class MenuBar extends React.Component {
  state = {
    scale: 0,
  };

  startBarFn = () => {
    const { scale } = this.state;
    if (scale === 0) this.setState({ scale: 1 });
    else if (scale === 1) this.setState({ scale: 0 });
    // this.setState(prevState => ({ scale: !prevState }));
  };

  render() {
    const { scale } = this.state;

    return (
      <StyledMenuBar>
        <StartBar scale={scale} />
        <StyledStartButton onClick={this.startBarFn}>
          <StyledLogo src={logo} />
          Start
        </StyledStartButton>
        <MenuItem>Test</MenuItem>
        <MenuItem>Test</MenuItem>
        <Clock />
      </StyledMenuBar>
    );
  }
}

export default MenuBar;
