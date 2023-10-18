import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    backgroundImage: "url('https://www.lasermax.com.br/wp-content/uploads/2019/11/3d-tech-main-bg.jpg')", // Substitua com o URL da sua imagem de fundo
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    background: 'transparent', // Defina a cor de fundo como transparente
    border: 'none', // Remova a borda do modal
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    color: 'white', // Defina a cor do ícone de fechar
  },
};

const ModalContainer = styled.div`
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const About = ({ isOpen, onRequestClose, title, text }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyle}
      contentLabel="Seu Modal"
    >
      <button
        onClick={onRequestClose}
        style={modalStyle.closeButton}
      >
        &#10006;
      </button>
      <ModalContainer>
        <h2>A LaserMax</h2>
        <p style={{textAlign: 'center'}}>Com experiência no Desenvolvimento de produtos eletro eletrônicos que envolvem hardware, firmware e software, peças plásticas e serviços de Corte e Gravação a Laser.

Estamos expandindo nossas áreas de serviços e produtos oferecidos a terceiros.

Desenvolvemos Produtos Eletrônicos e Projetos de hardware, firmware e software, destinados a diversas áreas. Entre elas Teclado para entrada de dados utilizando diversas tecnologias de acionamento ou detecção.

Realizamos projetos de peças plásticas, que utilizam software 3D, prototipagem rápida 3D e projetos de moldes plásticos.

Oferecendo ainda, Produtos e Serviços de Corte e Gravação, utilizando Maquinas de Laser CNC, Laser Fibra e Laser CO2 (incluindo Metal).

Produtos oferecidos:
Teclados eletrônicos para automação (diversas tecnologias).
Produtos e projetos de peças plásticas.
Serviços de Corte e Gravação que utilizam nossas maquinas de Laser.
</p>
      </ModalContainer>
    </Modal>
  );
};

export default About;
