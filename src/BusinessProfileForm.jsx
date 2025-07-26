// src/components/BusinessProfile.jsx
import React, { useState, useEffect } from "react";

const BusinessProfile = ({ onSave }) => {
  const [profile, setProfile] = useState({
    name: "",
    industry: "",
    location: "",
    services: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("businessProfile");
    if (saved) {
      setProfile(JSON.parse(saved));
      if (onSave) onSave(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("businessProfile", JSON.stringify(profile));
    if (onSave) onSave(profile);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">📝 Business Profile</h2>
      <input
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Business Name"
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        name="industry"
        value={profile.industry}
        onChange={handleChange}
        placeholder="Industry"
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        name="location"
        value={profile.location}
        onChange={handleChange}
        placeholder="Location"
        className="w-full border p-2 mb-2 rounded"
      />
      <textarea
        name="services"
        value={profile.services}
        onChange={handleChange}
        placeholder="Services / Products"
        className="w-full border p-2 mb-2 rounded"
      />
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Profile
      </button>
    </div>
  );
};

export default BusinessProfile;
