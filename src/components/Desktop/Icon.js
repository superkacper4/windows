import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* zrobić mousedown na elementach żeby przenosić */
const StyledIcon = styled.button`
    height: 60px
    width: 72px
    display: flex
    flex-direction: column
    align-items: center
    background-color: transparent;
    border: none;
    position: absolute;
    left: ${({ statX, isChanged }) => isChanged && `${statX}px`};
    top: ${({ top, statY, isChanged }) => (isChanged ? `${statY}px` : `${top * 60 + 5}px`)};
    ${({ active, mouseX, mouseY, move, posX, posY }) =>
      active &&
      `transform: translateX(${move ? mouseX - posX : 0}px) translateY(${
        move ? mouseY - posY : 0
      }px)`}
`;

// ${({posX,posY,isChanged}) => isChanged && `transfrom: translateX(${posX-16}px) translateY(${posY-10}px)`}

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
  background-blend-mode: blue;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    background-color: black;
  }
`;

const StyledTitle = styled.p`
  height: 28px;
  color: white;
`;

class Icon extends React.Component {
  state = {
    active: false,
    mouseX: 0,
    mouseY: 0,
    posX: 0,
    posY: 0,
    statX: 0,
    statY: 0,
    isChanged: false,
    move: false,
  };

  ref = React.createRef();

  handleMove = e => {
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
      move: true,
    });
  };

  handleDown = e => {
    this.setState({
      active: true,
      posX: e.clientX,
      posY: e.clientY,
    });
  };

  handleUp = e => {
    this.setState({
      statX: e.clientX - 36,
      statY: e.clientY - 30,
      active: false,
      move: false,
      isChanged: true,
      // posX: mouseX,
      // posY: mouseY
    });
  };

  render() {
    const { src, content, top } = this.props;
    const { handleDown, handleUp, handleMove, ref } = this;
    const { active, mouseX, mouseY, posX, posY, move, isChanged, statX, statY } = this.state;
    return (
      <StyledIcon
        top={top}
        active={active}
        mouseX={mouseX}
        mouseY={mouseY}
        posX={posX}
        posY={posY}
        statX={statX}
        statY={statY}
        move={move}
        isChanged={isChanged}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        onMouseMove={active ? handleMove : null}
        ref={ref}
        innerRef={ref}
      >
        <StyledImg src={src} />
        <StyledTitle>{content}</StyledTitle>
      </StyledIcon>
    );
  }
}

Icon.propTypes = {
  top: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Icon;
