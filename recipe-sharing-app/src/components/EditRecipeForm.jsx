import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get the recipe data and the updateRecipe action from the Zustand store
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // If the recipe is not found, display a message.
  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  // Initialize the form's state with the existing recipe's data
  const [formState, setFormState] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  // Handle changes to the form inputs
  const handleChange = (event) => {
    const { name, value } = e.target;
    event.preventDefault();
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the updateRecipe action with the new data
    updateRecipe({
      id,
      ...formState,
    });
    // Navigate back to the recipe details page
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Recipe</h1>
      <input
        type="text"
        name="title"
        value={formState.title}
        onChange={handleChange}
        placeholder="Recipe Title"
        required
      />
      <textarea
        name="description"
        value={formState.description}
        onChange={handleChange}
        placeholder="Recipe Description"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;