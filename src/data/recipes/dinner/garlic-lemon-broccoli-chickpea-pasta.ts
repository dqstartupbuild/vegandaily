import { Recipe } from '../../../types';

export const garlicLemonBroccoliChickpeaPasta: Recipe = {
    id: 'garlic-lemon-broccoli-chickpea-pasta',
    name: 'Garlic Lemon Broccoli + Chickpea Pasta',
    description: 'A comforting pasta dish with bold, plant-forward flavors and a silky sauce.',
    image: require('../../../../assets/recipes/dinner/garlic-lemon-broccoli-chickpea-pasta.webp'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'pasta', amount: 12, unit: 'oz' },
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'broccoli florets', amount: 3, unit: 'cups' },
        { name: 'garlic cloves', amount: 3, unit: 'item' },
        { name: 'olive oil', amount: 2, unit: 'tbsp' },
        { name: 'lemon zest/juice', amount: 1, unit: 'item' },
        { name: 'chili flakes', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Boil pasta; add broccoli last 3 min. Reserve 1 cup pasta water.',
        'Saute garlic in oil 30 sec; add chickpeas + chili flakes 2-3 min.',
        'Toss in pasta + broccoli + lemon + zest, adding pasta water for sauce. Season. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","pasta","chickpeas"],
    nutritionPerServing: {
        calories: 540,
        protein: 20,
        carbs: 84,
        fat: 12,
    },
};
