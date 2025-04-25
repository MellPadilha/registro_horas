import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API_BASE_URL from './config';

function RegisterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [registro, setRegistro] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/hours/${id}`)
      .then((response) => response.json())
      .then((data) => setRegistro(data))
      .catch((error) => console.error('Erro ao buscar registro:', error));
  }, [id]);

  const handleDelete = () => {
    fetch(`${API_BASE_URL}/hours/${id}`, { method: 'DELETE' })
      .then(() => navigate('/hourTable'))
      .catch((error) => console.error('Erro ao deletar registro:', error));
      alert('Registro deletado com sucesso!');
      navigate('/');
  };

  const handleEdit = () => {
    navigate(`/editHour/${id}`);
  };

  if (!registro) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Detalhes do Registro</h1>
      <h3>Projeto de Méllanie Kassim Padilha Taveira</h3>
      <p>Cliente: {registro[0].cliente}</p>
      <p>Descrição: {registro[0].descricao}</p>
      <p>Início: {new Date(registro[0].inicio).toLocaleString()}</p>
      <p>Fim: {new Date(registro[0].fim).toLocaleString()}</p>
      <p>Horas Totais: {registro[0].horas_totais}</p>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
}

export default RegisterPage;