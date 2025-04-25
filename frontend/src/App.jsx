import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import API_BASE_URL from './config';

function App() {
  const [formData, setFormData] = useState({
    cliente: '',
    descricao: '',
    inicio: '',
    fim: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerHistorico = () => {
    navigate('/hourTable');
  };

  const handleRegistrarHora = async () => {
    console.log('Dados enviados:', formData);

    try {
      const response = await fetch(`${API_BASE_URL}/hours`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Hora registrada com sucesso!');
      } else {
        alert('Erro ao registrar hora. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao registrar hora:', error);
      alert('Erro ao registrar hora. Tente novamente.');
    }
  };

  return (
    <div>
      <h1>Registro de Horas</h1>
      <h3>Projeto de Méllanie Kassim Padilha Taveira</h3>
      <form>
        <label>
          Cliente:
          <input
            type="text"
            name="cliente"
            value={formData.cliente}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Descrição:
          <input
            type="text"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Hora Início:
          <input
            type="datetime-local"
            name="inicio"
            value={formData.inicio}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Hora Fim:
          <input
            type="datetime-local"
            name="fim"
            value={formData.fim}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegistrarHora}>Registrar Hora</button>
        <button type="button" onClick={handleVerHistorico}>Ver Histórico</button>
      </form>
    </div>
  );
}

export default App;
