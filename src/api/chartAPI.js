import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

// src/components/api/chartAPI.js
export const getRevenueData = async () => {
  return [
    { month: "Jan", revenue: 3000 },
    { month: "Feb", revenue: 4000 },
    { month: "Mar", revenue: 4500 },
    { month: "Apr", revenue: 5000 },
    { month: "May", revenue: 6000 },
  ];
};


export const fetchRevenueData = async () => {
  const response = await axios.get(`${API_URL}/api/revenue`);
  return response.data;
};

export const fetchCustomerData = async () => {
  const response = await axios.get(`${API_URL}/api/customers`);
  return response.data;
};
