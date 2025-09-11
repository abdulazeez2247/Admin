import axios from "axios";

const API_BASE_URL = "https://reedstreams-backend.onrender.com/api/";

export const getLiveStats = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/dashboard/live-stats`);
    return res.data.data; // ✅ Correct structure
  } catch (error) {
    console.error("Error fetching live stats:", error);
    return { totalUsers: 0, totalStreams: 0, activeSports: 0 };
  }
};

export const getStreamsPerDay = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/dashboard/streams-per-day`);
    return res.data.data; // ✅ Correct structure
  } catch (error) {
    console.error("Error fetching streams per day:", error);
    return [];
  }
};

export const getMostStreamedSports = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/dashboard/most-streamed-sports`);
    return res.data; // ✅ Correct - returns array directly
  } catch (error) {
    console.error("Error fetching most streamed sports:", error);
    return [];
  }
};

export const getLiveMatchesBySport = async (sportId) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/dashboard/matches?sport_id=${sportId}`);
    return res.data.matches || []; // ✅ Correct structure
  } catch (error) {
    console.error("Error fetching live matches:", error);
    return [];
  }
};