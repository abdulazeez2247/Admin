import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LiveMatches from '../pages/LiveMatches';
import AdminLoginPage from '../pages/AdminLoginPage';
import DashboardLayout from '../layouts/DashboardLayout';

const AppRouter = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Update this later with real auth

  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={<AdminLoginPage setIsAuthenticated={setIsAuthenticated} />} />

      {/* Protected Routes inside Dashboard Layout */}
      {isAuthenticated && (
        <Route element={<DashboardLayout setSelectedSport={setSelectedSport} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/live-matches"
            element={<LiveMatches selectedSportId={selectedSport} />}
          />
        </Route>
      )}

      {/* Fallback to Login if not authenticated */}
      {!isAuthenticated && (
        <Route path="*" element={<AdminLoginPage setIsAuthenticated={setIsAuthenticated} />} />
      )}
    </Routes>
  );
};

export default AppRouter;
