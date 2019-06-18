import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FnList from './FnList';

const StyledFunctionButton = styled.button`
  margin-right: 5px;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
`;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

const FnOpenButton = props => {
  const { title, handleOpenedBtn, id, active } = props;
  return (
    <StyledContainer>
      <StyledFunctionButton onClick={() => handleOpenedBtn(id)}>{title}</StyledFunctionButton>
      <FnList title={title} active={active} />
    </StyledContainer>
  );
};

FnOpenButton.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  handleOpenedBtn: PropTypes.func.isRequired,
};

FnOpenButton.defaultProps = {
  active: false,
};

export default FnOpenButton;
