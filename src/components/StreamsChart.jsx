import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const StreamsChart = ({ data }) => (
  <div className="bg-white shadow rounded-lg p-4 my-4">
    <h2 className="text-lg font-semibold mb-2">Streams Per Day</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="streams" stroke="#3b82f6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default StreamsChart;
