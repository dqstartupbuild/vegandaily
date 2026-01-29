import { Recipe } from '../../../types';

export const mushroomSteakGarlicHerbPotatoes: Recipe = {
    id: 'mushroom-steak-garlic-herb-potatoes',
    name: 'Mushroom "Steak" + Garlic Herb Potatoes',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/mushroom-steak-garlic-herb-potatoes.webp'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'portobellos', amount: 2, unit: 'large' },
        { name: 'baby potatoes', amount: 1, unit: 'lb' },
        { name: 'olive oil', amount: 2, unit: 'tbsp' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'rosemary/thyme', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'balsamic splash', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Roast halved potatoes at 425F with oil, garlic, herbs, salt ~25 min.',
        'Pan-sear portobellos in a little oil 4-5 min/side; salt/pepper.',
        'Finish mushrooms with balsamic; serve with potatoes.'
    ],
    tags: ["dinner","potatoes"],
    nutritionPerServing: {
        calories: 520,
        protein: 10,
        carbs: 72,
        fat: 22,
    },
};
