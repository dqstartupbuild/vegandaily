import { Recipe } from '../../../types';

export const mediterraneanChickpeaSaladWraps: Recipe = {
    id: 'mediterranean-chickpea-salad-wraps',
    name: 'Mediterranean Chickpea Salad Wraps',
    description: 'A fresh, colorful salad with bright flavors and a satisfying crunch.',
    image: require('../../../../assets/recipes/lunch/mediterranean-chickpea-salad-wraps.png'),
    mealType: 'lunch',
    prepTime: 12,
    cookTime: 0,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: 'chickpeas (rinsed)', amount: 1, unit: 'can' },
        { name: 'tahini', amount: 2, unit: 'tbsp' },
        { name: 'lemon juice', amount: 1, unit: 'item' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'dill/parsley', amount: 1, unit: 'item' },
        { name: 'diced cucumber', amount: 1, unit: 'item' },
        { name: 'tomato', amount: 1, unit: 'item' },
        { name: 'red onion', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'whole-grain wraps', amount: 2, unit: 'large' },
    ],
    instructions: [
        'Mash chickpeas slightly.',
        'Mix tahini, lemon, oil, herbs, salt/pepper; toss with chickpeas + veggies.',
        'Fill wraps and roll. Serve and enjoy.'
    ],
    tags: ["lunch","no-cook","quick","salad","wrap","chickpeas"],
    nutritionPerServing: {
        calories: 520,
        protein: 18,
        carbs: 70,
        fat: 18,
    },
};
