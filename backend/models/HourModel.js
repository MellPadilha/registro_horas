import { pool } from '../index.js';

export const createRegistro = (cliente, descricao, inicio, fim, horas_totais, callback) => {
  const query = 'INSERT INTO registros (cliente, descricao, inicio, fim, horas_totais) VALUES (?, ?, ?, ?, ?)';
  pool.query(query, [cliente, descricao, inicio, fim, horas_totais], (err, results) => {
    if (err) {
      console.error('Erro ao criar registro:', err);
    }
    callback(err, results);
  });
};

export const getAllRegistros = (callback) => {
  const query = 'SELECT * FROM registros';
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar registros:', err);
    }
    callback(err, results);
  });
};

export const deleteRegistroById = (id, callback) => {
  const query = 'DELETE FROM registros WHERE id = ?';
  pool.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erro ao deletar registro:', err);
    }
    callback(err, results);
  });
};

export const updateRegistroById = (id, { cliente, descricao, inicio, fim, horas_totais }, callback) => {
  const query = `
    UPDATE registros 
    SET cliente = ?, descricao = ?, inicio = ?, fim = ?, horas_totais = ? 
    WHERE id = ?
  `;
  pool.query(query, [cliente, descricao, inicio, fim, horas_totais, id], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar registro:', err);
    }
    callback(err, results);
  });
};

export const getRegistroById = (id, callback) => {
  const query = 'SELECT * FROM registros WHERE id = ?';
  pool.query(query, [id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar registro por ID:', err);
    }
    callback(err, results);
  });
};
