// src/components/RecipeCard.jsx

import React from 'react';

// Note: In a real app, this would also take an onClick handler for navigation.
const RecipeCard = ({ recipe }) => {
  return (
    // Responsive Card Container with Hover Effects (shadow-lg, hover:shadow-xl, hover:scale-105)
    <div
      className="
        bg-white rounded-xl shadow-lg overflow-hidden 
        cursor-pointer 
        transform transition-all duration-300 
        hover:shadow-xl hover:scale-[1.02]
      "
    >
      {/* Image Container */}
      <div className="h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Text Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {recipe.summary}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;