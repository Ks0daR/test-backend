import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DB,
  password: process.env.DBPASS,
  port: process.env.DBPORT,
  ssl: { rejectUnauthorized: false },
});

export default pool;
