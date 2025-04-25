import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from './config';
import './HourTable.css';

function HourTable() {
  const [registros, setRegistros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/hours`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRegistros(data))
      .catch((error) => console.error('Erro ao buscar registros:', error));
  }, []);

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Histórico de Horas</h1>
      <h3>Projeto de Méllanie Kassim Padilha Taveira</h3>
      <button onClick={handleVoltar}>Voltar</button>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Descrição</th>
            <th>Início</th>
            <th>Fim</th>
            <th>Horas Totais</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro) => (
            <tr key={registro.id} onClick={() => navigate(`/register/${registro.id}`)}>
              <td>{registro.cliente}</td>
              <td>{registro.descricao}</td>
              <td>{new Date(registro.inicio).toLocaleString()}</td>
              <td>{new Date(registro.fim).toLocaleString()}</td>
              <td>{registro.horas_totais}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HourTable;
