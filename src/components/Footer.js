import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaShoppingCart } from 'react-icons/fa';

const FooterContainer = {
  display: 'flex',
  backgroundColor: '#ccc',
  color: '#fff',
  padding: '8px',
  bottom: '0',
  width: '100%',
  marginTop: '60px',
};

const IconsContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
};

const IconStyle = {
  textDecoration: 'none',
  fontSize: '29px',
  color: 'gray', // Define a cor cinza por padrão
};

const CartIconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const activeLinkStyle = {
  color: 'blue', // Define a cor azul apenas para links ativos
};

const Footer = () => {
  return (
    <footer style={FooterContainer}>
      <div style={IconsContainer}>
        <NavLink to="/" style={IconStyle} activeStyle={activeLinkStyle} exact>
          <FaHome />
        </NavLink>
        {/* Adicione o ícone do carrinho de compras centralizado */}
        <NavLink to="/shop" style={IconStyle} activeStyle={activeLinkStyle}>
          <div style={{ ...IconStyle, ...CartIconStyle }}>
            <FaShoppingCart />
          </div>
        </NavLink>
        <NavLink to="/perfil" style={IconStyle} activeStyle={activeLinkStyle}>
          <FaUser />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
