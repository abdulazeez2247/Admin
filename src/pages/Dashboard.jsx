// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import StatsGrid from '../components/StatsGrid';
import StreamsChart from '../components/StreamsChart';
import SportsPercentageChart from '../components/SportsPercentageChart';
import MatchTable from '../components/MatchTable';
import axios from 'axios'; // Ensure axios is imported

// It no longer needs to import DashboardLayout, as it's rendered by AppRouter

const Dashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalStreams: 0, activeSports: 0 }); // Initialize with default values
  const [chartData, setChartData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [statsRes, streamsRes, sportsRes, matchesRes] = await Promise.all([
          axios.get('/api/dashboard/live-stats'),
          axios.get('/api/dashboard/streams-per-day'), // Ensure this matches your backend route
          axios.get('/api/dashboard/most-streamed-sports'), // Ensure this matches your backend route
          axios.get('/api/dashboard/matches?sport_id=football'), // Use a real sport ID if '1' is not valid
        ]);

        setStats(statsRes.data.data);
        setChartData(streamsRes.data.data);
        setSportsData(sportsRes.data); // Assuming backend sends array directly
        setMatches(matchesRes.data.matches);

      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        // Implement better error handling (e.g., set error state to display a message to the user)
      }
    };

    fetchAll();
  }, []);

  return (
    // Only render the dashboard-specific components here.
    // DashboardLayout is provided by the router via <Outlet />
    <>
      <StatsGrid stats={stats} />
      <StreamsChart data={chartData} />
      <SportsPercentageChart data={sportsData} />
      <MatchTable matches={matches} />
    </>
  );
};

export default Dashboard;