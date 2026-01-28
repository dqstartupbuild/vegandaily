import { Recipe } from '../../../types';

export const roastedCauliflowerTahiniRiceBowl: Recipe = {
    id: 'roasted-cauliflower-tahini-rice-bowl',
    name: 'Roasted Cauliflower + Tahini Rice Bowl',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: require('../../../../assets/recipes/lunch/roasted-cauliflower-tahini-rice-bowl.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'cauliflower florets', amount: 1, unit: 'head' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
        { name: 'cumin/salt', amount: 1, unit: 'item' },
        { name: 'cooked rice', amount: 2, unit: 'cups' },
        { name: 'cucumber/tomato', amount: 1, unit: 'item' },
        { name: 'Sauce - tahini + lemon + water + salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Roast cauliflower at 425F 20-25 min with oil + cumin + salt.',
        'Whisk sauce.',
        'Build bowls: rice + cauliflower + fresh veg + sauce. Serve and enjoy.'
    ],
    tags: ["lunch","bowl","rice"],
    nutritionPerServing: {
        calories: 560,
        protein: 14,
        carbs: 76,
        fat: 22,
    },
};
