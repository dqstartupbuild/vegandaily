import { Recipe } from '../../../types';

export const lemonDillWhiteBeanCucumberSalad: Recipe = {
    id: 'lemon-dill-white-bean-cucumber-salad',
    name: 'Lemon Dill White Bean Cucumber Salad',
    description: 'A fresh, colorful salad with bright flavors and a satisfying crunch.',
    image: require('../../../../assets/recipes/lunch/lemon-dill-white-bean-cucumber-salad.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 0,
    servings: 3,
    difficulty: 'easy',
    ingredients: [
        { name: 'white beans (rinsed)', amount: 2, unit: 'cans' },
        { name: 'cucumber diced', amount: 1, unit: 'item' },
        { name: 'red onion thin-sliced', amount: 0.5, unit: 'item' },
        { name: 'dill', amount: 1, unit: 'item' },
        { name: 'lemon juice', amount: 1, unit: 'item' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Mix beans + cucumber + onion + dill.',
        'Dress with lemon, olive oil, salt/pepper.',
        'Chill 15 min for best flavor.'
    ],
    tags: ["lunch","no-cook","quick","salad","beans"],
    nutritionPerServing: {
        calories: 320,
        protein: 14,
        carbs: 42,
        fat: 12,
    },
};
