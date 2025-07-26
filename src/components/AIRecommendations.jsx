import { useEffect, useState } from "react";

const AIRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("businessProfile"));
    if (!profile) return;

    const prompt = `Give 5 personalized AI recommendations for a business named ${profile.name} in the ${profile.industry} industry located in ${profile.location}, which offers services like: ${profile.services}.`;

    fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        const lines = data.response.split("\n").filter((line) => line.trim());
        setRecommendations(lines.slice(0, 5));
      });
  }, []);

  return (
    <div className="p-4 bg-white rounded-xl shadow mb-4">
      <h2 className="text-xl font-bold mb-2">🧠 AI Recommendations</h2>
      <ul className="list-disc ml-6 text-gray-700">
        {recommendations.map((rec, i) => (
          <li key={i}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default AIRecommendations;
