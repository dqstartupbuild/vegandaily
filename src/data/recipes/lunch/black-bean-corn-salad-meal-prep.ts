import { Recipe } from '../../../types';

export const blackBeanCornSaladMealPrep: Recipe = {
    id: 'black-bean-corn-salad-meal-prep',
    name: 'Black Bean Corn Salad (Meal Prep)',
    description: 'A fresh, colorful salad with bright flavors and a satisfying crunch.',
    image: require('../../../../assets/recipes/lunch/black-bean-corn-salad-meal-prep.webp'),
    mealType: 'lunch',
    prepTime: 12,
    cookTime: 0,
    servings: 3,
    difficulty: 'easy',
    ingredients: [
        { name: 'black beans', amount: 2, unit: 'cups' },
        { name: 'corn', amount: 1, unit: 'cup' },
        { name: 'bell pepper', amount: 1, unit: 'item' },
        { name: 'red onion', amount: 0.5, unit: 'item' },
        { name: 'cilantro', amount: 1, unit: 'item' },
        { name: 'lime juice', amount: 1, unit: 'item' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Mix everything in a bowl.',
        'Taste and adjust salt/lime.',
        'Chill 20 min for best flavor.'
    ],
    tags: ["lunch","no-cook","quick","salad","beans"],
    nutritionPerServing: {
        calories: 360,
        protein: 14,
        carbs: 58,
        fat: 9,
    },
};
