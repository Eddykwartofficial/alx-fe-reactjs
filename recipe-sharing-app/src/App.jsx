import { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import addRecipe from "./components/addRecipe";
import updateRecipe from "./components/updateRecipe";
import deleteRecipe from "./components/deleteRecipe";
import EditRecipeForm from "./components/EditRecipeForm";
import { BrowserRouter, Route, Routes, router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <router>
      <Routes>
        {" "}
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        <Route path="/recipes/:id/" element={<FavoritesList />} />
        <Route path="/recipes/:id/" element={<RecommendationsList />} />
      </Routes>
    </router>
  );
}

export default App;