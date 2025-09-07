import axios from "axios";

const DASHBOARD_API_BASE_URL = "https://reedstreams-backend.onrender.com/api/dashboard";
const MATCHES_API_BASE_URL = "https://reedstreams-backend.onrender.com/api/matches";

export const getLiveStats = async () => {
  const res = await axios.get(`${DASHBOARD_API_BASE_URL}/live-stats`); 
  return res.data.data;
};

export const getStreamsPerDay = async () => {
  const res = await axios.get(`${DASHBOARD_API_BASE_URL}/streams-per-day`); 
  return res.data.data;
};

export const getMostStreamedSports = async () => {
  const res = await axios.get(`${DASHBOARD_API_BASE_URL}/most-streamed-sports`); 
  return res.data.data;
};

export const getLiveMatchesBySport = async (sportId) => {
  const res = await axios.get(`${MATCHES_API_BASE_URL}?sport_id=${sportId}`); 
  return res.data.matches || [];
};