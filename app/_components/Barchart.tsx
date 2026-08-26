"use client";
import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D", uv: 2780 },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
  { name: "Page H", uv: 1000 },
  { name: "Page I", uv: 1990 },
];

const UVBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={90}>
      <BarChart barCategoryGap={6} data={data}>
        <Bar dataKey="uv" fill="#273F43" radius={3} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UVBarChart;
