import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('receiveMessage', (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => socket.off('receiveMessage');
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', message);
      setMessages((prev) => [...prev, message]);
      setMessage('');
    }
  };

  return (
    <div className="p-4 bg-gray-200 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Chat</h2>
      <div className="h-64 overflow-y-auto bg-white p-2 rounded mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        placeholder="Type a message"
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded">
        Send
      </button>
    </div>
  );
};

export default Chat;
