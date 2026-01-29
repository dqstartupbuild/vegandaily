import { Recipe } from '../../../types';

export const smokyCornBlackBeanRiceSalad: Recipe = {
    id: 'smoky-corn-black-bean-rice-salad',
    name: 'Smoky Corn + Black Bean Rice Salad',
    description: 'A fresh, colorful salad with bright flavors and a satisfying crunch.',
    image: require('../../../../assets/recipes/lunch/smoky-corn-black-bean-rice-salad.webp'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 0,
    servings: 3,
    difficulty: 'easy',
    ingredients: [
        { name: 'cooked rice', amount: 3, unit: 'cups' },
        { name: 'black beans', amount: 1, unit: 'can' },
        { name: 'corn', amount: 1, unit: 'cup' },
        { name: 'bell pepper', amount: 1, unit: 'item' },
        { name: 'cilantro', amount: 1, unit: 'item' },
        { name: 'lime', amount: 1, unit: 'item' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'smoked paprika', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Mix rice, beans, corn, chopped pepper, cilantro.',
        'Dress with lime + olive oil + paprika + salt.',
        'Chill or eat right away.'
    ],
    tags: ["lunch","no-cook","quick","salad","rice","beans"],
    nutritionPerServing: {
        calories: 520,
        protein: 16,
        carbs: 86,
        fat: 12,
    },
};
