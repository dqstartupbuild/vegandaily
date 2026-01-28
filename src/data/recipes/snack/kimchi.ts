import { Recipe } from '../../../types';

export const kimchi: Recipe = {
    id: 'kimchi',
    name: 'Homemade Vegan Kimchi',
    description: 'A spicy, tangy, probiotic-rich Korean staple made without fish sauce.',
    image: require('../../../../assets/recipes/kimchi.png'),
    mealType: 'snack',
    prepTime: 45, // Plus 2 days fermenting
    cookTime: 0,
    servings: 20, // Jar servings
    difficulty: 'medium',
    ingredients: [
        { name: 'Napa Cabbage', amount: 1, unit: 'head' },
        { name: 'Salt', amount: 3, unit: 'tbs' }, // Estimated
        { name: 'Carrots', amount: 2, unit: 'medium' },
        { name: 'Green onions', amount: 5, unit: 'medium' },
        { name: 'Sweet Apple', amount: 1, unit: 'large' },
        { name: 'Garlic cloves', amount: 6, unit: 'cloves' },
        { name: 'Ginger', amount: 1, unit: 'thumb' },
        { name: 'Soy sauce', amount: 0.25, unit: 'cup' },
        { name: 'Miso paste', amount: 1, unit: 'tbs' },
        { name: 'Gochugaru (Korean chili flakes)', amount: 0.25, unit: 'cup' },
    ],
    instructions: [
        'Cut cabbage into 1-2 inch pieces. Wash thoroughly.',
        'Massage with salt and let sit for 2 hours until bendy. Rinse well and drain.',
        'Blend apple, garlic, ginger into a paste.',
        'Mix paste with soy sauce, miso, and gochugaru.',
        'Combine cabbage, julienned carrots, chopped green onions, and paste/sauce.',
        'Pack tightly into a sterilized jar, leaving 2 inches headspace.',
        'Ferment at room temp for 2 days, burping gas occasionally.',
        'Move to fridge.',
    ],
    tags: ['snack', 'fermented', 'korean', 'probiotic', 'side'],
    nutritionPerServing: {
        calories: 25,
        protein: 1,
        carbs: 4,
        fat: 0,
    },
};
