import { Recipe } from '../../../types';

export const warmQuinoaBreakfastBowlCoconutMango: Recipe = {
    id: 'warm-quinoa-breakfast-bowl-coconut-mango',
    name: 'Warm Quinoa Breakfast Bowl (Coconut + Mango)',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: null,
    mealType: 'breakfast',
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'cooked quinoa', amount: 1, unit: 'cup' },
        { name: 'light coconut milk + water as needed', amount: 1, unit: 'cup' },
        { name: 'maple', amount: 1, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'mango (diced)', amount: 1, unit: 'item' },
        { name: 'pumpkin seeds', amount: 2, unit: 'tbsp' },
    ],
    instructions: [
        'Warm quinoa with coconut milk, maple, salt until creamy.',
        'Divide into bowls; top with mango and pumpkin seeds. Serve and enjoy.'
    ],
    tags: ["breakfast","bowl","quinoa"],
    nutritionPerServing: {
        calories: 390,
        protein: 9,
        carbs: 66,
        fat: 11,
    },
};
