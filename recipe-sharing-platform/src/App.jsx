const App = () => {
  const [recipes, setRecipes] = useState(initialRecipesData);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleRecipeClick = (id) => {
    setSelectedRecipeId(id);
    setCurrentPage('detail');
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes(prev => [newRecipe, ...prev]);
    setCurrentPage('home');
  };

  const selectedRecipe = recipes.find(r => r.id === selectedRecipeId);

  return (
    <div>
      {currentPage === 'home' && (
        <HomePage
          recipes={recipes}
          onRecipeClick={handleRecipeClick}
          onNavigateToAddRecipe={() => setCurrentPage('add')}
        />
      )}
      {currentPage === 'detail' && (
        <RecipeDetailPage
          recipe={selectedRecipe}
          onBack={() => setCurrentPage('home')}
        />
      )}
      {currentPage === 'add' && (
        <AddRecipeForm
          onSubmit={handleAddRecipe}
          onCancel={() => setCurrentPage('home')}
        />
      )}
    </div>
  );
};

export default App;