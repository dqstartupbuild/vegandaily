import { Recipe } from '../../../types';

export const roastedChickpeasCrunchy: Recipe = {
    id: 'roasted-chickpeas-crunchy',
    name: 'Roasted Chickpeas (Crunchy)',
    description: 'A flavorful, plant-based snack recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/snack/roasted-chickpeas-crunchy.png'),
    mealType: 'snack',
    prepTime: 5,
    cookTime: 30,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
        { name: 'smoked paprika', amount: 1, unit: 'item' },
        { name: 'garlic powder', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Dry chickpeas well.',
        'Toss with oil + spices.',
        'Roast 400F for 25-35 min, shaking once. Serve and enjoy.'
    ],
    tags: ["snack","meal-prep","chickpeas"],
    nutritionPerServing: {
        calories: 170,
        protein: 8,
        carbs: 26,
        fat: 4,
    },
};
