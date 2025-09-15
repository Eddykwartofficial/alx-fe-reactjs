import React from "react";

addRecipe: (recipe) =>
  Set((state) => ({
    recipe: [...state.recipe, recipe],
  }));

export default addRecipe;