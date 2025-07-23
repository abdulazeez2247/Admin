// src/components/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-4 w-full sm:w-auto">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);

export default StatCard;
