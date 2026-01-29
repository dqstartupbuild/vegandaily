import { Recipe } from '../../../types';

export const appleCinnamonQuinoaBreakfastBowl: Recipe = {
    id: 'apple-cinnamon-quinoa-breakfast-bowl',
    name: 'Apple-Cinnamon Quinoa Breakfast Bowl',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: require('../../../../assets/recipes/breakfast/apple-cinnamon-quinoa-breakfast-bowl.webp'),
    mealType: 'breakfast',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: 'cooked quinoa', amount: 2, unit: 'cups' },
        { name: 'apple diced', amount: 1, unit: 'item' },
        { name: 'plant milk', amount: 1, unit: 'cup' },
        { name: 'cinnamon', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'raisins', amount: 1, unit: 'tbsp' },
        { name: 'almond butter', amount: 2, unit: 'tbsp', optional: true },
    ],
    instructions: [
        'Warm quinoa + milk + cinnamon + salt.',
        'Stir in apple + raisins; cook 3-4 min to soften.',
        'Top with almond butter if using. Serve and enjoy.'
    ],
    tags: ["breakfast","quick","bowl","quinoa"],
    nutritionPerServing: {
        calories: 410,
        protein: 10,
        carbs: 72,
        fat: 10,
    },
};
