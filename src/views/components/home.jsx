import React, { useEffect, useState } from "react";
import "../styles/home.css";
import FooterMenu from './FooterMenu';
import LikeProjetos from "./likeProjects";
import { useProjects } from './projectContext'; // Usando o hook do contexto

function Home() {
    const { projects } = useProjects(); // Agora obtemos os projetos do contexto

    return (
        <div className="container_pai">
            <div className="container_home">
                <h1>Projetos</h1>
                <LikeProjetos projetos={projects} /> {/* Passa os projetos do contexto para o LikeProjetos */}
            </div>
            <FooterMenu />
        </div>
    );
}

export default Home;
