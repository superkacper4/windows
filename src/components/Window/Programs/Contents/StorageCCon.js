import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../../../context';
import Icon from '../../../Desktop/Icon';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StorageCCon = () => {
  const context = useContext(AppContext);
  const { state, openProgramFn } = context;
  const binData = state.Data[1];
  return (
    <StyledSection>
      <Icon
        content={binData.content}
        desk={!binData.desk}
        folder={binData.desk}
        src={binData.src}
        key={binData.key}
        functions={binData.functions}
        openProgramFn={openProgramFn}
        id={binData.key}
        active={binData.active}
        initialPos={{ x: 0, y: 5 }}
      />
    </StyledSection>
  );
};

export default StorageCCon;
