import React, { useState, useEffect } from 'react';
import { ChefHat, Clock, Users, Plus, ArrowLeft, Check, X } from 'lucide-react';

// Mock Recipe Data
const initialRecipesData = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop",
    ingredients: [
      "400g spaghetti",
      "200g pancetta or bacon",
      "4 large eggs",
      "100g Parmesan cheese, grated",
      "Black pepper to taste",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
      "While pasta cooks, cut pancetta into small cubes and fry in a large pan until crispy.",
      "In a bowl, whisk together eggs, grated Parmesan, and black pepper.",
      "When pasta is done, reserve 1 cup of pasta water, then drain pasta.",
      "Add hot pasta to the pan with pancetta, remove from heat.",
      "Quickly stir in egg mixture, adding pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra Parmesan and black pepper."
    ],
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 4
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato based gravy.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    ingredients: [
      "500g chicken breast, cubed",
      "1 cup yogurt",
      "2 tbsp tikka masala spice",
      "400g canned tomatoes",
      "1 cup heavy cream",
      "2 onions, diced",
      "4 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp butter",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Marinate chicken in yogurt and 1 tbsp tikka masala spice for at least 30 minutes.",
      "Grill or pan-fry marinated chicken until cooked through. Set aside.",
      "In a large pan, melt butter and sauté onions until golden.",
      "Add garlic and ginger, cook for 1 minute until fragrant.",
      "Add remaining tikka masala spice and cook for 30 seconds.",
      "Add canned tomatoes and simmer for 10 minutes.",
      "Blend the sauce until smooth, then return to pan.",
      "Stir in cream and cooked chicken, simmer for 5 minutes.",
      "Garnish with fresh cilantro and serve with rice or naan."
    ],
    prepTime: "40 mins",
    cookTime: "30 mins",
    servings: 4
  },
  {
    id: 3,
    title: "Classic Caesar Salad",
    summary: "Crisp romaine lettuce with homemade Caesar dressing, croutons, and Parmesan cheese.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    ingredients: [
      "2 heads romaine lettuce, chopped",
      "1 cup croutons",
      "1/2 cup Parmesan cheese, shaved",
      "2 cloves garlic",
      "2 anchovy fillets",
      "1 egg yolk",
      "2 tbsp lemon juice",
      "1 tsp Dijon mustard",
      "1/2 cup olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "For dressing: In a blender, combine garlic, anchovies, egg yolk, lemon juice, and mustard.",
      "Blend until smooth, then slowly drizzle in olive oil while blending.",
      "Season with salt and pepper to taste.",
      "In a large bowl, toss chopped romaine with dressing.",
      "Add croutons and toss again.",
      "Top with shaved Parmesan cheese.",
      "Serve immediately."
    ],
    prepTime: "15 mins",
    cookTime: "0 mins",
    servings: 4
  },
  {
    id: 4,
    title: "Chocolate Chip Cookies",
    summary: "Soft and chewy homemade chocolate chip cookies with a perfect golden edge.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "3/4 cup sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Mix flour, baking soda, and salt in a bowl.",
      "In another bowl, cream together butter and both sugars until fluffy.",
      "Beat in eggs and vanilla extract.",
      "Gradually stir in flour mixture.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake 9-11 minutes until golden brown.",
      "Cool on baking sheet for 2 minutes before transferring to wire rack."
    ],
    prepTime: "15 mins",
    cookTime: "11 mins",
    servings: 48
  }
];

// Recipe Card Component
const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.summary}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home Page Component
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

