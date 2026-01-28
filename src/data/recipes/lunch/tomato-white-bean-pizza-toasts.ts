import { Recipe } from '../../../types';

export const tomatoWhiteBeanPizzaToasts: Recipe = {
    id: 'tomato-white-bean-pizza-toasts',
    name: 'Tomato White Bean "Pizza" Toasts',
    description: 'A flavorful, plant-based lunch recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 6,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'whole-grain bread', amount: 4, unit: 'slices' },
        { name: 'white beans', amount: 1.5, unit: 'cups' },
        { name: 'garlic powder', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'marinara', amount: 1, unit: 'cup' },
        { name: 'sliced tomatoes', amount: 1, unit: 'item' },
        { name: 'oregano', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Toast bread lightly.',
        'Mash beans with garlic powder + salt; spread on toast.',
        'Spoon marinara + tomatoes; sprinkle oregano.',
        'Bake/toast at 425F for 5-6 min until hot. Serve and enjoy.'
    ],
    tags: ["lunch","beans"],
    nutritionPerServing: {
        calories: 470,
        protein: 18,
        carbs: 70,
        fat: 12,
    },
};
