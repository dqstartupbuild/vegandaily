import { Recipe } from '../../../types';

export const speltTortillas: Recipe = {
    id: 'spelt-tortillas',
    name: 'Homemade Spelt Tortillas',
    description: 'Simple, wholesome tortillas made with spelt flour.',
    image: require('../../../../assets/recipes/spelt-tortillas.png'),
    mealType: 'bread',
    prepTime: 20,
    cookTime: 10,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'White spelt flour', amount: 1, unit: 'cup' },
        { name: 'Distilled water (cold)', amount: 0.33, unit: 'cup' },
        { name: 'Sea salt', amount: 1, unit: 'pinch' },
        { name: 'Avocado oil', amount: 1, unit: 'tbs' }, // Estimated for coating
    ],
    instructions: [
        'Sift flour to remove clumps.',
        'Slowly add cold water while kneading into a ball.',
        'Adjust consistency with small amounts of flour or water if needed.',
        'Divide into small balls. Roll out on flour-dusted parchment paper into circles.',
        'Heat cast iron skillet with avocado oil on high heat.',
        'Cook each tortilla for 1-2 minutes per side.',
    ],
    tags: ['bread', 'spelt', 'tortillas', 'staple'],
    nutritionPerServing: {
        calories: 130,
        protein: 4,
        carbs: 22,
        fat: 3,
    },
};
