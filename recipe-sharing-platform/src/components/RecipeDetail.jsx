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

