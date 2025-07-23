
export const staticDashboardData = {
  stats: [
    { title: "TRAFFIC", value: "350,897", change: "+3.48%", period: "Since last month", icon: "📊", iconBg: "bg-red-500", iconColor: "text-white" },
    { title: "NEW USERS", value: "2,356", change: "-3.48%", period: "Since last week", icon: "👤", iconBg: "bg-orange-500", iconColor: "text-white" },
    { title: "STREAMS PER USER", value: "924", change: "+1.10%", period: "Since yesterday", icon: "▶️", iconBg: "bg-yellow-500", iconColor: "text-white" },
    { title: "PERFORMANCE", value: "49,65%", change: "+12%", period: "Since last month", icon: "📈", iconBg: "bg-green-500", iconColor: "text-white" },
  ],

  userFlowChartData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "User Flow (Daily)",
        data: [100, 120, 150, 130, 180, 200, 190, 220, 250, 230, 280, 300],
        borderColor: '#4c52f6',
        tension: 0.4,
        fill: false,
      },
    ],
  },

  streamsPerDayChartData: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Streams Per Day by User",
        data: [25, 32, 28, 35, 22, 30],
        backgroundColor: '#f5365c',
      },
    ],
  },

  mostStreamedSports: [
    { name: "Football", percentage: 70, color: '#f5365c' },
    { name: "Basketball", percentage: 15, color: '#fb6340' },
    { name: "Table-Tennis", percentage: 10, color: '#2dce89' },
    { name: "Baseball", percentage: 5, color: '#4c52f6' },
  ],

  sportsList: [
    { id: 'football', name: 'Football' },
    { id: 'basketball', name: 'Basketball' },
    { id: 'Table-Tennis', name: 'Table-Tennis' },
    { id: 'Baseball', name: 'Baseball' },
    { id: 'Volleyball', name: 'Volleyball' },
   
  ],

  liveMatches: {
    football: [
      { id: 'match1', teams: 'Man Utd vs Liverpool', time: 'Live Now', score: '1-0' },
      { id: 'match2', teams: 'Real Madrid vs Barcelona', time: '18:00 GMT', score: '0-0' },
    ],
    basketball: [
      { id: 'match3', teams: 'Lakers vs Celtics', time: 'Live Now', score: '98-95' },
    ],
    tennis: [
      { id: 'match4', teams: 'Djokovic vs Alcaraz', time: 'Live Now', score: '2-1 Sets' },
    ],
  }
};