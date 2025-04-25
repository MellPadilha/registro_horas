import { createRegistro, getAllRegistros, deleteRegistroById, updateRegistroById, getRegistroById } from '../models/HourModel.js';
const calcularDuracao = (inicio, fim) => {
  const inicioDate = new Date(inicio);
  const fimDate = new Date(fim);
  const duracao = (fimDate - inicioDate) / (1000 * 60 * 60); 
  return duracao.toFixed(2);
};

export const createRegistroHandler = async (req, res) => {
  const { cliente, descricao, inicio, fim } = req.body;

  if (!cliente || !descricao || !inicio || !fim) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const horas_totais = calcularDuracao(inicio, fim);

  try {
    createRegistro(cliente, descricao, inicio, fim, horas_totais, (err, result) => {
      if (err) {
        console.error('Controller_Error_createRegistroHandler:', err);
        return res.status(500).json({ error: 'Erro ao criar registro.' });
      }
      res.status(201).json({ message: 'Registro criado com sucesso!', registro: result });
    });
  } catch (error) {
    console.error('Controller_Error_createRegistroHandler:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};

export const getRegistros = async (req, res) => {
  try {
    getAllRegistros((err, registros) => {
      if (err) {
        console.error('Controller_Error_getRegistros:', err);
        return res.status(500).json({ error: 'Erro ao buscar registros.' });
      }
      res.status(200).json(registros);
    });
  } catch (error) {
    console.error('Controller_Error_getRegistros:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};

export const deleteRegistro = async (req, res) => {
  const { id } = req.params;

  try {
    deleteRegistroById(id, (err) => {
      if (err) {
        console.error('Controller_Error_deleteRegistro:', err);
        return res.status(500).json({ error: 'Erro ao deletar registro.' });
      }
      res.status(200).json({ message: 'Registro deletado com sucesso!' });
    });
  } catch (error) {
    console.error('Controller_Error_deleteRegistro:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};

export const editRegistro = async (req, res) => {
  const { id } = req.params;
  const { cliente, descricao, inicio, fim } = req.body;

  if (!cliente || !descricao || !inicio || !fim) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const horas_totais = calcularDuracao(inicio, fim);

  try {
    updateRegistroById(id, { cliente, descricao, inicio, fim, horas_totais }, (err, result) => {
      if (err) {
        console.error('Controller_Error_editRegistro:', err);
        return res.status(500).json({ error: 'Erro ao editar registro.' });
      }
      res.status(200).json({ message: 'Registro atualizado com sucesso!', registro: result });
    });
  } catch (error) {
    console.error('Controller_Error_editRegistro:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};

export const getRegistro = async (req, res) => {
  const { id } = req.params;

  try {
    getRegistroById(id, (err, registro) => {
      if (err) {
        console.error('Controller_Error_getRegistro:', err);
        return res.status(500).json({ error: 'Erro ao buscar registro.' });
      }
      if (!registro) {
        return res.status(404).json({ error: 'Registro não encontrado.' });
      }
      res.status(200).json(registro);
    });
  } catch (error) {
    console.error('Controller_Error_getRegistro:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};