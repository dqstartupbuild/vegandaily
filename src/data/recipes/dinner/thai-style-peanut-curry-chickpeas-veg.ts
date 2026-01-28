import { Recipe } from '../../../types';

export const thaiStylePeanutCurryChickpeasVeg: Recipe = {
    id: 'thai-style-peanut-curry-chickpeas-veg',
    name: 'Thai-Style Peanut Curry (Chickpeas + Veg)',
    description: 'A fragrant, creamy curry built for weeknight comfort.',
    image: require('../../../../assets/recipes/dinner/thai-peanut-chickpea-curry.png'),
    mealType: 'dinner',
    prepTime: 12,
    cookTime: 20,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'chickpeas', amount: 2, unit: 'cans' },
        { name: 'coconut milk', amount: 1, unit: 'can' },
        { name: 'red curry paste (check vegan)', amount: 2, unit: 'tbsp' },
        { name: 'peanut butter', amount: 2, unit: 'tbsp' },
        { name: 'broccoli', amount: 1, unit: 'item' },
        { name: 'carrots', amount: 1, unit: 'item' },
        { name: 'lime', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Simmer coconut milk + curry paste 3 min.',
        'Whisk in peanut butter until smooth.',
        'Add veggies + chickpeas; simmer 12-15 min.',
        'Finish with lime. Serve with rice if desired.'
    ],
    tags: ["dinner","meal-prep","curry","chickpeas"],
    nutritionPerServing: {
        calories: 470,
        protein: 15,
        carbs: 48,
        fat: 24,
    },
};
