import React from "react";

const UserCardDetailed = ({ user }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{user.name || user.login}</h3>
            <p className="text-sm text-gray-500">@{user.login}</p>
          </div>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            View Profile
          </a>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          <span className="mr-4">📍 {user.location || "—"}</span>
          <span className="mr-4">📦 repos: {user.public_repos ?? "—"}</span>
          <span>👥 followers: {user.followers ?? "—"}</span>
        </div>
      </div>
    </div>
  );
};

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return <p className="text-center text-gray-600 mt-6">No users to display.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto grid gap-4 mt-6">
      {users.map((u) => (
        <UserCardDetailed key={u.id} user={u} />
      ))}
    </div>
  );
};

export default UserList;
