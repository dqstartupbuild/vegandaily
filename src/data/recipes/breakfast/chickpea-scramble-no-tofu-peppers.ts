import { Recipe } from '../../../types';

export const chickpeaScrambleNoTofuPeppers: Recipe = {
    id: 'chickpea-scramble-no-tofu-peppers',
    name: 'Chickpea "Scramble" (No Tofu) + Peppers',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/breakfast/chickpea-scramble-peppers.png'),
    mealType: 'breakfast',
    prepTime: 8,
    cookTime: 10,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'chickpeas (rinsed)', amount: 1, unit: 'can' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'onion diced', amount: 0.5, unit: 'item' },
        { name: 'bell pepper diced', amount: 1, unit: 'item' },
        { name: 'turmeric', amount: 1, unit: 'tsp' },
        { name: 'smoked paprika', amount: 0.5, unit: 'tsp' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'plant milk or water', amount: 2, unit: 'tbsp' },
    ],
    instructions: [
        'Mash chickpeas lightly (leave texture).',
        'Saute onion + pepper in oil 4-5 min.',
        'Add chickpeas + spices + splash milk/water; cook 3-4 min, stirring.',
        'Taste, adjust salt/pepper. Serve and enjoy.'
    ],
    tags: ["breakfast","chickpeas"],
    nutritionPerServing: {
        calories: 330,
        protein: 14,
        carbs: 44,
        fat: 12,
    },
};
