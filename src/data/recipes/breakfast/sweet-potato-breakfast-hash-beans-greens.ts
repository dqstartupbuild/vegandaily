import { Recipe } from '../../../types';

export const sweetPotatoBreakfastHashBeansGreens: Recipe = {
    id: 'sweet-potato-breakfast-hash-beans-greens',
    name: 'Sweet Potato Breakfast Hash (Beans + Greens)',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/sweet-potato-breakfast-hash-beans-greens.png'),
    mealType: 'breakfast',
    prepTime: 10,
    cookTime: 18,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'sweet potato (diced)', amount: 1, unit: 'large' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'onion (diced)', amount: 0.5, unit: 'item' },
        { name: 'black beans (rinsed)', amount: 1, unit: 'cup' },
        { name: 'kale/spinach', amount: 2, unit: 'cups' },
        { name: 'smoked paprika', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion in oil 2 min; add sweet potato, spices, salt.',
        'Cover and cook 10-12 min, stirring occasionally.',
        'Add beans and greens; cook 3-4 min until wilted. Serve and enjoy.'
    ],
    tags: ["breakfast","beans","sweet-potato","potatoes"],
    nutritionPerServing: {
        calories: 420,
        protein: 14,
        carbs: 68,
        fat: 10,
    },
};
