import React from 'react';

function Dashboard({ username, onLogout }) {
  return (
    <div style={{
      backgroundColor: '#f4f4f4',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      width: '350px',
      maxWidth: '500px',
      margin: '40px auto'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome, {username}!</h2>
      <p style={{ textAlign: 'center' }}>This is your dashboard.</p>
      <button
        onClick={onLogout}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
          marginTop: '20px'
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;