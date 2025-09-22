import axios from "axios";

const BASE_URL = "https://api.github.com";
const PER_PAGE = 10;

const getAuthHeader = () => {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  return token ? { Authorization: `token ${token}` } : {};
};

/**
 * Search users using GitHub Search API with advanced query params.
 * @param {string} username
 * @param {string} location
 * @param {number|string} minRepos
 * @param {number} page
 * @returns {Promise<{items: Array, total_count: number}>}
 */
export const searchUsers = async (username = "", location = "", minRepos = "", page = 1) => {
  try {
    let q = [];
    if (username) q.push(username);
    if (location) q.push(`location:${location}`);
    if (minRepos) q.push(`repos:>=${minRepos}`);
    const query = q.length ? q.join(" ") : "type:user";

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query,
        per_page: PER_PAGE,
        page,
      },
      headers: {
        ...getAuthHeader(),
      },
    });

    return {
      items: response.data.items,
      total_count: response.data.total_count,
    };
  } catch (err) {
    // bubble the error
    throw err;
  }
};

/**
 * Get full user details for a username.
 * Use this to obtain location, public_repos, name, company, etc.
 * @param {string} username
 * @returns {Promise<Object>}
 */
export const fetchUserDetails = async (username) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        ...getAuthHeader(),
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
