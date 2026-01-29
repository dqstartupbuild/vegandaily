import { Recipe } from '../../../types';

export const roastedCauliflowerTacosLimeSlaw: Recipe = {
    id: 'roasted-cauliflower-tacos-lime-slaw',
    name: 'Roasted Cauliflower Tacos + Lime Slaw',
    description: 'A zesty taco night staple with crisp veggies and bold seasoning.',
    image: require('../../../../assets/recipes/dinner/roasted-cauliflower-tacos-lime-slaw.webp'),
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    difficulty: 'medium',
    ingredients: [
        { name: 'cauliflower florets', amount: 1, unit: 'head' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
        { name: 'chili powder', amount: 1, unit: 'item' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'tortillas', amount: 1, unit: 'item' },
        { name: 'Slaw - shredded cabbage', amount: 1, unit: 'item' },
        { name: 'Slaw - lime', amount: 1, unit: 'item' },
        { name: 'Slaw - salt', amount: 1, unit: 'item' },
        { name: 'Slaw - cilantro', amount: 1, unit: 'item' },
        { name: 'Slaw - avocado', amount: 1, unit: 'item', optional: true },
    ],
    instructions: [
        'Toss cauliflower with oil + spices; roast 425F for 20 min.',
        'Mix slaw ingredients; let sit 10 min.',
        'Warm tortillas; fill with cauliflower + slaw (+ avocado). Serve and enjoy.'
    ],
    tags: ["dinner","tacos"],
    nutritionPerServing: {
        calories: 420,
        protein: 12,
        carbs: 62,
        fat: 14,
    },
};
