import React from 'react';
import styled from 'styled-components';
import Wallpaper from '../../img/wallpaper.jpg';
import Icon from './Icon';

const StyledDesktop = styled.main`
    height: 100vh;
    width: 100%
    background-image: url(${Wallpaper});
    background-repeat: no-repeat;
    background-size: cover
    background-position: center;
    padding: 5px
`;

const Desktop = () => {
  return (
    <StyledDesktop>
      <Icon />
    </StyledDesktop>
  );
};

export default Desktop;
