// import React from 'react';

// const MatchTable = ({ matches }) => {
//   if (!Array.isArray(matches) || matches.length === 0) {
//     return (
//       <div className="bg-white shadow rounded-lg p-4 my-4 flex items-center justify-center h-48">
//         <p className="text-gray-500">No live matches data available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="overflow-x-auto bg-white shadow rounded-lg p-4 my-4">
//       <h2 className="text-lg font-semibold mb-2">Live Matches</h2>
//       <table className="min-w-full">
//         <thead>
//           <tr className="border-b text-left">
//             <th className="p-2">Match</th>
//             <th className="p-2">League</th>
//             <th className="p-2">Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {matches.map((match) => (
//             <tr key={match._id} className="border-b">
//               <td className="p-2">{match.home_team} vs {match.away_team}</td>
//               <td className="p-2">{match.league}</td>
//               <td className="p-2">{new Date(match.match_time).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MatchTable;
import React from 'react';

const MatchTable = ({ matches }) => {
  if (!Array.isArray(matches) || matches.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg p-4 my-4 flex items-center justify-center h-48">
        <p className="text-gray-500">No live matches available.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg p-4 my-4">
      <h2 className="text-lg font-semibold mb-2">Live Matches</h2>
      <table className="min-w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2">Match</th>
            <th className="p-2">League</th>
            <th className="p-2">Time</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.matchId} className="border-b">
              <td className="p-2">{match.homeTeam} vs {match.awayTeam}</td>
              <td className="p-2">{match.competitionName}</td>
              <td className="p-2">
                {match.matchTime ? new Date(match.matchTime * 1000).toLocaleString() : 'N/A'}
              </td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded text-xs ${
                  match.matchStatus === 'LIVE' ? 'bg-red-100 text-red-800' :
                  match.matchStatus === 'UPCOMING' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {match.matchStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchTable;