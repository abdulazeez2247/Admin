import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const SportsPercentageChart = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 my-6 flex items-center justify-center h-80">
        <p className="text-gray-500 text-lg">No sports data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 my-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Most Streamed Sports</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              dataKey="percentage"
              label={({ name, percentage }) => `${name}: ${percentage}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SportsPercentageChart;