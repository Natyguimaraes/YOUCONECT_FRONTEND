import './views/styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/components/login';
import Nav from './views/components/navigation';
import Cadastre from './views/components/cadastre'; // Supondo que você tenha uma página de cadastro
import Home from './views/components/home';
import Chat from './views/components/chat';
import CadastroProj from './views/components/CadastroProjeto';
import Perfil from './views/components/profile';
import { ProjectProvider } from './views/components/projectContext';

function App() {
  return (
    <ProjectProvider>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastre" element={<Cadastre />} />
          <Route path="/home" element={<Home />} />
          <Route path="/CadastroProjeto" element={<CadastroProj />}/>
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
    </ProjectProvider>
  );
}

export default App;