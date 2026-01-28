import { Recipe } from '../../../types';

export const chickpeaFlourOmeletNoEggVeggies: Recipe = {
    id: 'chickpea-flour-omelet-no-egg-veggies',
    name: 'Chickpea Flour "Omelet" (No Egg) + Veggies',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'breakfast',
    prepTime: 10,
    cookTime: 10,
    servings: 1,
    difficulty: 'medium',
    ingredients: [
        { name: 'chickpea flour', amount: 0.5, unit: 'cup' },
        { name: 'water', amount: 0.5, unit: 'cup' },
        { name: 'olive oil', amount: 1, unit: 'tsp' },
        { name: 'turmeric', amount: 0.25, unit: 'tsp' },
        { name: 'garlic powder', amount: 0.5, unit: 'tsp' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'chopped spinach', amount: 0.5, unit: 'cup' },
        { name: 'diced bell pepper', amount: 0.25, unit: 'cup' },
        { name: 'chopped onion', amount: 2, unit: 'tbsp' },
    ],
    instructions: [
        'Whisk chickpea flour, water, spices, salt/pepper until smooth.',
        'Mix in spinach, pepper, onion.',
        'Heat oil in nonstick pan; pour batter, spread thin.',
        'Cook 4-5 min, flip, cook 3-4 min. Fold and serve.'
    ],
    tags: ["breakfast","chickpeas"],
    nutritionPerServing: {
        calories: 360,
        protein: 16,
        carbs: 45,
        fat: 12,
    },
};
