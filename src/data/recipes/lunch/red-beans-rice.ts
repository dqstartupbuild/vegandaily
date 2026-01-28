import { Recipe } from '../../../types';

export const redBeansRice: Recipe = {
    id: 'red-beans-rice',
    name: 'New Orleans Red Beans and Rice',
    description: 'Hearty, slow-simmered kidney beans with Cajun spices and red beans.',
    image: require('../../../../assets/recipes/lunch/red-beans-rice.png'),
    mealType: 'lunch', // Can be dinner too
    prepTime: 20, // Plus overnight soak
    cookTime: 120, // 2 hours
    servings: 6,
    difficulty: 'medium',
    ingredients: [
        { name: 'Kidney beans (dry)', amount: 1, unit: 'lb' },
        { name: 'Vegetable broth', amount: 32, unit: 'oz' },
        { name: 'Yellow onion', amount: 1, unit: 'medium' },
        { name: 'Red bell pepper', amount: 1, unit: 'medium' },
        { name: 'Green bell pepper', amount: 1, unit: 'medium' },
        { name: 'Celery', amount: 2, unit: 'ribs' },
        { name: 'Garlic', amount: 6, unit: 'cloves' },
        { name: 'Creole seasoning', amount: 1, unit: 'tbs' },
        { name: 'Liquid smoke', amount: 0.5, unit: 'tsp' },
        { name: 'Cooked white rice', amount: 4, unit: 'cups' },
    ],
    instructions: [
        'Soak beans overnight. Drain.',
        'Chop peppers, onion, celery ("holy trinity"). Mince garlic.',
        'Combine beans, broth, veggies, and all spices in a large pot.',
        'Boil, then cover and simmer on low for 1.5 - 2 hours until tender.',
        'Remove bay leaves.',
        'Serve over white rice.',
    ],
    tags: ['lunch', 'dinner', 'cajun', 'meal-prep', 'budget'],
    nutritionPerServing: {
        calories: 430,
        protein: 18,
        carbs: 72,
        fat: 4,
    },
};
