// src/components/HomePage.jsx

import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
// We use a regular import for the JSON file in Vite
import initialRecipesData from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load mock data on mount
  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setRecipes(initialRecipesData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-xl text-gray-500">Loading recipes...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-extrabold text-orange-600">
            Recipe Explorer 🍳
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Discover and share amazing home-cooked recipes.
          </p>
        </div>
      </header>

      {/* Main Content (Recipe Grid) */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Dishes</h2>
        
        {/* Responsive Grid Layout */}
        <div 
          className="
            grid 
            grid-cols-1        /* Default: 1 column for small screens */
            sm:grid-cols-2     /* Small screens and up: 2 columns */
            lg:grid-cols-3     /* Large screens and up: 3 columns */
            xl:grid-cols-4     /* Extra large screens: 4 columns */
            gap-6 sm:gap-8
          "
        >
          {recipes.map((recipe) => (
            // Note: onClick handler for navigation will be added in a later task
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        
        {recipes.length === 0 && (
          <p className="text-center text-gray-500 py-10">No recipes found.</p>
        )}
      </main>
    </div>
  );
};

export default HomePage;