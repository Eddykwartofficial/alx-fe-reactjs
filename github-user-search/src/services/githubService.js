import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch GitHub user data by username
 * @param {string} username
 * @returns {Promise<Object>}
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
