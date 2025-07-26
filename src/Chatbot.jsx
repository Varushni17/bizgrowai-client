import React, { useState } from 'react';
import { fetchChatbotResponse } from '../api';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi there! Ask me anything about demand forecasting.', type: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Show user's message
    const userMessage = { text: userInput, type: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    // Get bot response from backend
    try {
      const botReply = await fetchChatbotResponse(userInput);
      const botMessage = { text: botReply, type: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { text: 'Oops! Something went wrong.', type: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setUserInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-y-auto border rounded p-4 bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded max-w-[75%] ${
              msg.type === 'user' ? 'bg-blue-100 self-end text-right' : 'bg-gray-200 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your question here..."
          className="flex-1 border p-2 rounded-l"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
