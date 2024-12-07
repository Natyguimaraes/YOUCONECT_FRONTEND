import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CadastroProjeto.css';
import { useProjects } from './projectContext'; // Importando o hook do contexto
import FooterMenu from './FooterMenu';

function CadastroProj() {
  const navigate = useNavigate();
  const { addProject } = useProjects(); // Acessando a função de adicionar projeto

  const [formData, setFormData] = useState({
    logotipo_projeto: '', 
    nome_projeto: '',
    curso_projeto: '',
    data_inicio: '',
    equipe: '',
    descricao: '',
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null); // Para armazenar a pré-visualização da imagem

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogotipoChange = (e) => {
    const file = e.target.files[0]; // Pega o arquivo selecionado
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Define a imagem como base64 para visualização
        setFormData({
          ...formData,
          logotipo_projeto: reader.result, // Armazena a imagem no estado
        });
      };
      reader.readAsDataURL(file); // Lê o arquivo como base64
    }
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.nome_projeto) formErrors.nome_projeto = 'Nome do projeto é obrigatório';
    if (!formData.curso_projeto) formErrors.curso_projeto = 'Curso é obrigatório';
    if (!formData.data_inicio) formErrors.data_inicio = 'Data de início é obrigatória';
    if (!formData.equipe) formErrors.equipe = 'Nome da equipe é obrigatório';
    if (!formData.descricao) formErrors.descricao = 'Descrição do projeto é obrigatória';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Adiciona o novo projeto ao contexto
      addProject(formData);
      
      // Redireciona para a Home
      navigate('/home');
    }
  };

  return (
    <><div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Cadastre seu Projeto</h2>

        <div className="perfil">
          {/* Exibe a imagem carregada, ou uma imagem padrão se não houver */}
          {imagePreview ? (
            <img src={imagePreview} alt="Logotipo do Projeto" className="logotipo-img" />
          ) : (
            <p>Selecione um logotipo</p>
          )}
          <label>
            Inserir Logotipo do Projeto
            <input
              type="file"
              accept="image/*" // Aceita apenas arquivos de imagem
              onChange={handleLogotipoChange}
              className="input-file" />
          </label>
        </div>

        {/* Campos do Formulário */}
        <div className="form-grid">
          <div className="campo">
            <input
              type="text"
              name="nome_projeto"
              placeholder="Nome do Projeto"
              value={formData.nome_projeto}
              onChange={handleChange} />
            {errors.nome_projeto && <span className="error">{errors.nome_projeto}</span>}
          </div>

          <div className="campo">
            <select
              name="curso_projeto"
              value={formData.curso_projeto}
              onChange={handleChange}
            >
              <option value="">Selecione o curso</option>
              <option value="Administração">Administração</option>
              {/* Outros cursos */}
            </select>
            {errors.curso_projeto && <span className="error">{errors.curso_projeto}</span>}
          </div>

          <div className="campo">
            <input
              type="date"
              name="data_inicio"
              value={formData.data_inicio}
              onChange={handleChange} />
            {errors.data_inicio && <span className="error">{errors.data_inicio}</span>}
          </div>

          <div className="campo">
            <input
              type="text"
              name="equipe"
              placeholder="Nome da Equipe"
              value={formData.equipe}
              onChange={handleChange} />
            {errors.equipe && <span className="error">{errors.equipe}</span>}
          </div>
        </div>

        {/* Descrição do Projeto */}
        <div className="descricao">
          <textarea
            name="descricao"
            placeholder="Descreva seu projeto"
            value={formData.descricao}
            onChange={handleChange}
          ></textarea>
          {errors.descricao && <span className="error">{errors.descricao}</span>}
        </div>

        <button type="submit" className="botao-salvar">Salvar</button>
      </form>
    </div>
    <FooterMenu /></>
  );
}

export default CadastroProj;


