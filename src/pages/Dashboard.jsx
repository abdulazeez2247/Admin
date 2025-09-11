// import React, { useEffect, useState } from 'react';
// import StatsGrid from '../components/StatsGrid';
// import StreamsChart from '../components/StreamsChart';
// import SportsPercentageChart from '../components/SportsPercentageChart';
// import MatchTable from '../components/MatchTable';
// import { getLiveStats, getStreamsPerDay, getMostStreamedSports, getLiveMatchesBySport } from '../data/api';

// const Dashboard = () => {
//   const [stats, setStats] = useState({ totalUsers: 0, totalStreams: 0, activeSports: 0 });
//   const [chartData, setChartData] = useState([]);
//   const [sportsData, setSportsData] = useState([]);
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const [liveStats, streamsData, sportsData, matchesData] = await Promise.all([
//           getLiveStats(),
//           getStreamsPerDay(),
//           getMostStreamedSports(),
//           getLiveMatchesBySport('football')
//         ]);

//         setStats(liveStats);
//         setChartData(streamsData);
//         setSportsData(sportsData);
//         setMatches(matchesData);

//       } catch (error) {
//         console.error("Failed to fetch dashboard data:", error);
//       }
//     };

//     fetchAll();
//   }, []);

//   return (
//     <>
//       <StatsGrid stats={stats} />
//       <StreamsChart data={chartData} />
//       <SportsPercentageChart data={sportsData} />
//       <MatchTable matches={matches} />
//     </>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import StatsGrid from '../components/StatsGrid';
import StreamsChart from '../components/StreamsChart';
import SportsPercentageChart from '../components/SportsPercentageChart';
import MatchTable from '../components/MatchTable';
import { getLiveStats, getStreamsPerDay, getMostStreamedSports, getLiveMatchesBySport } from '../data/api';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalStreams: 0, activeSports: 0 });
  const [chartData, setChartData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const [liveStats, streamsData, sportsData, matchesData] = await Promise.all([
          getLiveStats(),
          getStreamsPerDay(),
          getMostStreamedSports(),
          getLiveMatchesBySport('1') // 1 = Football ID
        ]);

        setStats(liveStats || { totalUsers: 0, totalStreams: 0, activeSports: 0 });
        setChartData(streamsData || []);
        setSportsData(sportsData || []);
        setMatches(matchesData || []);

      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading dashboard data...</p>
      </div>
    );
  }

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