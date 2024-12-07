import React, { useState } from 'react';
import '../styles/chat.css';
import FooterMenu from './FooterMenu';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Adiciona a mensagem do usuário
      setMessages([...messages, { text: newMessage, sender: 'me' }]);
      setNewMessage('');

      // Simula uma resposta automática após 1 segundo
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: "Recurso em breve", sender: 'bot' }
        ]);
      }, 1000);  // Ajuste o tempo de resposta automática aqui (1000ms = 1 segundo)
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat</h1>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === 'me' ? 'sent' : 'received'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <FooterMenu />
    </div>
  );
}

export default Chat;

