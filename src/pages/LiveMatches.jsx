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
        const responseData = await getLiveMatchesBySport(selectedSportId);
    
        const liveMatches = responseData.data?.streams || []; 

        setMatches(liveMatches);

        const sport = liveMatches.length > 0 
          ? liveMatches[0].sport_name 
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
        <div className="bg-argon-dark rounded-b-lg p-6 py-12 -mt-8 mx-auto shadow-md">
          <h2 className="text-white text-3xl font-bold mb-2">{sportName} Live Matches</h2>
        </div>
      </header>

      <main className="px-4 -mt-32">
        <div className="bg-white rounded-lg shadow-card p-6">
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
                <div key={match.gmid} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <p className="text-xl font-semibold text-gray-800">
                    {match.home_team_name || "N/A"} vs {match.away_team_name || "N/A"}
                  </p>
                  <p className="text-gray-700 text-sm">{match.competition_name || "Unknown Competition"}</p>
                  <p className="text-gray-600">
                    Score: {match.home_score_current ?? '0'} - {match.away_score_current ?? '0'}
                  </p>
                  <p className="text-gray-600">Start Time: {new Date(match.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || "N/A"}</p>
                  
                  {match.goal_scorers && match.goal_scorers.length > 0 && (
                    <div className="mt-2 text-sm text-gray-600">
                      <p className="font-semibold">Goal Scorers:</p>
                      <ul className="list-disc list-inside">
                        {match.goal_scorers.map((scorer, idx) => (
                          <li key={idx}>{scorer.player_name} ({scorer.time}') - {scorer.score_after}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {match.stream_source && (
                    <button
                      onClick={() => window.open(match.stream_source, '_blank')}
                      className="mt-4 px-4 py-2 bg-argon-purple text-white rounded-md hover:bg-argon-dark focus:outline-none focus:ring-2 focus:ring-argon-purple focus:ring-opacity-50"
                    >
                      Watch Live
                    </button>
                  )}
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