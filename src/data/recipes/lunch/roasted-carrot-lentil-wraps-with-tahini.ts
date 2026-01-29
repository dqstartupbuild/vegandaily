import { Recipe } from '../../../types';

export const roastedCarrotLentilWrapsWithTahini: Recipe = {
    id: 'roasted-carrot-lentil-wraps-with-tahini',
    name: 'Roasted Carrot + Lentil Wraps with Tahini',
    description: 'A portable, flavor-packed wrap that stays fresh and filling.',
    image: require('../../../../assets/recipes/lunch/roasted-carrot-lentil-wraps-tahini.webp'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'wraps', amount: 2, unit: 'large' },
        { name: 'cooked lentils', amount: 2, unit: 'cups' },
        { name: 'carrots (sticks)', amount: 4, unit: 'item' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
        { name: 'cumin/salt', amount: 1, unit: 'item' },
        { name: 'greens', amount: 1, unit: 'item' },
        { name: 'tahini + lemon + water', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Roast carrots at 425F with oil + cumin + salt for ~25 min.',
        'Warm lentils with salt/pepper.',
        'Whisk tahini + lemon + water until pourable.',
        'Fill wraps with greens + lentils + carrots + sauce. Serve and enjoy.'
    ],
    tags: ["lunch","wrap","lentils"],
    nutritionPerServing: {
        calories: 560,
        protein: 22,
        carbs: 78,
        fat: 18,
    },
};
