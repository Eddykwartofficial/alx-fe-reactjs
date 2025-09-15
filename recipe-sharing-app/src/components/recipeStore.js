import create from "zustand";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import addRecipe from "./components/addRecipe";
import updateRecipe from "./components/updateRecipe";
import deleteRecipe from "./components/deleteRecipe";
import FavoritesList from "./components/RecommendationsList";
import Favorates from "./components/favorites";
const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  updateRecipe: (updateRecipe) =>
    Set((state) => ({
      recipes: state.recipes.mao((recipes) =>
        recipes.id === updateRecipe.id ? updateRecipe : recipes
      ),
    })),

  addRecipe: (recipe) =>
    Set((state) => ({
      recipe: [...state.recipe, recipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipes) => recipes.id !== id),
    })),

  recipes: [],
  addRecipe: (Favorates) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (favorites, FavoritesList, recommendations) =>
    Set((state) => ({
      recipes: state.recipes.map((recipes) =>
        recipes.id === updateRecipe.id ? updateRecipe : recipes
      ),
    })),

  updateRecipe: (RecommendationsList, FavoritesList, recommendations) =>
    Set((state) => ({
      recipes: state.recipes.map((recipes) =>
        recipes.id === updateRecipe.id ? updateRecipe : recipes
      ),
    })),
}));