import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PasswordRecoveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const EmailInput = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.button`
  background-color: #FFA500;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Instruction = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: red; /* Cor do erro */
`;

const BackToLogin = styled(Link)`
  text-decoration: none;
  color: #FFA500;
  font-weight: bold;
`;

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailValid, setEmailValid] = useState(true); // Estado para verificar se o email é válido

  const handleSendEmail = () => {
    // Verifique se o email é válido (por exemplo, se é o email de exemplo)
    if (email === 'seuemail@example.com') {
      setEmailValid(true); // O email é válido
      // Lógica de envio de email (fictícia) pode ser adicionada aqui
      setEmailSent(true); // Define o estado para indicar que o email foi enviado
    } else {
      setEmailValid(false); // O email é inválido
    }
  };

  return (
    <PasswordRecoveryContainer>
      <Title>Recuperação de Senha</Title>
      {emailSent ? (
        <Instruction style={{ margin: '20px', color: 'green' }}>
          Email de recuperação enviado. Verifique sua caixa de entrada.
        </Instruction>
      ) : (
        <>
          <EmailInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SendButton onClick={handleSendEmail}>Enviar Email de Recuperação</SendButton>
          {!emailValid && (
            <Instruction>Email inválido. Tente novamente.</Instruction>
          )}
        </>
      )}
      <BackToLogin to="/">Voltar para o Login</BackToLogin>
    </PasswordRecoveryContainer>
  );
};

export default PasswordRecovery;
