const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize database connection
db.initialize();

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await db.execute(
      'INSERT INTO users (username, email, password) VALUES (:username, :email, :password)',
      [username, email, password],
      { autoCommit: true }
    );
    res.json({ message: 'Signup successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Signup failed', details: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.execute(
      'SELECT username FROM users WHERE email = :email AND password = :password',
      [email, password]
    );
    if (result.rows.length > 0) {
      res.json({ message: 'Login successful', username: result.rows[0][0] });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  await db.close();
  process.exit(0);
});