// src/components/BusinessForm.jsx
import React, { useState, useEffect } from "react";

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    services: "",
    goals: "",
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("bizProfile");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem("bizProfile", JSON.stringify(formData));
    alert("✅ Profile saved locally!");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Business Profile 📋</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Business Name *</label>
          <input
            name="name"
            type="text"
            className="w-full p-2 border rounded"
            placeholder="e.g., Varushni Restaurant"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Business Type *</label>
          <input
            name="type"
            type="text"
            className="w-full p-2 border rounded"
            placeholder="e.g., Food & Beverage"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Location *</label>
          <input
            name="location"
            type="text"
            className="w-full p-2 border rounded"
            placeholder="e.g., Chennai, India"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Key Services / Products</label>
          <input
            name="services"
            type="text"
            className="w-full p-2 border rounded"
            placeholder="e.g., Catering, Dine-in, Takeaway"
            value={formData.services}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Business Goals</label>
          <textarea
            name="goals"
            rows="3"
            className="w-full p-2 border rounded"
            placeholder="e.g., Expand to more cities, Increase customer retention"
            value={formData.goals}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          onClick={handleSave}
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          ✅ Save Profile
        </button>
      </div>
    </div>
  );
};

export default BusinessForm;
