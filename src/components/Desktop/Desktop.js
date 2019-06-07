import React from 'react';
import styled from 'styled-components';
import Wallpaper from '../../img/wallpaper.jpg';
import Icon from './Icon';

/* imgs */

import pc from '../../img/komputer.png';
import bin from '../../img/kosz.png';
import IE from '../../img/IE.png';
import paint from '../../img/paint.png';

const Data = [
  {
    src: pc,
    content: 'Komputer',
  },
  {
    src: bin,
    content: 'Kosz',
  },
  {
    src: paint,
    content: 'Paint',
  },
  {
    src: IE,
    content: 'Internet Explorer',
  },
];

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
  const Icons = Data.map(Icone => <Icon src={Icone.src} content={Icone.content} />);

  return <StyledDesktop>{Icons}</StyledDesktop>;
};

export default Desktop;
