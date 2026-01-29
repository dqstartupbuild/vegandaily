import { Recipe } from '../../../types';

export const peanutButterChocolateBarkFreezer: Recipe = {
    id: 'peanut-butter-chocolate-bark-freezer',
    name: 'Peanut Butter Chocolate Bark (Freezer)',
    description: 'A grab-and-go bar that\'s chewy, sweet, and satisfying.',
    image: require('../../../../assets/recipes/dessert/peanut-butter-chocolate-bark-freezer.webp'),
    mealType: 'dessert',
    prepTime: 10,
    cookTime: 0,
    servings: 12,
    difficulty: 'easy',
    ingredients: [
        { name: 'peanut butter', amount: 0.5, unit: 'cup' },
        { name: 'cocoa', amount: 0.25, unit: 'cup' },
        { name: 'maple', amount: 3, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'chopped nuts', amount: 1, unit: 'item', optional: true },
    ],
    instructions: [
        'Stir PB, cocoa, maple, salt until smooth.',
        'Spread on parchment-lined tray; sprinkle nuts.',
        'Freeze 30-45 min; break into pieces. Serve and enjoy.'
    ],
    tags: ["dessert","no-cook","quick","meal-prep","bars"],
    nutritionPerServing: {
        calories: 140,
        protein: 4,
        carbs: 10,
        fat: 10,
    },
};
