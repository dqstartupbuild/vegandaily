import { Recipe } from '../../../types';

export const garlicNaan: Recipe = {
    id: 'garlic-naan',
    name: 'Vegan Garlic Naan',
    description: 'Fluffy homemade naan bread topped with savory garlic butter.',
    image: require('../../../../assets/recipes/bread/naan.webp'),
    mealType: 'bread',
    prepTime: 80, // Includes 1 hour rise
    cookTime: 15,
    servings: 6,
    difficulty: 'medium',
    ingredients: [
        { name: 'All-purpose flour', amount: 2, unit: 'cups' },
        { name: 'Instant yeast', amount: 1, unit: 'packet' },
        { name: 'Coconut sugar', amount: 2, unit: 'tsp' },
        { name: 'Salt', amount: 0.5, unit: 'tsp' },
        { name: 'Warm water', amount: 0.75, unit: 'cup' },
        { name: 'Vegan yogurt', amount: 4, unit: 'tbs' },
        { name: 'Olive oil', amount: 2, unit: 'tsp' },
        { name: 'Vegan butter', amount: 3, unit: 'tbs' },
        { name: 'Garlic clove', amount: 1, unit: 'clove' },
        { name: 'Parsley', amount: 1, unit: 'tsp' },
    ],
    instructions: [
        'Mix flour, yeast, sugar, salt. Add warm water, yogurt, oil.',
        'Knead dough, fold over 4-5 times.',
        'Rise in warm place for 1 hour until doubled.',
        'Divide into 6 balls. Roll into ovals.',
        'Cook on hot cast iron skillet 2-3 mins per side until puffed.',
        'Melt butter, cook minced garlic until fragrant.',
        'Brush naan with garlic butter and sprinkle with parsley.',
    ],
    tags: ['bread', 'indian', 'naan', 'garlic'],
    nutritionPerServing: {
        calories: 260,
        protein: 6,
        carbs: 42,
        fat: 7,
    },
};
