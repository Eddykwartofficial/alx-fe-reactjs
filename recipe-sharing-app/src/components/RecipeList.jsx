import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, deleteRecipe, favorites, addFavorite, removeFavorite } = useRecipeStore();
  
  // Use filtered recipes if there's a search term, otherwise show all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  const handleToggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      {displayRecipes.length === 0 ? (
        <p>No recipes found. {searchTerm ? 'Try a different search term.' : 'Add your first recipe!'}</p>
      ) : (
        displayRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card" style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p><strong>Prep Time:</strong> {recipe.preparationTime} minutes</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            
            <div style={{ marginTop: '1rem' }}>
              <button 
                onClick={() => handleToggleFavorite(recipe.id)}
                style={{ 
                  backgroundColor: favorites.includes(recipe.id) ? '#ff6b6b' : '#51cf66',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  marginRight: '0.5rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {favorites.includes(recipe.id) ? '❤️ Favorited' : '🤍 Add to Favorites'}
              </button>
              
              <button 
                onClick={() => deleteRecipe(recipe.id)}
                style={{ 
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete Recipe
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
