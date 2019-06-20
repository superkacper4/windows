import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FnOpenButton from './FunctionsBar/FnOpenButton';
import Pathbar from './Pathbar';
import Content from './Programs/Content';
import IE from './Programs/IE';
import Paint from './Programs/Paint';

const StyledWindow = styled.article`
  height: 300px;
  width: 300px;
  background-color: #c0c0c0;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-top: 2px solid #dfdfdf;
  border-left: 2px solid #dfdfdf;
  position: absolute;
  z-index: ${props => (props.active ? '3' : '2')};
  /* z-index:3; */
  top: 30%;
  left: 30%;
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

const StyledTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  background-image: linear-gradient(to right, #fd02ff, #8876ff, #08f6ff);
  padding-left: 5px;
`;

const StyledFlexBoxWrapper = styled.section`
  display: flex;
`;

const StyledImg = styled.img`
  display: block;
  height: 20px;
  width: 20px;
`;

const StyledH2 = styled.h2`
  margin-left: 5px;
  font-size: 2rem;
  color: white;
`;

const StyledNavItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  font-size: 2rem;
  background-color: #c0c0c0;
  padding: 0;
  margin: 1px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-top: 2px solid #dfdfdf;
  border-left: 2px solid #dfdfdf;
`;

const StyledFuncitonBar = styled.section`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledContent = styled.section`
  font-size: 2rem;
  width: 100%;
  height: 100%;
  background-color: white;
`;

class Window extends React.Component {
  state = {
    activeBars: [],
    inputValue: '/',
    path: '',
  };

  paths = ['/a', '/c', '/c/kosz', '/c/folder'];

  componentDidMount() {
    const { programName } = this.props;
    if (programName === 'Komputer' || programName === 'Kosz') {
      this.setState({
        activeBars: [false, false, false],
      });
    } else if (programName === 'Paint') {
      this.setState({
        activeBars: [false, false],
      });
    }
    if (programName === 'Kosz') {
      this.setState({
        path: '/c/kosz',
        inputValue: '/c/kosz',
      });
    }
    if (programName === 'Komputer') {
      this.setState({
        path: '/',
        inputValue: '/',
      });
    }
  }

  changePath = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSubmit = () => {
    const { inputValue } = this.state;
    const { paths } = this;
    const actualValue = inputValue;
    const index = paths.findIndex(correct => actualValue.toLowerCase === correct);
    if (index !== -1) {
      this.setState({
        path: actualValue,
      });
    }
  };

  handleOpenedBtn = id => {
    const { activeBars } = this.state;
    const activeBarsCopy = activeBars;
    const prevActive = activeBars[id];
    for (let i = 0; i < activeBarsCopy.length; i += 1) {
      activeBarsCopy[i] = false;
    }
    activeBarsCopy[id] = !prevActive;
    this.setState({
      activeBars: activeBarsCopy,
    });
  };

  render() {
    const { programName, id, imgSrc, closeProgramFn, active, functions } = this.props;
    const { activeBars, path, inputValue } = this.state;
    const { handleOpenedBtn, changePath } = this;
    const condition = functions === undefined || functions.length === 0;
    const conditionBar = programName === 'Kosz' || programName === 'Komputer';
    const checkIE = programName === 'Internet Explorer' ? <IE /> : null;
    const checkContent = path === '/c/kosz' || path === '/' ? <Content /> : null;
    const checkPaint = programName === 'Paint' ? <Paint /> : null;
    const functionBarContent = condition
      ? null
      : functions.map((title, i) =>
          title ? (
            <FnOpenButton
              id={i}
              handleOpenedBtn={handleOpenedBtn}
              active={activeBars[i]}
              key={title}
              title={title}
            />
          ) : (
            ''
          ),
        );
    return (
      <>
        <StyledWindow id={id} active={active}>
          <StyledTitle>
            <StyledFlexBoxWrapper>
              <StyledImg src={imgSrc} />
              <StyledH2>{programName}</StyledH2>
            </StyledFlexBoxWrapper>
            <StyledFlexBoxWrapper>
              <StyledNavItem>_</StyledNavItem>
              <StyledNavItem>O</StyledNavItem>
              <StyledNavItem onClick={closeProgramFn}>X</StyledNavItem>
            </StyledFlexBoxWrapper>
          </StyledTitle>
          {condition ? null : <StyledFuncitonBar>{functionBarContent}</StyledFuncitonBar>}
          {conditionBar ? (
            <Pathbar
              path={path}
              inputValue={inputValue}
              onSubmit={this.onSubmit}
              changePath={changePath}
            />
          ) : null}
          <StyledContent>{checkIE || checkContent || checkPaint}</StyledContent>
        </StyledWindow>
      </>
    );
  }
}

Window.propTypes = {
  id: PropTypes.number.isRequired,
  programName: PropTypes.string,
  imgSrc: PropTypes.string,
  active: PropTypes.number.isRequired,
  closeProgramFn: PropTypes.func.isRequired,
  functions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

Window.defaultProps = {
  programName: 'Program',
  imgSrc: null,
};

export default Window;
