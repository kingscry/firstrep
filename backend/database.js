const oracledb = require('oracledb');

const dbConfig = {
  user: 'gatepass',
  password: 'your_secure_password_here', // Replace with the password you set during installation
  connectString: 'localhost:1521/XEPDB1'
};

async function initialize() {
  try {
    await oracledb.createPool(dbConfig);
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
}

async function close() {
  try {
    await oracledb.getPool().close();
    console.log('Database connection pool closed');
  } catch (err) {
    console.error('Error closing database connection pool:', err);
  }
}

async function execute(sql, binds = [], options = {}) {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute(sql, binds, options);
    return result;
  } catch (err) {
    console.error('Error executing SQL:', err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}

module.exports = { initialize, close, execute };