// Recipe Detail Page Component
const RecipeDetailPage = ({ recipe, onBack }) => {
  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-orange-100 mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Recipes
          </button>
          <h1 className="text-4xl font-bold">{recipe.title}</h1>
          <p className="text-orange-100 mt-2">{recipe.summary}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Recipe Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Recipe Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">Prep Time</p>
            <p className="font-semibold text-gray-800">{recipe.prepTime}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Clock className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">Cook Time</p>
            <p className="font-semibold text-gray-800">{recipe.cookTime}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">Servings</p>
            <p className="font-semibold text-gray-800">{recipe.servings}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Add Recipe Form Component
const AddRecipeForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    servings: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'title':
        return value.trim().length < 3 ? 'Title must be at least 3 characters' : '';
      case 'summary':
        return value.trim().length < 10 ? 'Summary must be at least 10 characters' : '';
      case 'ingredients':
        const ingredientsList = value.split('\n').filter(i => i.trim());
        return ingredientsList.length < 2 ? 'Please add at least 2 ingredients (one per line)' : '';
      case 'instructions':
        const instructionsList = value.split('\n').filter(i => i.trim());
        return instructionsList.length < 3 ? 'Please add at least 3 instruction steps (one per line)' : '';
      case 'prepTime':
      case 'cookTime':
        return !value.trim() ? 'This field is required' : '';
      case 'servings':
        return !value || value < 1 ? 'Servings must be at least 1' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      return;
    }

    // Process form data
    const newRecipe = {
      id: Date.now(),
      title: formData.title.trim(),
      summary: formData.summary.trim(),
      image: formData.image.trim() || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop',
      ingredients: formData.ingredients.split('\n').filter(i => i.trim()).map(i => i.trim()),
      instructions: formData.instructions.split('\n').filter(i => i.trim()).map(i => i.trim()),
      prepTime: formData.prepTime.trim(),
      cookTime: formData.cookTime.trim(),
      servings: parseInt(formData.servings)
    };

    onSubmit(newRecipe);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <button
            onClick={onCancel}
            className="flex items-center text-white hover:text-orange-100 mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Recipes
          </button>
          <h1 className="text-3xl font-bold">Add New Recipe</h1>
          <p className="text-orange-100 mt-2">Share your culinary creation with the community</p>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                  errors.title && touched.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Grandma's Apple Pie"
              />
              {errors.title && touched.title && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <X className="h-4 w-4 mr-1" />
                  {errors.title}
                </p>
              )}
            </div>

            {/* Summary */}
            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
                Short Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="2"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                  errors.summary && touched.summary ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Brief description of your recipe"
              />
              {errors.summary && touched.summary && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <X className="h-4 w-4 mr-1" />
                  {errors.summary}
                </p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Image URL (Optional)
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
              <p className="mt-1 text-sm text-gray-500">Leave blank for default image</p>
            </div>

            {/* Time and Servings */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="prepTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Prep Time *
                </label>
                <input
                  type="text"
                  id="prepTime"
                  name="prepTime"
                  value={formData.prepTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.prepTime && touched.prepTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., 15 mins"
                />
                {errors.prepTime && touched.prepTime && (
                  <p className="mt-1 text-xs text-red-600">{errors.prepTime}</p>
                )}
              </div>

              <div>
                <label htmlFor="cookTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Cook Time *
                </label>
                <input
                  type="text"
                  id="cookTime"
                  name="cookTime"
                  value={formData.cookTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.cookTime && touched.cookTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., 30 mins"
                />
                {errors.cookTime && touched.cookTime && (
                  <p className="mt-1 text-xs text-red-600">{errors.cookTime}</p>
                )}
              </div>

              <div>
                <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-2">
                  Servings *
                </label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  value={formData.servings}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min="1"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.servings && touched.servings ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="4"
                />
                {errors.servings && touched.servings && (
                  <p className="mt-1 text-xs text-red-600">{errors.servings}</p>
                )}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
                Ingredients * (one per line)
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="6"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-mono text-sm ${
                  errors.ingredients && touched.ingredients ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="2 cups all-purpose flour&#10;1 tsp baking powder&#10;1/2 cup sugar"
              />
              {errors.ingredients && touched.ingredients && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <X className="h-4 w-4 mr-1" />
                  {errors.ingredients}
                </p>
              )}
            </div>

            {/* Instructions */}
            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
                Cooking Instructions * (one step per line)
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="8"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-mono text-sm ${
                  errors.instructions && touched.instructions ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Preheat oven to 350°F&#10;Mix dry ingredients in a bowl&#10;Add wet ingredients and stir until combined"
              />
              {errors.instructions && touched.instructions && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <X className="h-4 w-4 mr-1" />
                  {errors.instructions}
                </p>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Main App Component
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