import React from "react";

const Sidebar = ({
  isOpen,
  onClose,
  sportsList,
  searchTerm,
  onSearchChange,
  onSportClick,
}) => {
  const filteredSports = (sportsList || []).filter((sport) =>
    sport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-5 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Sports</h2>
        <button onClick={onClose} className="text-white text-xl hover:text-gray-300">
          ✕
        </button>
      </div>

     
      <input
        type="text"
        placeholder="Search sport..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-2 mb-4 rounded text-gray-800 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" 
      />

   
      <ul className="space-y-2 overflow-y-auto max-h-[75vh]">
        {filteredSports.length > 0 ? (
          filteredSports.map((sport) => (
            <li key={sport.id}>
              <button
                onClick={() => onSportClick(sport.id)}
                className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-green-600 rounded-md transition-colors duration-200" 
              >
                {sport.name}
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-400">No sports found.</li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;