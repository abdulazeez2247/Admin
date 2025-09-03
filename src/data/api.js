import axios from "axios";

const DASHBOARD_API_BASE_URL = "https://reedstreamsbackend1.onrender.com/api/dashboard";



export const getLiveStats = async () => {
  const res = await axios.get(`${DASHBOARD_API_BASE_URL}/api/dashboard/live-stats`);
  return res.data.data;
};

export const getStreamsPerDay = async () => {
  const res = await axios.get(`${DASHBOARD_API_BASE_URL}/api/dashboard/streams-per-day`);
  return res.data.data;
};

export const getMostStreamedSports = async () => {
  const res = await axios.get(`${DASHBOARD_API_BASE_URL}/api/dashboard/most-streamed-sports`);
  return res.data.data;
};


export const getLiveMatchesBySport = async (sportId) => {
  const res = await axios.get(`${MATCHES_API_BASE_URL}/api/matches?sport_id=${sportId}`);
  return res.data.matches || [];
};
