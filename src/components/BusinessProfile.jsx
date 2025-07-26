// src/components/BusinessProfile.jsx
import React, { useEffect, useState } from "react";

const BusinessProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Set business profile in localStorage (only once)
    const stored = localStorage.getItem("businessProfile");
    if (!stored) {
      const defaultProfile = {
        name: "Idhal Inniyan Restaurant",
        owner: "Chef Varushni",
        location: "Coimbatore, Tamil Nadu",
        contact: "+91-98765-43210",
        cuisine: "South Indian, Chettinad, Tandoori",
        bestSeller: "Karaikudi Chicken Biryani",
        hours: "10:00 AM – 11:00 PM (All Days)",
        tags: "Family Dining, Veg & Non-Veg, Online Delivery, Swiggy, Zomato",
        goal:
          "Boost daily food delivery orders, attract new local customers, and improve online visibility through SEO and social media.",
      };
      localStorage.setItem("businessProfile", JSON.stringify(defaultProfile));
      setProfile(defaultProfile);
    } else {
      setProfile(JSON.parse(stored));
    }
  }, []);

  if (!profile) return null;

  return (
    <div className="p-4 bg-white rounded-xl shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">🍽️ Restaurant Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Owner:</strong> {profile.owner}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>
      <p><strong>Cuisine:</strong> {profile.cuisine}</p>
      <p><strong>Best Seller:</strong> {profile.bestSeller}</p>
      <p><strong>Opening Hours:</strong> {profile.hours}</p>
      <p><strong>Tags:</strong> {profile.tags}</p>
      <p><strong>Goal:</strong> {profile.goal}</p>
    </div>
  );
};

export default BusinessProfile;
