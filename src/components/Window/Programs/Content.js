import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StorageACon from './Contents/StorageACon';
import StorageCCon from './Contents/StorageCCon';
import StartCon from './Contents/StartCon';
import BinCon from './Contents/BinCon';
import DesktopFCon from './Contents/DesktopFCon';

const StyledContent = styled.section`
  font-size: 2rem;
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
`;

const Content = ({ path, onSubmit }) => {
  let mainContent;
  switch (path) {
    case '/':
      mainContent = <StartCon onSubmit={onSubmit} />;
      break;
    case '/c/kosz':
    case '/c/kosz/':
      mainContent = <BinCon onSubmit={onSubmit} />;
      break;
    case '/a':
    case '/a/':
      mainContent = <StorageACon onSubmit={onSubmit} />;
      break;
    case '/a/desktop':
    case '/a/desktop/':
      mainContent = <DesktopFCon />;
      break;
    case '/c':
    case '/c/':
      mainContent = <StorageCCon />;
      break;
    default:
      return '';
  }
  return <StyledContent>{mainContent}</StyledContent>;
};

Content.propTypes = {
  path: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Content;
