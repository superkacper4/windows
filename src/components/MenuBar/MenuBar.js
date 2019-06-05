import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const StyledMenuBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  background-color: #c0c0c0;
  border-top: 2px solid #dfdfdf;
  display: flex;
  align-items: center;
`;

const StyledStartButton = styled(MenuItem)`
  width: 60px;
`;

const MenuBar = () => (
  <StyledMenuBar>
    <StyledStartButton>Start</StyledStartButton>
    <MenuItem>Test</MenuItem>
    <MenuItem>Test</MenuItem>
  </StyledMenuBar>
);

export default MenuBar;
