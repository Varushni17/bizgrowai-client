// src/components/ChatBot.jsx
import React, { useState } from "react";
import { Mic, Send } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const profile = JSON.parse(localStorage.getItem("businessProfile"));

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, businessProfile: profile }),
      });
      const data = await res.json();
      const botMessage = { role: "bot", content: data.response };
      setMessages((prev) => [...prev, botMessage]);

      const utterance = new SpeechSynthesisUtterance(data.response);
      speechSynthesis.speak(utterance);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "bot", content: "Error." }]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-4 rounded shadow">
      <div className="mb-4">
        <h2 className="text-xl font-bold">🍽️ Restaurant Profile</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Location:</strong> {profile.location}</p>
        <p><strong>Best Seller:</strong> {profile.bestSeller}</p>
        <p><strong>Goal:</strong> {profile.goal}</p>
      </div>

      <div className="h-80 overflow-y-auto border p-3 rounded mb-4 bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block px-3 py-2 rounded ${msg.role === "user" ? "bg-blue-100" : "bg-green-100"}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-grow border px-3 py-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-3 rounded"><Send size={18} /></button>
      </div>
    </div>
  );
};

export default ChatBot;
