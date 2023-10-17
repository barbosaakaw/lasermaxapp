import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import EditProfile from './EditProfile'; // Importe o componente EditProfile
import MyOrdersModal from './MyOrdersModal'; // Importe o componente MyOrdersModal

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Email = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Divider = styled.hr`
  width: 50%;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 90%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid orange;
  border-radius: 20px;
  outline: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: orange;
  text-align: center;

  &:hover {
    background-color: orange;
    color: #fff;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: orange;

  &:hover {
    text-decoration: underline;
  }
`;

const Profile = ({ handleLogin }) => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isMyOrdersModalOpen, setIsMyOrdersModalOpen] = useState(false);

  const openEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const closeEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  const openMyOrdersModal = () => {
    setIsMyOrdersModalOpen(true);
  };
  
  const closeMyOrdersModal = () => {
    setIsMyOrdersModalOpen(false);
  };
  
  const logout = () => {
    // Chama a função handleLogout quando o botão "Sair" é clicado
    if (handleLogin) {
      handleLogin(false);
    }
  };

  return (
    <ProfileContainer>
      <ProfileImage
        src="https://img.freepik.com/premium-vector/avatar-portrait-kid-caucasian-boy-round-frame-vector-illustration-cartoon-flat-style_551425-43.jpg?w=360"
        alt="Imagem de Perfil"
      />
      <h3>Andrea Davis</h3>
      <Email>andrea@domainname.com</Email>
      <Divider />
      <Button onClick={openEditProfileModal}>Editar Perfil</Button>
      <Button onClick={openMyOrdersModal}>Meus Pedidos</Button>
      <Button onClick={logout}>Sair</Button>

      <Footer />

      {/* Renderiza o modal de edição de perfil se isEditProfileModalOpen for true */}
      {isEditProfileModalOpen && (
        <EditProfile
          isOpen={isEditProfileModalOpen}
          onRequestClose={closeEditProfileModal}
        />
      )}
      {isMyOrdersModalOpen && (
        <MyOrdersModal isOpen={isMyOrdersModalOpen} onRequestClose={closeMyOrdersModal} />
      )}

    </ProfileContainer>
  );
};

export default Profile;
