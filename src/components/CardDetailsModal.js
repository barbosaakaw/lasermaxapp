import React from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

const modalStyle = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%', // Largura máxima do modal
    maxHeight: '50%', // Altura máxima do modal
    margin: 'auto', // Centraliza o modal na tela
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%', // Ajuste a altura máxima conforme necessário
    objectFit: 'contain',
  },
  p: {
    textAlign: 'center',
  },
};

const CardDetailsModal = ({ isOpen, closeModal, cardData }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Card Details Modal"
      style={modalStyle}
    >
      <div style={modalStyle.closeButton} onClick={closeModal}>
        <FaTimes size={20} />
      </div>
      <h2>{cardData.title}</h2>
      <img
        src={cardData.imageSrc}
        alt="Card Image"
        style={modalStyle.image}
      />
      <p>{cardData.description}</p>
    </Modal>
  );
};

export default CardDetailsModal;
