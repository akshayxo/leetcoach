const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  user: 'postgres',      // your postgres username
  host: 'localhost',
  database: 'testdb',    // database we just created
  password: '',          // your postgres password (if set)
  port: 5432
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Hello from Akshay! Server time: ${result.rows[0].now}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));