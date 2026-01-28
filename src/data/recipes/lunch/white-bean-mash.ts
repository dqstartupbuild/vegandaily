import { Recipe } from '../../../types';

export const whiteBeanMash: Recipe = {
    id: 'white-bean-mash',
    name: 'White Bean and Avocado Mash',
    description: 'Creamy high-protein mash grounded with white beans and topped with smoky mushrooms.',
    image: require('../../../../assets/recipes/lunch/white-bean-mash.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: 'Avocados', amount: 2, unit: 'medium' },
        { name: 'White beans (400g)', amount: 1, unit: 'can' },
        { name: 'Garlic', amount: 1, unit: 'clove' },
        { name: 'Coriander/Chives', amount: 1, unit: 'handful' },
        { name: 'Spinach', amount: 1, unit: 'handful' },
        { name: 'Mushrooms', amount: 1, unit: 'cup' },
        { name: 'Paprika', amount: 1, unit: 'tsp' },
    ],
    instructions: [
        'Mince garlic, chop herbs and spinach.',
        'Mash avocados with white beans, herbs, garlic, and lemon juice.',
        'Sauté mushrooms with paprika and salt until tender.',
        'Serve mushrooms over the green mash.',
    ],
    tags: ['lunch', 'high-protein', 'quick', 'avocado'],
    nutritionPerServing: {
        calories: 410,
        protein: 14,
        carbs: 36,
        fat: 22,
    },
};
