import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppContext from '../../../../context';
import Icon from '../../../Desktop/Icon';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StorageCCon = ({ onSubmit }) => {
  const context = useContext(AppContext);
  const { state } = context;
  const binData = state.Data[1];
  return (
    <StyledSection>
      <Icon
        content={binData.content}
        desk={!binData.desk}
        src={binData.src}
        key={binData.key}
        functions={binData.functions}
        openPath={() => onSubmit('/c/kosz')}
        active={binData.active}
        initialPos={{ x: 0, y: 5 }}
      />
    </StyledSection>
  );
};

StorageCCon.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default StorageCCon;
