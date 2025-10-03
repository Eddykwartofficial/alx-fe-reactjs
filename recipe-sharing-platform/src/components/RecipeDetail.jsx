// src/pages/RecipeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams(); // get ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch("/data.json"); // adjust if data.json is elsewhere
        const data = await res.json();
        const found = data.recipes.find((r) => String(r.id) === id);
        setRecipe(found);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
