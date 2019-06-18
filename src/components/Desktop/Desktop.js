import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wallpaper from '../../assets/img/wallpaper.jpg';
import Icon from './Icon';
import Window from '../Window/Window';

const StyledDesktop = styled.main`
  height: 100vh;
  width: 100%;
  background-image: url(${Wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 5px;
`;

const StyledSelect = styled.div`
  transform-origin: right bottom;
`;

const Desktop = props => {
  const { data, clickFn, openProgramFn, closeProgramFn, activePrograms } = props;
  const Icons = data.map(Icone => (
    <Icon
      key={Icone.key}
      top={Icone.key}
      src={Icone.src}
      initialPos={Icone.initialPos}
      content={Icone.content}
      openProgramFn={() => openProgramFn(Icone.key)}
    />
  ));

  const Windows = activePrograms.map(window => (
    <Window
      key={window.key}
      id={window.key}
      programName={window.content}
      imgSrc={window.src}
      active={window.active}
      functions={window.functions}
      closeProgramFn={() => closeProgramFn(window.key)}
    />
  ));

  return (
    <>
      <StyledDesktop onClick={clickFn}>
        {Windows}
        {Icons}
      </StyledDesktop>
      <StyledSelect />
    </>
  );
};

Desktop.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
  activePrograms: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
  clickFn: PropTypes.func.isRequired,
  openProgramFn: PropTypes.func.isRequired,
  closeProgramFn: PropTypes.func.isRequired,
};

Desktop.defaultProps = {
  data: '',
  activePrograms: '',
};

export default Desktop;
