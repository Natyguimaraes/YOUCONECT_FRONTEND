import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/cadastre.css';

function Cadastre() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        telefone: '',
        data: '',
        genero: '',
        curso: '',
        senha: '',
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

    const validateEmailDomain = (email) => email.endsWith('@ba.estudante.senai.br');

    const validateTelefone = (telefone) => /^\d{10,11}$/.test(telefone);

    const validateForm = () => {
        const formErrors = {};

        if (!formData.nomeCompleto) formErrors.nomeCompleto = 'Nome completo é obrigatório';
        if (!formData.email || !validateEmail(formData.email)) {
            formErrors.email = 'Email inválido';
        } else if (!validateEmailDomain(formData.email)) {
            formErrors.email = 'Email deve ser da instituição @ba.estudante.senai.br';
        }
        if (!formData.telefone || !validateTelefone(formData.telefone)) {
            formErrors.telefone = 'Telefone inválido';
        }
        if (!formData.data) formErrors.data = 'Data de nascimento é obrigatória';
        if (formData.senha.length < 8) formErrors.senha = 'Senha deve ter pelo menos 8 caracteres';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Dados cadastrados localmente:", formData);

            // Redirecionar para a página Home
            navigate('/home');
        }
    };

    return (
        <div className="cadastre-container">
            <form onSubmit={handleSubmit} className="cadastre-form">
                <h1>Criar uma conta</h1>
                <input
                    type="text"
                    name="nomeCompleto"
                    placeholder="Nome Completo"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                />
                {errors.nomeCompleto && <span className="error">{errors.nomeCompleto}</span>}

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}

                <div id="cadastre-row2">
                    <input
                        type="text"
                        name="telefone"
                        placeholder="Telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                    {errors.telefone && <span className="error">{errors.telefone}</span>}

                    <input
                        type="date"
                        name="data"
                        placeholder="Data de Nascimento"
                        value={formData.data}
                        onChange={handleChange}
                    />
                    {errors.data && <span className="error">{errors.data}</span>}
                </div>

                <div id="cadastre-row3">
                    <select name="genero" value={formData.genero} onChange={handleChange}>
                        <option value="">Gênero</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>

                    <select name="curso" value={formData.curso} onChange={handleChange}>
                        <option value="">Curso</option>
                        <option value="Administração">Administração</option>
                        <option value="Automação industrial">Automação industrial</option>
                        <option value="Biotecnologia">Biotecnologia</option>
                        <option value="Desenvolvimento de sistemas">Desenvolvimento de sistemas</option>
                        <option value="Edificações">Edificações</option>
                        <option value="Eletromecânica">Eletromecânica</option>
                        <option value="Eletrotécnica">Eletrotécnica</option>
                        <option value="Logística">Logística</option>
                        <option value="Manutenção automotiva">Manutenção automotiva</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Mecânica">Mecânica</option>
                        <option value="Mecatrônica">Mecatrônica</option>
                        <option value="Multimídia">Multimídia</option>
                        <option value="Petroquímica">Petroquímica</option>
                        <option value="Qualidade">Qualidade</option>
                        <option value="Química">Química</option>
                        <option value="Redes de computadores">Redes de computadores</option>
                        <option value="Refrigeração e climatização">Refrigeração e climatização</option>
                        <option value="Segurança do trabalho">Segurança do trabalho</option>
                    </select>
                </div>

                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleChange}
                />
                {errors.senha && <span className="error">{errors.senha}</span>}

                <input type="submit" value="Cadastrar" id="cadastro" />

                <a onClick={() => navigate('/')} id="logar">
                    Fazer login
                </a>
            </form>
        </div>
    );
}

export default Cadastre;
