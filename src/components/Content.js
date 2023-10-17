import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import SearchComponent from './SearchComponent';
import MenuHorizontal from './MenuHorizontal';
import CardListHorizontal from './CardListHorizontal'; // Importe o componente CardListHorizontal
import VerticalList from './VerticalList';
import Footer from './Footer';

const ContentContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? '#333' : '#fff')};
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  input {
    background-color: ${(props) => (props.isDarkMode ? '#333' : '#fff')};
    color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
    border-color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
    border-radius: 20px;
  }
  .menu-item {
    color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
    background-color: ${(props) => (props.isDarkMode ? '#333' : '#fff')};
  }

  .menu-item:hover {
    color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
    background-color: ${(props) => (props.isDarkMode ? '#333' : '#fff')};
  }

  h3 {
    margin: 20px;
    font-family: 'Roboto', sans-serif;
  }

  footer {
    background-color: ${(props) => (props.isDarkMode ? '#333' : '#fff')};
    color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  }
`;

const Content = ({ loggedIn, handleLogin }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [textString, setTextString] = useState('');
    const [selectedMenuItem, setSelectedMenuItem] = useState('Gravação');

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        handleLogin(false);
        setMenuOpen(false);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleTextChange = (text) => {
        setTextString(text);
    };

    return (
        <ContentContainer isDarkMode={isDarkMode}>
            <Header
                loggedIn={loggedIn}
                toggleMenu={toggleMenu}
                handleLogout={handleLogout}
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
            />
            <h3>Laser Max</h3>
            <SearchComponent textString={textString} onTextChange={handleTextChange} />
            <MenuHorizontal
                selectedMenuItem={selectedMenuItem}
                setSelectedMenuItem={setSelectedMenuItem}
                isDarkMode={isDarkMode}
            />
            <CardListHorizontal
                textString={textString}
                selectedMenuItem={selectedMenuItem}
            />
            <h3>Mais Populares</h3>
            <VerticalList />
            <Footer />
        </ContentContainer>
    );
};

export default Content;
