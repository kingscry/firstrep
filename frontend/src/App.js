import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

function App() {
  const [page, setPage] = useState('login');
  const [username, setUsername] = useState('');

  const navigate = (to, user = '') => {
    setPage(to);
    setUsername(user);
  };

  return (
    <div className="App">
      {page === 'login' && <Login onNavigate={navigate} />}
      {page === 'signup' && <Signup onNavigate={navigate} />}
      {page === 'dashboard' && <Dashboard username={username} onLogout={() => navigate('login')} />}
    </div>
  );
}

export default App;
