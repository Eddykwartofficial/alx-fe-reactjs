import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md text-center max-w-sm mx-auto">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{user.login}</h2>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
