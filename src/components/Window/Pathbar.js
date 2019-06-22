import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Pathbar = ({ inputValue, changePath, onSubmit, keyDown, back }) => {
  return (
    <StyledBar>
      <StyledButtonSmall onClick={back} />
      <StyledButtonBig />
      <StyledInput
        value={inputValue}
        onKeyDown={keyDown}
        onChange={changePath}
        changePath={changePath}
      />
      <StyledButtonBig onClick={onSubmit} />
    </StyledBar>
  );
};

Pathbar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changePath: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  keyDown: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
};

export default Pathbar;
