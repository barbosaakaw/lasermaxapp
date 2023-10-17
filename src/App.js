import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { isUserAuthenticated } from './auth/auth';
import Login from './components/Login';
import Content from './components/Content';
import Profile from './components/Profile';
import PasswordRecovery from './components/PasswordRecovery';

function App() {
  const [loggedIn, setLoggedIn] = useState(isUserAuthenticated());

  const handleLogin = (status) => {
    setLoggedIn(status);
    console.log('Usuário está logado?', status);
  };

  return (
    <Router basename="/lasermaxapp"> {/* Defina o basename como "/lasermaxapp" */}
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? <Content loggedIn={loggedIn} /> : <Login handleLogin={handleLogin} />
            }
          />
          <Route
            path="/perfil"
            element={
              loggedIn ? <Profile handleLogin={handleLogin} /> : <Login handleLogin={handleLogin} />
            }
          />
          <Route
            path="/recuperar-senha"
            element={
              loggedIn ? <Content loggedIn={loggedIn} /> : <PasswordRecovery />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
