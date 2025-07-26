// src/App.jsx
import React, { useEffect, useState } from "react";
import ChatBot from "./components/Chatbot";
import Dashboard from "./components/Dashboard";

function App() {
  const [activeTab, setActiveTab] = useState("chat");

  useEffect(() => {
    const profile = {
      name: "Jack Restaurant",
      owner: "Chef Rose",
      location: "Coimbatore, Tamil Nadu",
      contact: "+91-98765-43210",
      cuisine: "South Indian, Chettinad, Tandoori",
      bestSeller: "Karaikudi Chicken Biryani",
      hours: "10:00 AM – 11:00 PM (All Days)",
      tags: "Family Dining, Veg & Non-Veg, Online Delivery, Swiggy, Zomato",
      goal: "Boost daily food delivery orders, attract new local customers, and improve online visibility through SEO and social media.",
    };

    if (!localStorage.getItem("businessProfile")) {
      localStorage.setItem("businessProfile", JSON.stringify(profile));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Navigation Bar */}
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === "chat" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          onClick={() => setActiveTab("chat")}
        >
          💬 ChatBot
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "dashboard" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          onClick={() => setActiveTab("dashboard")}
        >
          📊 Dashboard
        </button>
      </div>

      {/* Render selected tab */}
      {activeTab === "chat" ? <ChatBot /> : <Dashboard />}
    </div>
  );
}

export default App;
