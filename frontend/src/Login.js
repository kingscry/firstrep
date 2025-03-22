import React, { useState } from 'react';
import axios from 'axios';

function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      onNavigate('dashboard', response.data.username);
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

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
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Login
        </button>
      </form>
      <button
        onClick={() => onNavigate('signup')}
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
        Sign Up
      </button>
    </div>
  );
}

export default Login;