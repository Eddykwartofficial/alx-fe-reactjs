import React, { useState } from "react";
import Search from "./components/Search";
import UserList from "./components/UserList";
import { searchUsers } from "./services/githubService";

const App = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | error | success
  const [page, setPage] = useState(1);
  const [lastSearch, setLastSearch] = useState({});

  const handleSearch = async (username, location, minRepos, newSearch = true) => {
    setStatus("loading");
    try {
      const data = await searchUsers(username, location, minRepos, newSearch ? 1 : page);
      if (newSearch) {
        setUsers(data.items);
        setPage(2);
        setLastSearch({ username, location, minRepos });
      } else {
        setUsers((prev) => [...prev, ...data.items]);
        setPage((prev) => prev + 1);
      }
      setStatus("success");
    } catch (error) {
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
          Something went wrong. Try again.
        </p>
      )}
      {status === "success" && <UserList users={users} />}

      {status === "success" && users.length > 0 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              handleSearch(lastSearch.username, lastSearch.location, lastSearch.minRepos, false)
            }
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
