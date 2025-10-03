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