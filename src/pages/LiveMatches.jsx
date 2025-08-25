import React, { useEffect, useState } from 'react';
import { getLiveMatchesBySport } from "../data/api";

const LiveMatches = ({ selectedSportId }) => {
  const [matches, setMatches] = useState([]);
  const [sportName, setSportName] = useState('Loading...');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      setError('');
      try {
        const matchesData = await getLiveMatchesBySport(selectedSportId);
        setMatches(matchesData);

        const sport = matchesData.length > 0 
          ? matchesData[0].sport_name 
          : "Unknown Sport";
        setSportName(sport);
      } catch (err) {
        console.error("Failed to fetch live matches:", err);
        setError("Failed to load live matches. Please try again later.");
        setSportName("Unknown Sport");
      }
      setLoading(false);
    };

    if (selectedSportId) {
      fetchMatches();
    }
  }, [selectedSportId]);

  return (
    <div>
      <header className="mb-8">
        <div className="bg-gray-800 rounded-b-lg p-6 py-12 -mt-8 mx-auto shadow-md">
          <h2 className="text-white text-3xl font-bold mb-2">{sportName} Live Matches</h2>
        </div>
      </header>

      <main className="px-4 -mt-32">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Available Matches</h3>

          {loading ? (
            <p className="text-gray-600">Loading matches...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : matches.length === 0 ? (
            <p className="text-gray-600">No live matches available for {sportName} at the moment.</p>
          ) : (
            <div className="space-y-4">
              {matches.map((match) => (
                <div key={match._id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <p className="text-xl font-semibold text-gray-800">
                    {match.home_team} vs {match.away_team}
                  </p>
                  <p className="text-gray-700 text-sm">{match.league}</p>
                  <p className="text-gray-600">
                    Time: {new Date(match.match_time).toLocaleString()}
                  </p>
                  <button
                    onClick={() => window.open(match.stream_url, '_blank')}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Watch Live
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LiveMatches;