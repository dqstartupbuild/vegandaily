import { Recipe } from '../../../types';

export const edamameAlternativeSnackLemonGarlicGreenPeasWarm: Recipe = {
    id: 'edamame-alternative-snack-lemon-garlic-green-peas-warm',
    name: 'Edamame Alternative Snack: Lemon-Garlic Green Peas (Warm)',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/snack/lemon-garlic-green-peas-warm.png'),
    mealType: 'snack',
    prepTime: 3,
    cookTime: 6,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: 'frozen green peas', amount: 2, unit: 'cups' },
        { name: 'olive oil', amount: 1, unit: 'tsp' },
        { name: 'garlic powder', amount: 1, unit: 'item' },
        { name: 'lemon zest/juice', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Microwave or simmer peas until hot.',
        'Toss with oil, garlic powder, lemon, salt/pepper.',
        'Eat warm. Serve and enjoy.'
    ],
    tags: ["snack","quick"],
    nutritionPerServing: {
        calories: 180,
        protein: 10,
        carbs: 28,
        fat: 3,
    },
};
