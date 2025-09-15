import React from "react";

const deleteRecipe = delete ((set) => ({
  recipes: [],
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipes) => recipes.id !== id),
    })),
}));
export default deleteRecipe;