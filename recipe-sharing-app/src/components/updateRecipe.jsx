import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

updateRecipe: (updateRecipe) =>
  Set((state) => ({
    recipes: state.recipes.mao((recipes) =>
      recipes.id === updateRecipe.id ? updateRecipev : recipes
    ),
  }));
export default updateRecipe;