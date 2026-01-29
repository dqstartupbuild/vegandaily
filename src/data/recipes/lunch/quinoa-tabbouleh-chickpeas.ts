import { Recipe } from '../../../types';

export const quinoaTabboulehChickpeas: Recipe = {
    id: 'quinoa-tabbouleh-chickpeas',
    name: 'Quinoa Tabbouleh + Chickpeas',
    description: 'A flavorful, plant-based lunch recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/lunch/quinoa-tabbouleh-chickpeas.webp'),
    mealType: 'lunch',
    prepTime: 15,
    cookTime: 0,
    servings: 3,
    difficulty: 'easy',
    ingredients: [
        { name: 'cooked quinoa', amount: 3, unit: 'cups' },
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'parsley', amount: 1, unit: 'item' },
        { name: 'mint', amount: 1, unit: 'item' },
        { name: 'diced cucumber', amount: 1, unit: 'item' },
        { name: 'tomato', amount: 1, unit: 'item' },
        { name: 'lemon juice', amount: 1, unit: 'item' },
        { name: 'olive oil', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Mix quinoa + chickpeas + chopped veggies/herbs.',
        'Dress with lemon + olive oil + salt/pepper.',
        'Chill 10 min to meld flavors.'
    ],
    tags: ["lunch","no-cook","quick","quinoa","chickpeas"],
    nutritionPerServing: {
        calories: 430,
        protein: 16,
        carbs: 62,
        fat: 14,
    },
};
