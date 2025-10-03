import React, { useState, useEffect} from "react";
import RecipeCard from './AddRecipeForm';
import initialRecipesData from '../data.json';

const HomePage = ({ recipes, onRecipeClick, onNavigateToAddRecipe }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ChefHat className="h-10 w-10" />
              <div>
                <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
                <p className="text-orange-100">Discover and share amazing recipes</p>
              </div>
            </div>
            <button
              onClick={onNavigateToAddRecipe}
              className="flex items-center bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Recipe
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Popular Recipes</h2>
          <p className="text-gray-600">Browse our collection of delicious recipes</p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => onRecipeClick(recipe.id)}
            />
          ))}
        </div>

        {recipes.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No recipes yet. Be the first to add one!</p>
          </div>
        )}
      </main>
    </div>
  );
};

