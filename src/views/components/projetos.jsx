import React from 'react';
import { useProjects } from './projectContext'; // Usando o hook do contexto
import '../styles/home.css';

function Home() {
  const { projects } = useProjects(); // Agora obtemos os projetos fixos do contexto

  return (
    <div className="container_pai">
      <div className="container_home">
        <h1>Projetos</h1>
        <div className="timeline">
          {projects.map((projeto) => (
            <div className="timeline-item" key={projeto.id}>
              <div className="timeline-content">
                <img
                  src={projeto.logotipo_projeto}
                  alt={projeto.nome_projeto}
                  onError={(e) => e.target.src = './imgperfil.jpg'} 
                />
                <h2>{projeto.nome_projeto}</h2>
                <p>{projeto.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

