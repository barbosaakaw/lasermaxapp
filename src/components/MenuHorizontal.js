import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;
  height: 40px;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  margin: 0 10px;
  color: ${(props) => (props.selected ? 'white' : 'black')};
  background-color: ${(props) => (props.selected ? '#FFA500' : 'transparent')} !important;
  padding: 5px 10px;
  border-radius: 5px;
`;

const MenuHorizontal = ({ selectedMenuItem, setSelectedMenuItem }) => {
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <MenuContainer>
      <MenuItem
        className='menu-item'
        selected={selectedMenuItem === 'Gravação'}
        onClick={() => handleMenuItemClick('Gravação')}
      >
        Gravação
      </MenuItem>
      <MenuItem
        className='menu-item'
        selected={selectedMenuItem === 'EPIs'}
        onClick={() => handleMenuItemClick('EPIs')}
      >
        EPIs
      </MenuItem>
      <MenuItem
        className='menu-item'
        selected={selectedMenuItem === 'Cortes'}
        onClick={() => handleMenuItemClick('Cortes')}
      >
        Cortes
      </MenuItem>
      <MenuItem
        className='menu-item'
        selected={selectedMenuItem === 'Teclados'}
        onClick={() => handleMenuItemClick('Teclados')}
      >
        Teclados
      </MenuItem>
    </MenuContainer>
  );
};

export default MenuHorizontal;
