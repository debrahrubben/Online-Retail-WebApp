// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Retail',
  password: '1234',
  port: 5432, // Default PostgreSQL port
});

async function getProducts() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM products');
    return result.rows;
  } finally {
    client.release();
  }
}

module.exports = { getProducts };
