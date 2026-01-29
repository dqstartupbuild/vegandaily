import { Recipe } from '../../../types';

export const oatmealCarrotCakeBowl: Recipe = {
    id: 'oatmeal-carrot-cake-bowl',
    name: 'Oatmeal Carrot Cake Bowl',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: require('../../../../assets/recipes/breakfast/oatmeal-carrot-cake-bowl.webp'),
    mealType: 'breakfast',
    prepTime: 6,
    cookTime: 6,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'oats', amount: 0.5, unit: 'cup' },
        { name: 'plant milk', amount: 1, unit: 'cup' },
        { name: 'grated carrot', amount: 0.5, unit: 'cup' },
        { name: 'raisins', amount: 1, unit: 'tbsp' },
        { name: 'walnuts', amount: 1, unit: 'tbsp' },
        { name: 'ground flax', amount: 1, unit: 'tbsp' },
        { name: 'cinnamon', amount: 0.5, unit: 'tsp' },
        { name: 'nutmeg', amount: 1, unit: 'pinch' },
        { name: 'maple to taste', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Cook oats + milk + spices 4-5 min.',
        'Stir in carrot, flax, raisins; cook 1-2 min.',
        'Top with walnuts and drizzle maple. Serve and enjoy.'
    ],
    tags: ["breakfast","quick","bowl","oats"],
    nutritionPerServing: {
        calories: 460,
        protein: 12,
        carbs: 72,
        fat: 15,
    },
};
