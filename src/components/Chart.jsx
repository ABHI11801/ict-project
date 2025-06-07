import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Week 1", Leads: 300, Closed: 100 },
  { name: "Week 2", Leads: 500, Closed: 200 },
  { name: "Week 3", Leads: 700, Closed: 400 },
  { name: "Week 4", Leads: 600, Closed: 350 },
];

const Chart = () => (
  <BarChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Leads" fill="#8884d8" />
    <Bar dataKey="Closed" fill="#82ca9d" />
  </BarChart>
);

export default Chart;
