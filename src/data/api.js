import axios from "axios";

const API_BASE_URL = 'http://localhost:7000/api/dashboard';

export const getLiveStats = async () => {
  const res = await axios.get(`${API_BASE_URL}/live-stats`);
  return res.data.data;
};

export const getStreamsPerDay = async () => {
  const res = await axios.get(`${API_BASE_URL}/streams-per-day`);
  return res.data.data;
};

export const getMostStreamedSports = async () => {
  const res = await axios.get(`${API_BASE_URL}/most-streamed-sports`);
  return res.data.data;
};

export const getLiveMatchesBySport = async (sportId) => {
  const res = await axios.get(`${API_BASE_URL}/matches?sport_id=${sportId}`);
  return res.data.matches || [];
};