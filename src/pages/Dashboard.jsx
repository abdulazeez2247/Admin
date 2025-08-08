import React, { useEffect, useState } from 'react';
import StatsGrid from '../components/StatsGrid';
import StreamsChart from '../components/StreamsChart';
import SportsPercentageChart from '../components/SportsPercentageChart';
import MatchTable from '../components/MatchTable';
import axios from 'axios'; 

const Dashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalStreams: 0, activeSports: 0 });
  const [chartData, setChartData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [statsRes, streamsRes, sportsRes, matchesRes] = await Promise.all([
          axios.get('/api/dashboard/live-stats'),
          axios.get('/api/dashboard/streams-per-day'), 
          axios.get('/api/dashboard/most-streamed-sports'), 
          axios.get('/api/dashboard/matches?sport_id=football'), 
        ]);

        setStats(statsRes.data.data);
        setChartData(streamsRes.data.data);
        setSportsData(sportsRes.data); 
        setMatches(matchesRes.data.matches);

      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        
      }
    };

    fetchAll();
  }, []);

  return (
    <>
      <StatsGrid stats={stats} />
      <StreamsChart data={chartData} />
      <SportsPercentageChart data={sportsData} />
      <MatchTable matches={matches} />
    </>
  );
};

export default Dashboard;