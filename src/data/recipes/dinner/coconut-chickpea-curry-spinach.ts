import { Recipe } from '../../../types';

export const coconutChickpeaCurrySpinach: Recipe = {
    id: 'coconut-chickpea-curry-spinach',
    name: 'Coconut Chickpea Curry (Spinach)',
    description: 'A fragrant, creamy curry built for weeknight comfort.',
    image: require('../../../../assets/recipes/coconut-chickpea-curry-spinach.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'chickpeas', amount: 2, unit: 'cans' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'garlic cloves', amount: 3, unit: 'item' },
        { name: 'curry powder', amount: 1, unit: 'tbsp' },
        { name: 'coconut milk (light or regular)', amount: 1, unit: 'can' },
        { name: 'diced tomatoes', amount: 1, unit: 'can' },
        { name: 'spinach', amount: 3, unit: 'cups' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'lime', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion 5 min; add garlic + curry powder 30 sec.',
        'Add tomatoes, coconut milk, chickpeas; simmer 12-15 min.',
        'Stir in spinach to wilt; finish with lime. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","curry","chickpeas"],
    nutritionPerServing: {
        calories: 420,
        protein: 14,
        carbs: 46,
        fat: 20,
    },
};
