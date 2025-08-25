import React from 'react';

const StatsGrid = ({ stats }) => {
  const { totalUsers, totalStreams, activeSports } = stats || {}; 

  const statCards = [
    { title: "Total Users", value: totalUsers, icon: "👥", color: "bg-blue-500" },
    { title: "Total Streams", value: totalStreams, icon: "📺", color: "bg-green-500" },
    { title: "Active Sports", value: activeSports, icon: "⚽", color: "bg-purple-500" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {statCards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${card.color} text-white mr-4`}>
              <span className="text-xl">{card.icon}</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-gray-800">{card.value?.toLocaleString() || 0}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;