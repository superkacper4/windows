import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import FnItem from './FnItem';

const StyledList = styled.ul`
  list-style-type: none;
  width: 150px;
  background-color: #b0b0b0;
  z-index: 1;
  border: 0.1px solid white;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  top: 20px;
  position: absolute;
  transform: scale(${({ active }) => (active ? 1 : 0)});
`;

const FnList = props => {
  const data = [
    [
      'Open',
      'Open With...',
      'Create Folder...',
      'Create Document...',
      'Create Shortcut',
      'Import file',
      'Download file(s)',
      'Open Terminal here',
      'Quit',
    ],
    ['Select all', 'Cut', 'Copy', 'Paste', 'Rename', 'Delete'],
    ['Refresh', 'Navigation', 'Icons', 'List'],
  ];
  const { title, active } = props;
  const file = title === 'File' ? data[0].map(li => <FnItem content={li} key={li} />) : '';
  const edit = title === 'Edit' ? data[1].map(li => <FnItem content={li} key={li} />) : '';
  const view = title === 'View' ? data[2].map(li => <FnItem content={li} key={li} />) : '';
  return <StyledList active={active}> {file || edit || view}</StyledList>;
};

FnList.propTypes = {
  title: PropType.string.isRequired,
  active: PropType.bool,
};

FnList.defaultProps = {
  active: false,
};
export default FnList;
