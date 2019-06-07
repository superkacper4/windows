import React from 'react';
import styled from 'styled-components';
import pc from '../../img/komputer.png';

const StyledIcon = styled.section`
    height: 60px
    width: 72px
    display: flex
    flex-direction: column
    align-items: center
`;

const StyledImg = styled.img`
  width: 32px;
  height: 32px;
`;

const StyledTitle = styled.p`
    height: 28px;
    line-height: 28px
    color: white
`;

const Icon = () => {
  return (
    <StyledIcon>
      <StyledImg src={pc} />
      <StyledTitle>Komputer</StyledTitle>
    </StyledIcon>
  );
};

export default Icon;
