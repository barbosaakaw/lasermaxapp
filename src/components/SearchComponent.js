import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  border: 2px solid #FFA500;
  border-radius: 25px; /* Define um canto parcialmente circular */
  padding: 5px 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 5px;
  margin: 0;
`;

const SearchComponent = ({ textString, onTextChange }) => {
  const handleInputChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <SearchContainer>
      <i className="fas fa-search" style={{ marginRight: '10px' }} /> {/* Ícone de pesquisa, você pode importar o ícone apropriado */}
      <SearchInput
        type="text"
        placeholder="Pesquisar..." // Placeholder
        value={textString}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default SearchComponent;
