import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username, location, minRepos);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <input
        type="number"
        placeholder="Min Repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <button
        type="submit"
        className="col-span-1 md:col-span-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
