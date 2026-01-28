import { Recipe } from '../../../types';

export const spicyPeanutSobaNoodleBowlNoTofu: Recipe = {
    id: 'spicy-peanut-soba-noodle-bowl-no-tofu',
    name: 'Spicy Peanut Soba Noodle Bowl (No Tofu)',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: require('../../../../assets/recipes/spicy-peanut-soba-noodle-bowl.png'),
    mealType: 'lunch',
    prepTime: 12,
    cookTime: 8,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'soba', amount: 6, unit: 'oz' },
        { name: 'shredded carrots', amount: 1, unit: 'item' },
        { name: 'cucumber', amount: 1, unit: 'item' },
        { name: 'edamame (if you want to avoid soy entirely', amount: 1, unit: 'item', optional: true },
        { name: 'use peas)', amount: 1, unit: 'item' },
        { name: 'scallions', amount: 1, unit: 'item' },
        { name: 'Sauce - peanut butter', amount: 2, unit: 'tbsp' },
        { name: 'Sauce - soy sauce or tamari', amount: 1, unit: 'item' },
        { name: 'Sauce - lime', amount: 1, unit: 'item' },
        { name: 'Sauce - sriracha', amount: 1, unit: 'item' },
        { name: 'Sauce - water', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Cook soba; rinse cold.',
        'Whisk sauce until smooth.',
        'Toss noodles with veggies and sauce. Serve and enjoy.'
    ],
    tags: ["lunch","bowl"],
    nutritionPerServing: {
        calories: 560,
        protein: 16,
        carbs: 74,
        fat: 22,
    },
};
