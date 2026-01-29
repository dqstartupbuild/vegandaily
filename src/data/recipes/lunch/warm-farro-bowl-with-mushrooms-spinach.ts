import { Recipe } from '../../../types';

export const warmFarroBowlWithMushroomsSpinach: Recipe = {
    id: 'warm-farro-bowl-with-mushrooms-spinach',
    name: 'Warm Farro Bowl with Mushrooms + Spinach',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: require('../../../../assets/recipes/lunch/warm-farro-bowl-mushrooms-spinach.webp'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'cooked farro', amount: 3, unit: 'cups' },
        { name: 'mushrooms', amount: 2, unit: 'cups' },
        { name: 'spinach', amount: 2, unit: 'cups' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'lemon', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute mushrooms in oil with salt 5-6 min; add garlic 30 sec.',
        'Stir in farro and warm through.',
        'Add spinach to wilt; finish lemon + pepper. Serve and enjoy.'
    ],
    tags: ["lunch","bowl"],
    nutritionPerServing: {
        calories: 520,
        protein: 16,
        carbs: 72,
        fat: 18,
    },
};
