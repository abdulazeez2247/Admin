import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = ({ setSelectedSport }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  const sportsList = [
    { id: 'football', name: 'Football' },
    { id: 'baseball', name: 'Baseball' },
    { id: 'amfootball', name: 'American Football' }
  ];

  const handleSportClick = (sportId) => {
    if (setSelectedSport) {
      setSelectedSport(sportId);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        sportsList={sportsList}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSportClick={handleSportClick}
      />
      <div className={`flex flex-col flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-5 left-5 z-40 p-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
          >
            ☰
          </button>
        )}
        <Topbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;