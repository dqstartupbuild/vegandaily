import { Recipe } from '../../../types';

export const breakfastBurritoBeansPotatoesSalsa: Recipe = {
    id: 'breakfast-burrito-beans-potatoes-salsa',
    name: 'Breakfast Burrito (Beans + Potatoes + Salsa)',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'breakfast',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'tortillas', amount: 2, unit: 'large' },
        { name: 'black beans', amount: 1, unit: 'cup' },
        { name: 'diced potatoes (microwave shortcut ok)', amount: 1.5, unit: 'cups' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
        { name: 'cumin/salt', amount: 1, unit: 'item' },
        { name: 'salsa', amount: 1, unit: 'item' },
        { name: 'spinach', amount: 1, unit: 'item', optional: true },
    ],
    instructions: [
        'Cook potatoes in a pan with oil + salt + cumin until browned (or microwave then pan-crisp).',
        'Warm beans with a splash of water + salt.',
        'Assemble tortillas with potatoes + beans + salsa (+ spinach). Roll. Serve and enjoy.'
    ],
    tags: ["breakfast","beans","potatoes"],
    nutritionPerServing: {
        calories: 560,
        protein: 18,
        carbs: 86,
        fat: 16,
    },
};
