import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../../Desktop/Icon';
import folder from '../../../../assets/img/folder.png';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StorageACon = ({ onSubmit }) => {
  return (
    <StyledSection>
      <Icon
        content="Desktop"
        initialPos={{ x: 0, y: 5 }}
        src={folder}
        desk={false}
        openPath={() => onSubmit('/a/desktop')}
      />
    </StyledSection>
  );
};

StorageACon.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default StorageACon;
