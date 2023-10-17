import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#333' : '#FFA500')};
  color: ${props => (props.isDarkMode ? '#FFA500' : 'black')};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;

const HeaderTitle = styled.h3`
  margin: 10px;
`;

const IconStyle = {
    textDecoration: 'none',
    fontSize: '29px',
    color: 'gray',
};

const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  margin-right: 10px;
`;

const Header = ({ cartItemCount, resetCart, isDarkMode }) => {
    return (
        <HeaderContainer isDarkMode={isDarkMode}>
            <HeaderTitle>Produtos</HeaderTitle>
            <NavLink to="/finish-order" style={{textDecoration: 'none'}}>
                <CartContainer style={{textDecoration: 'none'}}>
                    <span style={{textDecoration: 'none'}}>{cartItemCount}</span>
                    <CartIcon style={{textDecoration: 'none'}} />
                </CartContainer>
            </NavLink>
        </HeaderContainer>
    );
};

export default Header;
