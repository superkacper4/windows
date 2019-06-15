import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wallpaper from '../../assets/img/wallpaper.jpg';
import Icon from './Icon';

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
  const { data, clickFn, openProgramFn } = props;
  const Icons = data.map(Icone => (
    <Icon
      key={Icone.key}
      top={Icone.key}
      src={Icone.src}
      content={Icone.content}
      onClick={() => openProgramFn(Icone.key)}
    />
  ));

  return (
    <>
      <StyledDesktop onClick={clickFn}>{Icons}</StyledDesktop>
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
  clickFn: PropTypes.func.isRequired,
  openProgramFn: PropTypes.func.isRequired,
};

Desktop.defaultProps = {
  data: '',
};

export default Desktop;
