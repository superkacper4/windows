import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import dysk from '../../assets/img/dysk.png';
import folder from '../../assets/img/folder.png';

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
  ${({ dragging }) => dragging && `cursor:grabbing`}
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
  flex-grow: 1;
  background-color: white;
  position: relative;
`;

class Window extends React.Component {
  paths = [
    '/a',
    '/a/',
    '/c',
    '/c/',
    '/c/kosz',
    '/c/kosz/',
    '/c/folder',
    '/c/folder/',
    '/',
    '/a/desktop',
    '/a/desktop/',
  ];

  ref = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      activeBars: [],
      inputValue: '/',
      path: '',
      pos: { x: Math.floor(Math.random() * 1000), y: Math.floor(Math.random() * 500) },
      dragging: false,
      rel: null,
    };
  }

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

  componentDidUpdate(props, state) {
    const { dragging } = this.state;
    if (dragging && !state.dragging) {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    } else if (!dragging && state.dragging) {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }

  onMouseDown = e => {
    const { ref } = this;
    if (e.button !== 0) return;
    const posX = ref.current.offsetLeft;
    const posY = ref.current.offsetTop;
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - posX,
        y: e.pageY - posY,
      },
    });
    e.stopPropagation();
    e.preventDefault();
  };

  onMouseUp = e => {
    this.setState({ dragging: false });
    e.stopPropagation();
    e.preventDefault();
  };

  onMouseMove = e => {
    const { dragging, rel } = this.state;
    if (!dragging) return;
    const pos = {
      x: e.pageX - rel.x,
      y: e.pageY - rel.y,
    };
    this.setState({
      pos,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  changePath = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  keyDown = e => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  };

  onSubmit = pathIcon => {
    const { inputValue, path } = this.state;
    const { paths } = this;
    let actualValue;
    if (path === inputValue) {
      actualValue = pathIcon;
    } else {
      actualValue = inputValue;
    }
    const index = paths.findIndex(correct => actualValue === correct);
    if (index !== -1) {
      this.setState({
        path: actualValue,
        inputValue: actualValue,
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

  handleBack = () => {
    const { path } = this.state;
    let pathC = path.split('');
    if (path !== '/') {
      const pathR = pathC.reverse();
      const index = pathR.findIndex(id => id === '/');
      if (pathR.length === 2) {
        pathR.splice(0, index);
      } else {
        pathR.splice(0, index + 1);
      }
      pathC = pathR.reverse().join('');
      this.setState({
        path: pathC,
        inputValue: pathC,
      });
    }
  };

  createTitle = () => {
    const { path } = this.state;
    let pathC = path.split('');
    if (path !== '/') {
      const pathR = pathC.reverse();
      const index = pathR.findIndex(id => id === '/');
      pathR.splice(index, pathR.length - 1);
      pathC = pathR.reverse().join('');
    }
    return pathC;
  };

  createImg = () => {
    const { path } = this.state;
    const { imgSrc } = this.props;
    let src;
    switch (path) {
      case '/a':
      case '/a/':
      case '/c':
      case '/c/':
        src = dysk;
        break;
      case '/a/desktop':
      case '/a/desktop/':
        src = folder;
        break;
      case '/c/kosz':
      case '/':
        src = imgSrc;
        break;
      default:
        src = null;
    }
    return src;
  };

  handleHome = () => {
    this.setState({
      path: '/',
      inputValue: '/',
    });
  };

  render() {
    const { programName, id, imgSrc, closeProgramFn, active, functions } = this.props;
    const { activeBars, path, inputValue, dragging, pos } = this.state;
    const {
      handleOpenedBtn,
      changePath,
      paths,
      onSubmit,
      ref,
      onMouseDown,
      keyDown,
      handleBack,
      handleHome,
      createImg,
    } = this;

    /* conditions */
    const condition = functions === undefined || functions.length === 0;
    const conditionBar = programName === 'Kosz' || programName === 'Komputer';
    const findIndex = paths.findIndex(pathe => pathe === path);
    const checkIE = programName === 'Internet Explorer' ? <IE /> : null;
    const checkContent = findIndex !== -1 ? <Content onSubmit={onSubmit} path={path} /> : null;
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
        <StyledWindow
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
          onMouseDown={onMouseDown}
          ref={ref}
          dragging={dragging}
          id={id}
          active={active}
        >
          <StyledTitle>
            <StyledFlexBoxWrapper>
              <StyledImg src={path !== '' ? createImg() : imgSrc} />
              <StyledH2>{conditionBar ? this.createTitle() : programName}</StyledH2>
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
              onSubmit={onSubmit}
              changePath={changePath}
              keyDown={keyDown}
              back={handleBack}
              home={handleHome}
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
