import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '80%', // Largura máxima do modal
    maxHeight: '50%', // Altura máxima do modal
    margin: 'auto', // Centraliza o modal na tela
  },
  // Adicione estilos para os campos de texto e o botão aqui
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#FFA500',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const EditProfileModal = ({ isOpen, onRequestClose }) => {
  const [newName, setnewName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSave = () => {
    // Adicione a lógica para salvar as alterações aqui

    // Feche o modal após salvar as alterações
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Profile Modal"
      style={modalStyle}
    >
      <h2>Editar Perfil</h2>
      <input
        type="text"
        placeholder="Novo Nome"
        value={newName}
        onChange={(e) => setnewName(e.target.value)}
        style={modalStyle.input}
      />
      <input
        type="password"
        placeholder="Nova Senha"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={modalStyle.input}
      />
      <button onClick={handleSave} style={modalStyle.button}>
        Salvar Alterações
      </button>
    </Modal>
  );
};

export default EditProfileModal;
