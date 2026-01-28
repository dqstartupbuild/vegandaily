import { Recipe } from '../../../types';

export const jamaicanStyleCabbageBeansOverRice: Recipe = {
    id: 'jamaican-style-cabbage-beans-over-rice',
    name: 'Jamaican-Style Cabbage + Beans (Over Rice)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 18,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'cabbage shredded', amount: 1, unit: 'small' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'carrots', amount: 2, unit: 'item' },
        { name: 'kidney beans', amount: 2, unit: 'cups' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
        { name: 'thyme', amount: 1, unit: 'item' },
        { name: 'allspice pinch', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'cooked rice', amount: 3, unit: 'cups' },
    ],
    instructions: [
        'Saute onion/carrot 5 min; add cabbage + thyme + salt.',
        'Cook 8-10 min until tender-crisp.',
        'Add beans; warm 3 min. Season with allspice pinch.',
        'Serve over rice.'
    ],
    tags: ["dinner","meal-prep","rice","beans"],
    nutritionPerServing: {
        calories: 480,
        protein: 16,
        carbs: 80,
        fat: 10,
    },
};
