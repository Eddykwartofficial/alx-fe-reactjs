import { useRecipeStore } from "./recipeStore";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  // Use useParams to get the ID from the URL. This should be a dynamic route like "/recipes/:id".
  const { id } = useParams();

  // Use the Zustand store to find the specific recipe and get the deleteRecipe action.
  const recipe = useRecipeStore((state) =>
    state.recipes.id.find((r) => r.id === id)
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  // Use the useNavigate hook to programmatically redirect the user.
  const navigate = useNavigate();

  // Handle the delete logic in a separate function.
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      // Correctly call the deleteRecipe action with the recipe's ID
      deleteRecipe(recipe.id);
      navigate("/"); // Redirect to the main list
    }
  };
};

// Handle the case where the recipe is not found.
if (!recipe) {
  return <div>Recipe not found.</div>;
}

// Return the JSX for the component.
return (
  <div>
    <h1>{recipe.title}</h1>
    <p>{recipe.description}</p>
    <button onClick={handleDelete}>Delete Recipe</button>
    {/* Add a button or link to the edit page here */}
  </div>
);

export default RecipeDetails;