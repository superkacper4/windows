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
    &:focus{
      outline: 0;
    }
    position: absolute;
    left: ${({ statX, isChanged }) => isChanged && `${statX}px`};
    top: ${({ top, statY, isChanged }) => (isChanged ? `${statY}px` : `${top * 60 + 5}px`)};
    ${({ active, mouseX, mouseY, move, posX, posY }) =>
      active &&
      `transform: translateX(${move ? mouseX - posX : 0}px) translateY(${
        move ? mouseY - posY : 0
      }px); cursor: grabbing;`}

`;

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
  position: relative;
`;

const StyledTitle = styled.p`
  color: white;
  ${({ active }) =>
    active &&
    `background-color: blue; border: 1px solid darkblue; box-shadow: 4px 2px 5px -1px rgba(0,0,0,0.75);`}
`;

const StyledBlocker = styled.span`
  height: 32px;
  width: 32px;
  position: absolute;
  z-index: 1;
  left: 20px;
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

  handleUp = () => {
    const { ref } = this;
    const { mouseX, posX, mouseY, posY } = this.state;
    this.setState({
      statX: ref.current.offsetLeft + mouseX - posX,
      statY: ref.current.offsetTop + mouseY - posY,
      active: false,
      move: false,
      isChanged: true,
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
      >
        <StyledBlocker />
        <StyledImg src={src} />
        <StyledTitle active={active}>{content}</StyledTitle>
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
