import { Recipe } from '../../../types';

export const tomatoBasilWhiteBeanToasts: Recipe = {
    id: 'tomato-basil-white-bean-toasts',
    name: 'Tomato Basil White Bean Toasts',
    description: 'A flavorful, plant-based lunch recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/tomato-basil-white-bean-toasts.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 3,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: 'whole-grain bread', amount: 4, unit: 'slices' },
        { name: 'white beans', amount: 1.5, unit: 'cups' },
        { name: 'lemon', amount: 1, unit: 'item' },
        { name: 'garlic powder', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'tomato slices', amount: 1, unit: 'item' },
        { name: 'basil', amount: 1, unit: 'item' },
        { name: 'olive oil drizzle', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Mash beans with lemon, garlic powder, salt.',
        'Toast bread; spread bean mash.',
        'Top with tomato, basil, olive oil. Serve and enjoy.'
    ],
    tags: ["lunch","quick","beans"],
    nutritionPerServing: {
        calories: 420,
        protein: 18,
        carbs: 62,
        fat: 10,
    },
};
