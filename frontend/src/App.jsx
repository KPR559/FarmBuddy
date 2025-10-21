
import React, { useState } from 'react';
import LoginPage from './components/loginpage';
import RegisterPage from './components/registerpage';
import LogoutButton from './components/logout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>FarmBuddy Sign up</h1>
      {!isLoggedIn ? (
        <>
          <RegisterPage />
          <hr />
          <LoginPage onLogin={() => setIsLoggedIn(true)} />
        </>
      ) : (
        <div>
          <LogoutButton onLogout={() => setIsLoggedIn(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
