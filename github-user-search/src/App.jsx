import React, { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService";

const App = () => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | error | success

  const handleSearch = async (username) => {
    setStatus("loading");
    setUser(null);
    try {
      const data = await fetchUserData(username);
      setUser(data);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>

      <Search onSearch={handleSearch} />

      {status === "loading" && <p className="mt-4 text-gray-600">Loading...</p>}
      {status === "error" && (
        <p className="mt-4 text-red-500">Looks like we can’t find the user</p>
      )}
      {status === "success" && user && <UserCard user={user} />}
    </div>
  );
};

export default App;
