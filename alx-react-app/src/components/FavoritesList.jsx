import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const { recipes, favorites, removeFavorite } = useRecipeStore();
  
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Remove any undefined entries

  return (
    <div style={{ backgroundColor: '#ffe3e3', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
      <h2>❤️ My Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet. Start adding some!</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ backgroundColor: 'white', padding: '1rem', margin: '1rem 0', borderRadius: '4px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button 
              onClick={() => removeFavorite(recipe.id)}
              style={{ 
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Remove from Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
