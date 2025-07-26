import React from "react";

const BusinessSummary = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        🧾 Business Summary
      </h2>
      <div className="space-y-2 text-gray-700">
        <p><strong>📛 Name:</strong> {profile.name}</p>
        <p><strong>🏷️ Type:</strong> {profile.type}</p>
        <p><strong>📍 Location:</strong> {profile.location}</p>
        <p><strong>🛍️ Services / Products:</strong> {profile.services}</p>
        <p><strong>🎯 Goals:</strong> {profile.goals}</p>
      </div>
    </div>
  );
};

export default BusinessSummary;
