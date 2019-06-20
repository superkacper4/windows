import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/* dodać na przycisk go(pierwszy z prawej) onClicka który będzie przenosił ściekę dalej jeśli będzie ona zgodna z danymi w window (funkcja przycisku tez w window) */

const StyledBar = styled.section`
  height: 20px;
  width: 100%;
  position: relative;
  display: flex;
`;

const StyledButtonSmall = styled.button`
  height:100%
  background-color: lightgray;
  border: 1px solid gray;
  width: 15px;
`;
const StyledButtonBig = styled.button`
  height:100%
  background-color: lightgray;
  border: 1px solid gray;
  width: 25px;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Pathbar = ({ inputValue, changePath, onSubmit }) => {
  return (
    <StyledBar>
      <StyledButtonSmall />
      <StyledButtonBig />
      <StyledInput value={inputValue} onChange={changePath} changePath={changePath} />
      <StyledButtonBig onClick={onSubmit} />
    </StyledBar>
  );
};

Pathbar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changePath: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Pathbar;
