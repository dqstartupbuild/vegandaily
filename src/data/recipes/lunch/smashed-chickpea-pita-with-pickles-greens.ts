import { Recipe } from '../../../types';

export const smashedChickpeaPitaWithPicklesGreens: Recipe = {
    id: 'smashed-chickpea-pita-with-pickles-greens',
    name: 'Smashed Chickpea Pita with Pickles + Greens',
    description: 'A flavorful, plant-based lunch recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/lunch/smashed-chickpea-pita-pickles-greens.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: '2 pitas', amount: 2, unit: 'pitas' },
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'lemon juice', amount: 1, unit: 'item' },
        { name: 'garlic powder', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'pickles', amount: 1, unit: 'item' },
        { name: 'lettuce', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Mash chickpeas with olive oil, lemon, garlic powder, salt/pepper.',
        'Stuff pitas with chickpea mix + greens + pickles. Serve and enjoy.'
    ],
    tags: ["lunch","no-cook","quick","chickpeas"],
    nutritionPerServing: {
        calories: 480,
        protein: 18,
        carbs: 68,
        fat: 14,
    },
};
