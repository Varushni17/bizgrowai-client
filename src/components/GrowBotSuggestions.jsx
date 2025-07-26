import React, { useEffect, useState } from "react";

const GrowBotSuggestions = ({ profile }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!profile) return;

    const generateSuggestions = () => {
      const tips = [];

      if (profile.type?.toLowerCase().includes("food")) {
        tips.push("🍽️ Share food photos on Instagram to attract local customers.");
        tips.push("📍 Register your restaurant on Zomato and Google Maps.");
      }

      if (profile.location?.toLowerCase().includes("chennai")) {
        tips.push("🌦️ Offer seasonal dishes for the Chennai monsoon or summer.");
      }

      if (profile.goals?.toLowerCase().includes("expand")) {
        tips.push("🗺️ Analyze nearby cities for franchise opportunities.");
      }

      if (profile.services?.toLowerCase().includes("delivery")) {
        tips.push("🚚 Partner with Swiggy or Dunzo for faster delivery reach.");
      }

      if (tips.length === 0) {
        tips.push("💡 Define specific goals to get tailored suggestions.");
      }

      setSuggestions(tips);
    };

    generateSuggestions();
  }, [profile]);

  if (!profile) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-3">🤖 GrowBot Suggestions</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {suggestions.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default GrowBotSuggestions;
