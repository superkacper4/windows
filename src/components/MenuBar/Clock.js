import React from 'react';
import styled from 'styled-components';
import Clock from 'react-live-clock';

const StyledClock = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
  height: 24px;
  padding: 0 10px;
  margin: 0 4px;
  /* width: 20px; */
  border-bottom: 1px solid #dfdfdf;
  border-right: 1px solid #dfdfdf;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

const Timer = () => (
  <StyledClock>
    <Clock format="HH:mm" ticking timezone="Europe/Warsaw" />
  </StyledClock>
);

export default Timer;
