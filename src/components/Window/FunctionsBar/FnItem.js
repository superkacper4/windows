import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const StyledLi = styled.li`
  font-size: 1.3rem;
  height: 20px;
  line-height: 20px;
  width: 100%;
  margin: 0 10px 0 10px;
`;

const FnItem = props => {
  const { content } = props;
  return <StyledLi>{content}</StyledLi>;
};

FnItem.propTypes = {
  content: PropType.string.isRequired,
};

export default FnItem;
