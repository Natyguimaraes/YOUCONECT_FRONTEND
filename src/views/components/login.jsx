import '../styles/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de login bem-sucedido sem backend
    if (formData.email && formData.senha) {
      // Redireciona para a página 'home'
      navigate('/home');
    } else {
      console.error('Preencha todos os campos');
      // Você pode adicionar um mecanismo de erro aqui para notificar o usuário
    }
  };

  return (
    <div className="login-page">
      <div className="content-wrapper">
        <div className="vector-image">
          <img src="vector_login.png" alt="Login Vector" />
        </div>
        <div className="container_login">
          <div className="login-form">
            <h1>Faça seu login<b id="ponto-h1">.</b></h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <a href="#" className="forgot-password">Esqueci a Senha</a>
              <button type="submit" id="login">Entrar</button>
            </form>
            <div className="linha"></div>
            <a onClick={() => navigate('/cadastre')} id="criarconta" className="create-account">Ainda não tenho uma conta.</a>
          </div>
        </div>
      </div>
      <a href="https://pt.vecteezy.com/vetor-gratis/tela-de-login">Tela De Login Vetores por Vecteezy</a>
    </div>
  );
}

export default Login;
