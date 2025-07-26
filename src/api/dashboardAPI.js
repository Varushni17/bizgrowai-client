// src/api/dashboardAPI.js

const API_BASE = "http://localhost:8000";

export const fetchRevenueData = async () => {
  const res = await fetch(`${API_BASE}/monthly-revenue`);
  return await res.json();
};

export const fetchTopProducts = async () => {
  const res = await fetch(`${API_BASE}/top-products`);
  return await res.json();
};

export const fetchRecommendations = async () => {
  const res = await fetch(`${API_BASE}/recommendations`);
  return await res.json();
};

export const fetchSummary = async () => {
  const res = await fetch(`${API_BASE}/summary`);
  return await res.json();
};
