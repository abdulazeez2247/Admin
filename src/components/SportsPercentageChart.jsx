// src/components/SportsPercentageChart.jsx
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#10b981', '#6366f1', '#f59e0b', '#ef4444', '#3b82f6'];

// Custom label rendering
const renderCustomizedLabel = ({ percent }) => {
  return `${(percent * 100).toFixed(0)}%`;
};

const SportsPercentageChart = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg p-4 my-4 flex items-center justify-center h-[300px]">
        <p className="text-gray-500">No sports percentage data available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-4 my-4">
      <h2 className="text-lg font-semibold mb-2">Most Streamed Sports</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="percentage"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            label={renderCustomizedLabel}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SportsPercentageChart;
