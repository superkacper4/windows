import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWindow = styled.div`
  height: 300px;
  width: 300px;
  background-color: #c0c0c0;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-top: 2px solid #dfdfdf;
  border-left: 2px solid #dfdfdf;
  position: absolute;
  z-index: 2;
  top: 30%;
  left: 30%;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  background-image: linear-gradient(to right, #fd02ff, #8876ff, #08f6ff);
  padding-left: 5px;
`;

const StyledFlexBoxWrapper = styled.div`
  display: flex;
`;

const StyledImg = styled.img`
  display: block;
  height: 20px;
  width: 20px;
`;

const StyledH2 = styled.h2`
  margin-left: 5px;
  font-size: 2rem;
  color: white;
`;

const StyledNavItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  font-size: 2rem;
  background-color: #c0c0c0;
  padding: 0;
  margin: 1px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-top: 2px solid #dfdfdf;
  border-left: 2px solid #dfdfdf;
`;

const StyledContent = styled.div`
  font-size: 2rem;
  width: 100%;
  height: 100%;
  /* background-color: white; */
`;

const Window = props => {
  const { programName, key, imgSrc, closeProgramFn } = props;
  return (
    <>
      <StyledWindow key={key}>
        <StyledTitle>
          <StyledFlexBoxWrapper>
            <StyledImg src={imgSrc} />
            <StyledH2>{programName}</StyledH2>
          </StyledFlexBoxWrapper>
          <StyledFlexBoxWrapper>
            <StyledNavItem>_</StyledNavItem>
            <StyledNavItem>O</StyledNavItem>
            <StyledNavItem onClick={closeProgramFn}>X</StyledNavItem>
          </StyledFlexBoxWrapper>
        </StyledTitle>
        <StyledContent>superkacper4</StyledContent>
      </StyledWindow>
    </>
  );
};

Window.propTypes = {
  key: PropTypes.number.isRequired,
  programName: PropTypes.string,
  imgSrc: PropTypes.string,
  closeProgramFn: PropTypes.func.isRequired,
};

Window.defaultProps = {
  programName: 'Program',
  imgSrc: null,
};

export default Window;
