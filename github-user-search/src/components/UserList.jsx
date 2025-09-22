import React from "react";

const UserList = ({ users }) => {
  if (!users || users.length === 0) return null;

  return (
    <div className="grid gap-4 mt-6 max-w-4xl mx-auto">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white"
        >
          <div className="flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
