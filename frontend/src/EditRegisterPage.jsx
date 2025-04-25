import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "./config";

const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const EditRegisterPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        cliente: "",
        descricao: "",
        inicio: "",
        fim: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/hours/${id}`);
                const data = await response.json();
                console.log("Dados do registro:", data);
                setFormData({
                    cliente: data[0].cliente ?? "",
                    descricao: data[0].descricao ?? "",
                    inicio: formatDateTime(data[0].inicio) ?? "",
                    fim: formatDateTime(data[0].fim) ?? "",
                });
            } catch (error) {
                console.error("Erro ao carregar os dados do registro:", error);
                alert("Erro ao carregar os dados do registro.");
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${API_BASE_URL}/hours/${id}`, formData);
            alert("Registro atualizado com sucesso!");
            console.log(response.data);
            navigate("/"); // Redireciona para a página inicial após a atualização
        } catch (error) {
            console.error("Erro ao atualizar o registro:", error);
            alert("Erro ao atualizar o registro.");
        }
    };

    const handleCancel = () => {
        navigate("/"); 
    };

    return (
        <div>
            <h1>Editar Registro</h1>
            <h3>Projeto de Méllanie Kassim Padilha Taveira</h3>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Salvar</button>
                <button type="button" onClick={handleCancel}>Cancelar</button>
            </form>
        </div>
    );
};

export default EditRegisterPage;
