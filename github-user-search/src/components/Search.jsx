import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(username.trim(), location.trim(), minRepos ? Number(minRepos) : "");
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <input
        className="border rounded-lg p-2 col-span-1 md:col-span-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username (e.g. octocat)"
        aria-label="username"
      />
      <input
        className="border rounded-lg p-2"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location (city or country)"
        aria-label="location"
      />
      <input
        className="border rounded-lg p-2"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        placeholder="Min repos"
        type="number"
        min="0"
        aria-label="min repos"
      />
      <button
        type="submit"
        className="md:col-span-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
