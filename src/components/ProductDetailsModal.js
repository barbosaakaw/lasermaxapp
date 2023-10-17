import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
`;

const CloseButton = styled.button`
  background: orange; /* Cor de fundo laranja */
  color: #fff; /* Cor do texto branca */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const ProductDetailsModal = ({ isOpen, onRequestClose, product }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} />
        <p>Preço: R$ {product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        {/* Botão customizado */}
        <CloseButton onClick={onRequestClose}>Fechar</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ProductDetailsModal;
