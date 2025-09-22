import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch users with advanced search filters
 * @param {string} username
 * @param {string} location
 * @param {number} minRepos
 * @param {number} page
 * @returns {Promise<Object>} { items, total_count }
 */
export const searchUsers = async (username, location, minRepos, page = 1) => {
  try {
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query.trim(),
        page,
        per_page: 10, // limit results per page
      },
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
