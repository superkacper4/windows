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
    size: 5rem;
    &:focus{
      outline: 0;
    }
    position: absolute;
    ${({ dragging }) => dragging && `cursor:grabbing`}
`;

// left: ${props => props.left}
// top: ${props => props.top}

// left: ${({pos}) => `${pos.x}px`};
// top: ${({pos}) => `${pos.y}px`}

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
  position: relative;
`;

const StyledTitle = styled.p`
  color: white;
  width: 100%;
  ${({ dragging }) =>
    dragging && `background-color: blue; box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);`}
`;

const StyledBlocker = styled.span`
  height: 32px;
  width: 32px;
  position: absolute;
  z-index: 1;
  left: 20px;
`;

class Icon extends React.Component {
  // state = {
  //   get pos(){
  //     const {initialPos} = this.props
  //     return initialPos
  //   },
  //   dragging: false,
  //   rel: null,
  // }

  ref = React.createRef();

  constructor(props) {
    super(props);
    const { initialPos } = this.props;
    this.state = { pos: initialPos, dragging: false, rel: null };
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

  render() {
    const { onMouseDown, ref } = this;
    const { pos, dragging } = this.state;
    const { src, content, openProgram } = this.props;
    return (
      <StyledIcon
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        onMouseDown={onMouseDown}
        ref={ref}
        dragging={dragging}
        onDoubleClick={openProgram}
      >
        <StyledBlocker />
        <StyledImg src={src} />
        <StyledTitle dragging={dragging}>{content}</StyledTitle>
      </StyledIcon>
    );
  }
}

Icon.propTypes = {
  initialPos: PropTypes.shape(PropTypes.number.isRequired).isRequired,
  src: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  openProgram: PropTypes.func.isRequired,
};

export default Icon;
