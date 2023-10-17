import React, { useState } from 'react';
import styled from 'styled-components';
import { fakeLogin } from '../auth/auth';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #FFA500;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAuthenticated = await fakeLogin(email, password);

    if (isAuthenticated) {
      handleLogin(true); // Define o estado como logado
    } else {
      alert('Login falhou. Verifique suas credenciais.');
    }
  };

  return (
    <LoginContainer>
      <img src="https://www.lasermax.com.br/wp-content/uploads/2020/06/laser-favicon.png" />
      <LoginForm onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">Entrar</SubmitButton>
      </LoginForm>
      <Link to="/recuperar-senha" style={{textDecoration: 'none', color: '#888'}}>Recuperar Senha</Link> {/* Link para a página de recuperação de senha fictícia */}
    </LoginContainer>
  );
};

export default Login;
