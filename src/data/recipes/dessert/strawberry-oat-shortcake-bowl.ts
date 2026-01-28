import { Recipe } from '../../../types';

export const strawberryOatShortcakeBowl: Recipe = {
    id: 'strawberry-oat-shortcake-bowl',
    name: 'Strawberry Oat "Shortcake" Bowl',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: require('../../../../assets/recipes/dessert/strawberry-oat-shortcake-bowl.png'),
    mealType: 'dessert',
    prepTime: 10,
    cookTime: 6,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'strawberries', amount: 2, unit: 'cups' },
        { name: 'maple', amount: 1, unit: 'tbsp' },
        { name: 'oats', amount: 1, unit: 'cup' },
        { name: 'plant yogurt (unsweetened)', amount: 1, unit: 'cup' },
        { name: 'vanilla', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'pinch' },
    ],
    instructions: [
        'Macerate strawberries with maple 5 min.',
        'Toast oats in dry skillet 3-5 min with pinch salt (optional).',
        'Layer yogurt, strawberries, toasted oats; add vanilla. Serve and enjoy.'
    ],
    tags: ["dessert","bowl","oats"],
    nutritionPerServing: {
        calories: 340,
        protein: 8,
        carbs: 60,
        fat: 8,
    },
};
