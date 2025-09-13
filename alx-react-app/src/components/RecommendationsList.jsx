import { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, addFavorite, favorites } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [favorites]); // Regenerate when favorites change

  return (
    <div style={{ backgroundColor: '#e3f2fd', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
      <h2>🌟 Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>Add some favorite recipes to get personalized recommendations!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ backgroundColor: 'white', padding: '1rem', margin: '1rem 0', borderRadius: '4px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <button 
              onClick={() => addFavorite(recipe.id)}
              style={{ 
                backgroundColor: '#2196f3',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Add to Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
