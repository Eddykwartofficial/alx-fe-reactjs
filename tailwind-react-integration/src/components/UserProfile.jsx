// src/components/UserProfile.jsx

import React from 'react';

function UserProfile() {
  return (
    // 1. Container Styling (Initial & Responsive)
    // - Initial: bg-gray-100, max-w-sm, p-8, mx-auto, my-20, rounded-lg, shadow-lg
    // - Responsive: sm:p-4, md:p-8, sm:max-w-xs, md:max-w-sm
    // 2. Interactivity (Hover Effects)
    // - Enhanced Shadows: hover:shadow-xl, transition-shadow duration-300
    <div
      className="
        bg-gray-100
        sm:p-4 md:p-8 p-8
        sm:max-w-xs md:max-w-sm
        mx-auto my-20
        rounded-lg
        shadow-lg
        hover:shadow-xl
        transition-shadow duration-300
        text-center
      "
    >
      {/* 1. Image Styling (Initial & Responsive) */}
      {/* - Initial: rounded-full, w-36 h-36, mx-auto */}
      {/* - Responsive: sm:w-24 sm:h-24, md:w-36 md:h-36 */}
      {/* 2. Interactivity (Hover Effects) */}
      {/* - Hover: hover:scale-110, transition-transform duration-300 ease-in-out */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full
          sm:w-24 sm:h-24 md:w-36 md:h-36
          mx-auto
          object-cover
          transform transition-transform duration-300 ease-in-out
          hover:scale-110
        "
      />

      {/* 1. Heading Styling (Initial & Responsive) */}
      {/* - Initial: text-xl, text-blue-800, my-4 */}
      {/* - Responsive: sm:text-lg, md:text-xl */}
      {/* 2. Interactivity (Hover Effects) */}
      {/* - Hover: hover:text-blue-500, transition-colors duration-300 */}
      <h1
        className="
          sm:text-lg md:text-xl text-xl
          font-semibold
          text-blue-800
          my-4
          transition-colors duration-300
          hover:text-blue-500
        "
      >
        John Doe
      </h1>

      {/* 1. Paragraph Styling (Initial & Responsive) */}
      {/* - Initial: text-gray-600, text-base */}
      {/* - Responsive: sm:text-sm, md:text-base */}
      <p
        className="
          sm:text-sm md:text-base text-base
          text-gray-600
        "
      >
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;