import { Recipe } from '../../../types';

export const lentilShepherdSPieNoMeat: Recipe = {
    id: 'lentil-shepherd-s-pie-no-meat',
    name: 'Lentil Shepherd\'s Pie (No Meat)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 35,
    servings: 6,
    difficulty: 'hard',
    ingredients: [
        { name: 'Filling - cooked lentils', amount: 3, unit: 'cups' },
        { name: 'Filling - onion', amount: 1, unit: 'item' },
        { name: 'Filling - carrots', amount: 1, unit: 'item' },
        { name: 'Filling - peas', amount: 1, unit: 'item' },
        { name: 'Filling - garlic', amount: 1, unit: 'item' },
        { name: 'Filling - broth', amount: 1, unit: 'item' },
        { name: 'Filling - thyme. Topping: 2 lbs potatoes', amount: 1, unit: 'item' },
        { name: 'Filling - plant milk', amount: 1, unit: 'item' },
        { name: 'Filling - salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Boil potatoes until soft; mash with plant milk + salt.',
        'Saute onion/carrot 7 min; add garlic 30 sec.',
        'Add lentils, peas, thyme, splash broth; simmer 5 min.',
        'Put filling in dish, spread mash on top.',
        'Bake 400F 20 min (broil 2-3 min to brown if desired). Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","lentils"],
    nutritionPerServing: {
        calories: 460,
        protein: 20,
        carbs: 78,
        fat: 9,
    },
};
