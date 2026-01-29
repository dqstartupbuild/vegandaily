import { Recipe } from '../../../types';

export const roastedBeetOrangeWalnutSalad: Recipe = {
    id: 'roasted-beet-orange-walnut-salad',
    name: 'Roasted Beet + Orange + Walnut Salad',
    description: 'A fresh, colorful salad with bright flavors and a satisfying crunch.',
    image: require('../../../../assets/recipes/lunch/roasted-beet-orange-walnut-salad.webp'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 45,
    servings: 2,
    difficulty: 'hard',
    ingredients: [
        { name: 'beets', amount: 3, unit: 'medium' },
        { name: 'oranges', amount: 2, unit: 'item' },
        { name: 'arugula/spinach', amount: 4, unit: 'cups' },
        { name: 'walnuts', amount: 0.3333333333333333, unit: 'cup' },
        { name: 'olive oil', amount: 2, unit: 'tbsp' },
        { name: 'balsamic', amount: 1, unit: 'tbsp' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Roast beets at 400F: wrap in foil, bake 40-60 min until fork-tender. Cool, peel, cube.',
        'Peel oranges; slice into rounds.',
        'Toss greens with olive oil + balsamic + salt/pepper.',
        'Top with beets, oranges, walnuts. Serve and enjoy.'
    ],
    tags: ["lunch","salad"],
    nutritionPerServing: {
        calories: 430,
        protein: 9,
        carbs: 46,
        fat: 24,
    },
};
