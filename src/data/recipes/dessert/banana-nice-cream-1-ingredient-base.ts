import { Recipe } from '../../../types';

export const bananaNiceCream1IngredientBase: Recipe = {
    id: 'banana-nice-cream-1-ingredient-base',
    name: 'Banana "Nice Cream" (1-Ingredient Base)',
    description: 'A flavorful, plant-based dessert recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dessert/banana-nice-cream-1-ingredient-base.png'),
    mealType: 'dessert',
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: 'frozen bananas', amount: 3, unit: 'item' },
        { name: 'cocoa/vanilla/peanut butter', amount: 1, unit: 'item', optional: true },
    ],
    instructions: [
        'Blend frozen bananas until creamy (scrape often).',
        'Add cocoa or PB if you want.',
        'Serve immediately or freeze 30 min for firmer scoops.'
    ],
    tags: ["dessert","no-cook","quick"],
    nutritionPerServing: {
        calories: 160,
        protein: 2,
        carbs: 40,
        fat: 0,
    },
};
