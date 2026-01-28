import { Recipe } from '../../../types';

export const rainbowQuinoaBowlLemonTahini: Recipe = {
    id: 'rainbow-quinoa-bowl-lemon-tahini',
    name: 'Rainbow Quinoa Bowl + Lemon-Tahini',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: require('../../../../assets/recipes/lunch/rainbow-quinoa-bowl-lemon-tahini.png'),
    mealType: 'lunch',
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'cooked quinoa', amount: 2, unit: 'cups' },
        { name: 'shredded red cabbage', amount: 1, unit: 'item' },
        { name: 'grated carrot', amount: 1, unit: 'item' },
        { name: 'cucumber', amount: 1, unit: 'item' },
        { name: 'cherry tomatoes', amount: 1, unit: 'item' },
        { name: 'avocado', amount: 1, unit: 'item' },
        { name: 'chickpeas', amount: 0.5, unit: 'cup' },
        { name: 'Dressing - tahini', amount: 2, unit: 'tbsp' },
        { name: 'Dressing - lemon', amount: 1, unit: 'item' },
        { name: 'Dressing - water', amount: 1, unit: 'item' },
        { name: 'Dressing - garlic powder', amount: 1, unit: 'item' },
        { name: 'Dressing - salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Whisk dressing until pourable.',
        'Build bowls with quinoa + veggies + chickpeas + avocado.',
        'Drizzle dressing. Serve and enjoy.'
    ],
    tags: ["lunch","bowl","quinoa"],
    nutritionPerServing: {
        calories: 540,
        protein: 18,
        carbs: 72,
        fat: 20,
    },
};
