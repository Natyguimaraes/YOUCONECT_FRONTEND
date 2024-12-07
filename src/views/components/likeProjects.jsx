import React, { useState, useEffect } from 'react';
import "../styles/home.css";
import { FaComment } from 'react-icons/fa'; // Ícone de Comentário

const LikeProjetos = ({ projetos }) => {
    // Inicializa o número de curtidas e comentários com base nos projetos
    const [likes, setLikes] = useState(projetos.map(() => 0));
    const [comments, setComments] = useState(projetos.map(() => [])); // Armazena os comentários de cada projeto
    const [newComment, setNewComment] = useState(""); // Controla o valor do novo comentário

    useEffect(() => {
        // Reseta o estado de curtidas e comentários quando os projetos mudam
        setLikes(projetos.map(() => 0));
        setComments(projetos.map(() => []));
    }, [projetos]);

    const handleLike = (index) => {
        // Atualiza o estado de likes de forma eficiente
        setLikes((prevLikes) => {
            const newLikes = [...prevLikes];
            newLikes[index] += 1;
            return newLikes;
        });
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = (index, event) => {
        event.preventDefault();
        if (newComment.trim()) {
            // Adiciona o novo comentário ao projeto correspondente
            setComments((prevComments) => {
                const newComments = [...prevComments];
                newComments[index].push(newComment);
                return newComments;
            });
            setNewComment(""); // Limpa o campo de comentário após o envio
        }
    };

    return (
        <div className="timeline">
            {projetos.map((projeto, index) => (
                <div className="timeline-item" key={projeto.id}>
                    <div className="timeline-content">
                        <img
                            src={projeto.logotipo_projeto}
                            alt={projeto.nome_projeto}
                            onError={(e) => e.target.src = './imgperfil.jpg'} // Imagem de fallback
                        />
                        <h2>{projeto.nome_projeto}</h2>
                        <p>{projeto.descricao}</p>
                        
                        <div className="likes">
                            <span className="like-button" onClick={() => handleLike(index)}>
                                😍 {likes[index]} Conectes
                            </span>
                            <span className="comment-button">
                                <FaComment /> {comments[index].length} Comentários
                            </span>
                        </div>

                        <div className="comment-section">
                            {/* Formulário de novo comentário */}
                            <form onSubmit={(e) => handleCommentSubmit(index, e)}>
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={handleCommentChange}
                                    placeholder="Adicione um comentário..."
                                />
                                <button type="submit">Comentar</button>
                            </form>

                            {/* Exibe os comentários */}
                            <div className="comment-list">
                                {comments[index].map((comment, idx) => (
                                    <div key={idx} className="comment">
                                        <p>{comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LikeProjetos;
