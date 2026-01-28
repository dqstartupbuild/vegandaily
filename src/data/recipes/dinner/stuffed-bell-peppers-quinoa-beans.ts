import { Recipe } from '../../../types';

export const stuffedBellPeppersQuinoaBeans: Recipe = {
    id: 'stuffed-bell-peppers-quinoa-beans',
    name: 'Stuffed Bell Peppers (Quinoa + Beans)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/stuffed-bell-peppers-quinoa-beans.png'),
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'hard',
    ingredients: [
        { name: 'bell peppers', amount: 4, unit: 'item' },
        { name: 'cooked quinoa', amount: 2, unit: 'cups' },
        { name: 'black beans', amount: 1.5, unit: 'cups' },
        { name: 'corn', amount: 1, unit: 'item' },
        { name: 'diced tomatoes', amount: 1, unit: 'item' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'paprika', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'cilantro', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Heat oven to 375F. Cut tops off peppers; remove seeds.',
        'Mix quinoa, beans, corn, tomatoes, spices.',
        'Stuff peppers; bake 25-30 min until tender. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","quinoa","beans"],
    nutritionPerServing: {
        calories: 390,
        protein: 14,
        carbs: 62,
        fat: 10,
    },
};
