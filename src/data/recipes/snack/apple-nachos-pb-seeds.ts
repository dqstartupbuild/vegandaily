import { Recipe } from '../../../types';

export const appleNachosPbSeeds: Recipe = {
    id: 'apple-nachos-pb-seeds',
    name: 'Apple Nachos (PB + Seeds)',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/snack/apple-nachos-pb-seeds.png'),
    mealType: 'snack',
    prepTime: 7,
    cookTime: 0,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: 'apple sliced', amount: 1, unit: 'large' },
        { name: 'peanut butter', amount: 2, unit: 'tbsp' },
        { name: 'pumpkin seeds', amount: 1, unit: 'tbsp' },
        { name: 'cinnamon', amount: 1, unit: 'item' },
        { name: 'raisins', amount: 1, unit: 'item', optional: true },
    ],
    instructions: [
        'Arrange apple slices.',
        'Drizzle peanut butter (thin with a splash of warm water if needed).',
        'Sprinkle seeds + cinnamon (+ raisins). Serve and enjoy.'
    ],
    tags: ["snack","no-cook","quick"],
    nutritionPerServing: {
        calories: 320,
        protein: 9,
        carbs: 38,
        fat: 16,
    },
};
