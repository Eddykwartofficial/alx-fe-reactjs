import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // Basic recipe data
  recipes: [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
      ingredients: ["spaghetti", "eggs", "parmesan cheese", "pancetta", "black pepper"],
      preparationTime: 30
    },
    {
      id: 2,
      title: "Chicken Stir Fry",
      description: "Quick and healthy stir-fried chicken with vegetables",
      ingredients: ["chicken breast", "bell peppers", "broccoli", "soy sauce", "ginger"],
      preparationTime: 20
    }
  ],
  
  // Basic recipe actions
  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Search functionality
  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    )
  })),
  
  // Favorites functionality
  favorites: [],
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Recommendations
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Simple recommendation logic: suggest recipes similar to favorites
    const recommended = state.recipes.filter(recipe => {
      // If user has favorites, recommend recipes with similar ingredients
      if (state.favorites.length > 0) {
        const favoriteRecipes = state.recipes.filter(r => state.favorites.includes(r.id));
        return favoriteRecipes.some(favRecipe => 
          recipe.ingredients.some(ingredient =>
            favRecipe.ingredients.includes(ingredient)
          ) && !state.favorites.includes(recipe.id)
        );
      }
      // If no favorites, recommend random recipes
      return Math.random() > 0.5;
    });
    return { recommendations: recommended.slice(0, 3) };
  }),
}));

export { useRecipeStore };
