import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../../Desktop/Icon';
import Storage from '../../../../assets/img/dysk.png';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StartCon = ({ onSubmit }) => {
  const iconsData = [
    {
      key: 0,
      src: Storage,
      content: 'Storage(A:)',
      path: '/a',
      desk: false,
      initialPos: {
        x: 0,
        y: 5,
      },
    },
    {
      key: 1,
      src: Storage,
      content: 'System(C:)',
      path: '/c',
      desk: false,
      initialPos: {
        x: 72,
        y: 5,
      },
    },
  ];

  const Icons = iconsData.map(Icone => (
    <Icon
      openPath={() => onSubmit(Icone.path)}
      desk={Icone.desk}
      src={Icone.src}
      key={Icone.key}
      content={Icone.content}
      initialPos={Icone.initialPos}
    />
  ));
  return <StyledSection>{Icons}</StyledSection>;
};

StartCon.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default StartCon;
