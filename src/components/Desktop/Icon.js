import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.button`
    height: 60px
    width: 72px
    display: flex
    flex-direction: column
    align-items: center
    background-color: transparent;
    border: none;
`;

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
  background-blend-mode: blue;
`;

const StyledTitle = styled.p`
    height: 28px;
    line-height: 28px
    color: white

`;

const Icon = ({ src, content }) => {
  return (
    <StyledIcon>
      <StyledImg src={src} />
      <StyledTitle>{content}</StyledTitle>
    </StyledIcon>
  );
};

Icon.propTypes = {
  src: String.isRequired,
  content: String.isRequired,
};

export default Icon;
