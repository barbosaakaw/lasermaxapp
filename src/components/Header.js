import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

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

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer; /* Torna a imagem clicável */
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* Torna o ícone clicável */
`;

const Header = ({ toggleMenu, isDarkMode, toggleDarkMode }) => {
  const [isMoonIcon, setIsMoonIcon] = useState(isDarkMode);

  // Função para alternar o modo claro/escuro
  const handleToggleDarkMode = () => {
    const newIsDarkMode = !isMoonIcon; // Inverta o estado do ícone

    toggleDarkMode(newIsDarkMode); // Atualize o estado do modo claro/escuro
    setIsMoonIcon(newIsDarkMode); // Atualize o estado do ícone
  };

  return (
    <HeaderContainer isDarkMode={isDarkMode}>
      <Link to="/perfil"> {/* Use o Link do React Router com o destino "profile" */}
        <ProfileImage
          src="https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg?w=360"
          alt="Foto de perfil"
          style={{ margin: '10px' }}
        />
      </Link>
      <IconContainer onClick={handleToggleDarkMode} style={{margin: '10px'}}>
        {isMoonIcon ? '🌙' : '☀️'}
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
