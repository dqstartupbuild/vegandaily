import { Recipe } from '../../../types';

export const roastedVegLentilSaladLemonMustard: Recipe = {
    id: 'roasted-veg-lentil-salad-lemon-mustard',
    name: 'Roasted Veg + Lentil Salad (Lemon Mustard)',
    description: 'A fresh, colorful salad with bright flavors and a satisfying crunch.',
    image: require('../../../../assets/recipes/lunch/roasted-veg-lentil-salad-lemon-mustard.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    difficulty: 'medium',
    ingredients: [
        { name: 'cooked lentils', amount: 3, unit: 'cups' },
        { name: 'zucchini', amount: 1, unit: 'item' },
        { name: 'bell pepper', amount: 1, unit: 'item' },
        { name: 'red onion', amount: 1, unit: 'item' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'Dressing - lemon', amount: 2, unit: 'tbsp' },
        { name: 'Dressing - mustard', amount: 1, unit: 'tbsp' },
        { name: 'Dressing - olive oil', amount: 1, unit: 'tbsp' },
        { name: 'Dressing - maple pinch', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Roast chopped veggies at 425F with oil + salt ~25 min.',
        'Whisk dressing.',
        'Toss lentils + roasted veg + dressing. Serve and enjoy.'
    ],
    tags: ["lunch","salad","lentils"],
    nutritionPerServing: {
        calories: 460,
        protein: 20,
        carbs: 62,
        fat: 14,
    },
};
