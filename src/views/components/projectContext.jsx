import React, { createContext, useState, useContext } from 'react';

// Criar o contexto de projetos
const ProjectContext = createContext();

// Provedor do contexto
export const ProjectProvider = ({ children }) => {
  // Lista de 10 projetos fixos iniciais
  const initialProjects = [
    {
      id: 1,
      nome_projeto: 'Gestão Inteligente 360',
      curso_projeto: 'Administração',
      data_inicio: '2024-01-01',
      equipe: 'Equipe Alpha',
      descricao: 'Desenvolvimento de uma plataforma para gestão de empresas de médio porte, integrando recursos financeiros, marketing e produção em um único sistema inteligente.',
      logotipo_projeto: 'https://cdn.pixabay.com/photo/2017/11/30/09/03/tree-2987962_960_720.jpg',
    },
    {
      id: 2,
      nome_projeto: 'Digital Marketing Boost',
      curso_projeto: 'Marketing',
      data_inicio: '2024-02-01',
      equipe: 'Equipe Beta',
      descricao: 'Campanha de marketing digital focada em aumentar a presença online e as vendas de uma marca global, com ênfase em SEO, redes sociais e campanhas de anúncios pagos.',
      logotipo_projeto: 'https://cdn.pixabay.com/photo/2023/01/16/19/13/laptop-7723139_1280.jpg',
    },
    {
      id: 3,
      nome_projeto: 'Engenharia de Processos Sustentáveis',
      curso_projeto: 'Engenharia',
      data_inicio: '2024-03-01',
      equipe: 'Equipe Gamma',
      descricao: 'Projeto de automação e engenharia para criação de sistemas industriais sustentáveis, com foco na redução de desperdício e otimização de recursos.',
      logotipo_projeto: 'https://cdn.pixabay.com/photo/2021/04/05/03/27/workers-6152007_1280.jpg',
    },
    {
      id: 4,
      nome_projeto: 'Tech Data Hub',
      curso_projeto: 'TI',
      data_inicio: '2024-04-01',
      equipe: 'Equipe Delta',
      descricao: 'Desenvolvimento de uma plataforma web para gestão de grandes volumes de dados corporativos, integrando ferramentas de Big Data e IA para análise preditiva.',
      logotipo_projeto: 'https://media.istockphoto.com/id/1284636483/pt/vetorial/business-analysis-tiny-characters-at-huge-monitor-with-charts-managers-analyze-information.jpg?s=1024x1024&w=is&k=20&c=64qzELsxfpw23q3LSbP3MkakDqMiJIXp-8IMDYZ1rGY=',
    },
    {
      id: 5,
      nome_projeto: 'Expansão Global',
      curso_projeto: 'Administração',
      data_inicio: '2024-05-01',
      equipe: 'Equipe Epsilon',
      descricao: 'Análise de mercado internacional para expansão de uma empresa de produtos orgânicos, com foco em adaptação cultural e logísticas de distribuição.',
      logotipo_projeto: 'https://cdn.pixabay.com/photo/2021/01/19/09/45/brain-5930645_1280.jpg',
    },
    {
      id: 6,
      nome_projeto: 'Branding Evolution',
      curso_projeto: 'Marketing',
      data_inicio: '2024-06-01',
      equipe: 'Equipe Zeta',
      descricao: 'Criação de estratégias de branding para empresas em transição, visando o reposicionamento no mercado e aumento de reconhecimento de marca.',
      logotipo_projeto: 'https://cdn.pixabay.com/photo/2019/04/26/18/14/strategy-4158204_960_720.png',
    },
    {
      id: 7,
      nome_projeto: 'Infraestrutura Verde',
      curso_projeto: 'Engenharia',
      data_inicio: '2024-07-01',
      equipe: 'Equipe Eta',
      descricao: 'Projeto de infraestrutura com foco na construção de edifícios verdes e soluções sustentáveis, integrando tecnologias de energias renováveis e eficiência energética.',
      logotipo_projeto: 'https://cdn.pixabay.com/photo/2024/02/24/10/48/solar-panels-8593759_960_720.png',
    },
    {
      id: 8,
      nome_projeto: 'CyberSecure Enterprise',
      curso_projeto: 'TI',
      data_inicio: '2024-08-01',
      equipe: 'Equipe Theta',
      descricao: 'Desenvolvimento de um sistema de segurança cibernética para empresas, com implementação de firewalls, criptografia avançada e prevenção contra ataques DDoS.',
      logotipo_projeto: 'https://cdn.pixabay.com/photo/2016/09/08/04/09/security-department-1653345_1280.png',
    },
    {
      id: 9,
      nome_projeto: 'Plano de Negócios 4.0',
      curso_projeto: 'Administração',
      data_inicio: '2024-09-01',
      equipe: 'Equipe Iota',
      descricao: 'Desenvolvimento de um plano de negócios para uma startup de tecnologia voltada para a indústria 4.0, integrando automação e IA em processos industriais.',
      logotipo_projeto: 'https://cdn.pixabay.com/photo/2024/10/28/14/50/businessman-9156303_1280.jpg',
    },
  
  ];

  const [projects, setProjects] = useState(initialProjects);

  const addProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Hook para usar o contexto
export const useProjects = () => {
  return useContext(ProjectContext);
};
