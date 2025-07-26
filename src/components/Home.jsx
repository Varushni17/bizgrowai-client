// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-700">Welcome to BizGrowAI</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
        Grow your business smarter with our AI-powered assistant.
      </p>
      <Link to="/chat">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          🚀 Start Chatting
        </button>
      </Link>
    </div>
  );
};

export default Home;
