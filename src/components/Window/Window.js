import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FnOpenButton from './FunctionsBar/FnOpenButton';

const StyledWindow = styled.div`
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
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  background-image: linear-gradient(to right, #fd02ff, #8876ff, #08f6ff);
  padding-left: 5px;
`;

const StyledFlexBoxWrapper = styled.div`
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

const StyledContent = styled.div`
  font-size: 2rem;
  width: 100%;
  height: 100%;
  /* background-color: white; */
`;

class Window extends React.Component {
  state = {
    activeBars: [],
  };

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
  }

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
    const { activeBars } = this.state;
    const { handleOpenedBtn } = this;
    const condition = functions === undefined || functions.length === 0;
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

          <StyledContent>superkacper4</StyledContent>
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
