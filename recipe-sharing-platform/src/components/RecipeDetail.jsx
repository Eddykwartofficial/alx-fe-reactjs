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
