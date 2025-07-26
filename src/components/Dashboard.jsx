// src/components/Dashboard.jsx
import React from "react";
import { Card, CardContent } from '../components/ui/card';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { name: "Mon", sales: 100, leads: 20, inventory: 80 },
  { name: "Tue", sales: 150, leads: 25, inventory: 70 },
  { name: "Wed", sales: 120, leads: 22, inventory: 65 },
  { name: "Thu", sales: 180, leads: 30, inventory: 60 },
  { name: "Fri", sales: 200, leads: 35, inventory: 55 },
  { name: "Sat", sales: 220, leads: 40, inventory: 50 },
  { name: "Sun", sales: 250, leads: 45, inventory: 45 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">📊 Smart Business Dashboard</h2>

      <Card className="shadow-xl">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Weekly Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleData}>
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Leads & Inventory</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleData}>
              <Line type="monotone" dataKey="leads" stroke="#00C49F" />
              <Line type="monotone" dataKey="inventory" stroke="#FFBB28" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
