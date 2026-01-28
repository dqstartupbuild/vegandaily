import { Recipe } from '../../../types';

export const roastedVeggieLentilSausageFreeBake: Recipe = {
    id: 'roasted-veggie-lentil-sausage-free-bake',
    name: 'Roasted Veggie Lentil "Sausage-Free" Bake',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 30,
    servings: 5,
    difficulty: 'hard',
    ingredients: [
        { name: 'cooked lentils', amount: 3, unit: 'cups' },
        { name: 'marinara', amount: 2, unit: 'cups' },
        { name: 'zucchini', amount: 1, unit: 'item' },
        { name: 'bell pepper', amount: 1, unit: 'item' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'spinach', amount: 2, unit: 'cups' },
        { name: 'pasta or serve over potatoes', amount: 12, unit: 'oz', optional: true },
    ],
    instructions: [
        'Roast chopped zucchini/pepper/onion at 425F 20 min.',
        'Mix lentils + marinara + roasted veg + spinach in baking dish.',
        'Bake 400F 10-15 min until bubbly. Serve as-is or over cooked pasta.'
    ],
    tags: ["dinner","meal-prep","lentils","baked"],
    nutritionPerServing: {
        calories: 460,
        protein: 20,
        carbs: 72,
        fat: 12,
    },
};
