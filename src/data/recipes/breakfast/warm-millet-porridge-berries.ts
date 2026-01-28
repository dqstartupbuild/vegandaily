import { Recipe } from '../../../types';

export const warmMilletPorridgeBerries: Recipe = {
    id: 'warm-millet-porridge-berries',
    name: 'Warm Millet Porridge + Berries',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/breakfast/warm-millet-porridge-berries.png'),
    mealType: 'breakfast',
    prepTime: 5,
    cookTime: 20,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'millet', amount: 0.5, unit: 'cup' },
        { name: 'water', amount: 1.5, unit: 'cups' },
        { name: 'plant milk', amount: 1, unit: 'cup' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'maple', amount: 1, unit: 'tbsp' },
        { name: 'berries', amount: 1, unit: 'cup' },
        { name: 'pumpkin seeds', amount: 2, unit: 'tbsp' },
    ],
    instructions: [
        'Rinse millet. Simmer millet + water + salt 15 min.',
        'Add milk; cook 5 min more until creamy.',
        'Sweeten; top with berries + seeds. Serve and enjoy.'
    ],
    tags: ["breakfast"],
    nutritionPerServing: {
        calories: 360,
        protein: 9,
        carbs: 62,
        fat: 9,
    },
};
