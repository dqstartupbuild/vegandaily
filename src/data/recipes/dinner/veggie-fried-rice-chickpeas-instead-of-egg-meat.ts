import { Recipe } from '../../../types';

export const veggieFriedRiceChickpeasInsteadOfEggMeat: Recipe = {
    id: 'veggie-fried-rice-chickpeas-instead-of-egg-meat',
    name: 'Veggie Fried Rice (Chickpeas Instead of Egg/Meat)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/veggie-fried-rice-chickpeas.webp'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 12,
    servings: 3,
    difficulty: 'medium',
    ingredients: [
        { name: 'cooked cold rice', amount: 4, unit: 'cups' },
        { name: 'chickpeas', amount: 1, unit: 'cup' },
        { name: 'mixed veggies (peas/carrots/corn)', amount: 1, unit: 'item' },
        { name: 'scallions', amount: 1, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'ginger', amount: 1, unit: 'item' },
        { name: 'soy sauce/tamari', amount: 1, unit: 'item' },
        { name: 'sesame oil', amount: 1, unit: 'item', optional: true },
    ],
    instructions: [
        'Saute garlic/ginger 30 sec; add veggies 3-4 min.',
        'Add chickpeas; heat through.',
        'Add rice; stir-fry 4-5 min.',
        'Season with soy sauce; finish with scallions. Serve and enjoy.'
    ],
    tags: ["dinner","rice","chickpeas"],
    nutritionPerServing: {
        calories: 470,
        protein: 16,
        carbs: 72,
        fat: 12,
    },
};
