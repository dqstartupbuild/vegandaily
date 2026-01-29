import { Recipe } from '../../../types';

export const zucchiniBoatsWithLentilMarinara: Recipe = {
    id: 'zucchini-boats-with-lentil-marinara',
    name: 'Zucchini Boats with Lentil Marinara',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/zucchini-boats-with-lentil-marinara.png'),
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 25,
    servings: 3,
    difficulty: 'hard',
    ingredients: [
        { name: 'zucchinis halved', amount: 3, unit: 'item' },
        { name: 'cooked lentils', amount: 2, unit: 'cups' },
        { name: 'marinara', amount: 2, unit: 'cups' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'Italian seasoning', amount: 1, unit: 'item' },
        { name: 'breadcrumbs (or crushed nuts)', amount: 1, unit: 'item', optional: true },
    ],
    instructions: [
        'Heat oven 400F. Scoop a little zucchini center to make boats.',
        'Warm marinara + lentils + seasoning 5 min.',
        'Fill boats; top crumbs if using.',
        'Bake 20-25 min until zucchini tender. Serve and enjoy.'
    ],
    tags: ["dinner","oats","lentils"],
    nutritionPerServing: {
        calories: 340,
        protein: 18,
        carbs: 50,
        fat: 8,
    },
};
