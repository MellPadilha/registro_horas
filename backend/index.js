import 'dotenv/config';
import { readFileSync } from 'fs';
import mysql from 'mysql2';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import hourRoutes from './routes/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptSQL = readFileSync(path.join(__dirname, 'database', 'schema.sql'), 'utf8');

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro na conexão:', err);
    process.exit(1);
  }

  console.log('🔌 Conectado ao MySQL');

  connection.query(scriptSQL, (err, results) => {
    connection.release();

    if (err) {
      console.error('Erro na execução do script:', err);
      process.exit(1);
    }

    console.log('✅ Script executado com sucesso!');
  });
});

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/api/hours', hourRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
