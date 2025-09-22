import React, { useState } from "react";
import Search from "./components/Search";
import UserList from "./components/UserList";
import { searchUsers, fetchUserDetails } from "./services/githubService";

const App = () => {
  const [users, setUsers] = useState([]); // detailed user objects
  const [status, setStatus] = useState("idle"); // idle | loading | error | success
  const [page, setPage] = useState(1);
  const [lastQuery, setLastQuery] = useState({ username: "", location: "", minRepos: "" });
  const [totalCount, setTotalCount] = useState(0);

  const fetchAndEnrich = async (items) => {
    // items are search result stubs with .login
    // fetch details for each (be aware of rate limits)
    const detailPromises = items.map((it) => fetchUserDetails(it.login).catch(() => null));
    const detailed = await Promise.all(detailPromises);
    // filter out failed fetches (null)
    return detailed.filter(Boolean);
  };

  const handleSearch = async (username = "", location = "", minRepos = "") => {
    setStatus("loading");
    setPage(1);
    try {
      const { items, total_count } = await searchUsers(username, location, minRepos, 1);
      setTotalCount(total_count);
      const detailed = await fetchAndEnrich(items);
      setUsers(detailed);
      setLastQuery({ username, location, minRepos });
      setPage(2);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setUsers([]);
      setStatus("error");
    }
  };

  const loadMore = async () => {
    setStatus("loading");
    try {
      const { username, location, minRepos } = lastQuery;
      const { items } = await searchUsers(username, location, minRepos, page);
      const detailed = await fetchAndEnrich(items);
      setUsers((prev) => [...prev, ...detailed]);
      setPage((p) => p + 1);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>

      <Search onSearch={handleSearch} />

      {status === "loading" && (
        <p className="text-center text-gray-600 mt-4">Loading...</p>
      )}
      {status === "error" && (
        <p className="text-center text-red-500 mt-4">
          Something went wrong. Try again or check your API token/rate limit.
        </p>
      )}

      {status === "success" && (
        <>
          <p className="text-center text-sm text-gray-600 mt-4">
            Showing <strong>{users.length}</strong> of <strong>{totalCount}</strong> results
          </p>

          <UserList users={users} />

          {users.length < totalCount && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMore}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
