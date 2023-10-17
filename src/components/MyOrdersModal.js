import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '80%',
    maxHeight: '60%',
    margin: 'auto',
  },
  text: {
    fontSize: '16px',
    margin: '10px 0',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '24px',
  },
};

const MyOrdersModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="My Orders Modal"
      style={modalStyle}
    >
      <button
        onClick={onRequestClose}
        style={modalStyle.closeButton}
      >
        &#10006;
      </button>
      <h2>Meus Pedidos</h2>
      <p style={modalStyle.text}>
        Pedido 1: Produto A, Quantidade: 2
      </p>
      <p style={modalStyle.text}>
        Pedido 2: Produto B, Quantidade: 1
      </p>
      <p style={modalStyle.text}>
        Pedido 3: Produto C, Quantidade: 3
      </p>
    </Modal>
  );
};

export default MyOrdersModal;
