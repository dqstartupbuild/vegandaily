import { Recipe } from '../../../types';

export const pearAlmondButterToastWithHemp: Recipe = {
    id: 'pear-almond-butter-toast-with-hemp',
    name: 'Pear + Almond Butter Toast with Hemp',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/breakfast/pear-almond-butter-toast-hemp.png'),
    mealType: 'breakfast',
    prepTime: 6,
    cookTime: 3,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'whole-grain bread', amount: 2, unit: 'slices' },
        { name: 'almond butter', amount: 2, unit: 'tbsp' },
        { name: 'pear sliced', amount: 1, unit: 'item' },
        { name: 'hemp hearts', amount: 1, unit: 'tbsp' },
        { name: 'cinnamon', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Toast bread.',
        'Spread almond butter, top pear slices.',
        'Sprinkle hemp + cinnamon. Serve and enjoy.'
    ],
    tags: ["breakfast","quick"],
    nutritionPerServing: {
        calories: 420,
        protein: 12,
        carbs: 52,
        fat: 18,
    },
};
