import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppContext from '../../../context';
import MenuItem from './MenuItem';
import Clock from '../Clock/Clock';
import StartBar from '../StartBar/StartBar';
import StartBarItem from '../StartBar/StartBarItem';
import logo from '../../../assets/img/logo2.png';

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

const MenuBar = props => {
  const { data } = props;

  const openPrograms = data.map(program => {
    return (
      <MenuItem
        key={program.key}
        title={program.content}
        active={program.active}
        onClick={() => props.openProgramFn(program.key)}
      >
        {program.content.length <= 8 ? program.content : `${program.content.substring(0, 8)}..`}
      </MenuItem>
    );
  });

  return (
    <AppContext.Consumer>
      {context => (
        <StyledMenuBar>
          <StartBar scale={context.state.scale}>
            <StartBarItem>Programs</StartBarItem>
            <StartBarItem>Programs</StartBarItem>
            <StartBarItem
              more
              onMouseOver={context.startBarFn2}
              onFocus={context.startBarFn2}
              onMouseLeave={context.closeMoreFn}
            >
              Programs
            </StartBarItem>
            <StartBarItem>Programs</StartBarItem>
            <StartBarItem>Programs</StartBarItem>
            <StartBarItem>Programs</StartBarItem>
            <StyledStartBarItem>Programs</StyledStartBarItem>
            <StartBarItem>Programs</StartBarItem>
            <StartBarItem>Programs</StartBarItem>
          </StartBar>
          <StyledStartBar
            scale={context.state.scale2ndBar}
            onMouseOver={context.startBarFn2}
            onFocus={context.startBarFn2}
          />
          {/* <StyledStartButton onClick={() => this.startBarFn(this.props.scale)}> */}
          <StyledStartButton onClick={context.startBarFn}>
            <StyledLogo src={logo} />
            Start
          </StyledStartButton>
          {openPrograms}
          <Clock />
        </StyledMenuBar>
      )}
    </AppContext.Consumer>
  );
};

MenuBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
  openProgramFn: PropTypes.func.isRequired,
};

MenuBar.defaultProps = {
  data: '',
};

export default MenuBar;
