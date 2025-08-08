import React from 'react';

const StatsGrid = ({ stats }) => {
  
  const { totalUsers, totalStreams, activeSports } = stats || {}; 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-600">Total Users</h3>
        <p className="text-4xl font-bold text-indigo-700 mt-2">{totalUsers?.toLocaleString() || 0}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-600">Total Streams</h3>
        <p className="text-4xl font-bold text-indigo-700 mt-2">{totalStreams?.toLocaleString() || 0}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-600">Active Sports</h3>
        <p className="text-4xl font-bold text-indigo-700 mt-2">{activeSports || 0}</p>
      </div>
    </div>
  );
};

export default StatsGrid;