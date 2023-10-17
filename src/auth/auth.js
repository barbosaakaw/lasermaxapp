// src/auth/auth.js

let isAuthenticated = false;

const fakeLogin = async (email, password) => {
  if (email === 'seuemail@example.com' && password === 'suasenha') {
    isAuthenticated = true;
    return true;
  } else {
    isAuthenticated = false;
    return false;
  }
};

const fakeLogout = () => {
  isAuthenticated = false;
};

const fakeRecoverPassword = async (email) => {
  // Simule a recuperação de senha aqui
  // Retorna true para indicar que o email foi enviado (pode variar de acordo com sua implementação)
  return true;
};

const isUserAuthenticated = () => {
  return isAuthenticated;
};

export { fakeLogin, fakeLogout, fakeRecoverPassword, isUserAuthenticated };
