import { Recipe } from '../../../types';

export const curriedChickpeaTunaSandwichNoMayoNeeded: Recipe = {
    id: 'curried-chickpea-tuna-sandwich-no-mayo-needed',
    name: 'Curried Chickpea "Tuna" Sandwich (No Mayo Needed)',
    description: 'A flavorful, plant-based lunch recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/lunch/curried-chickpea-tuna-sandwich.png'),
    mealType: 'lunch',
    prepTime: 12,
    cookTime: 0,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'tahini', amount: 2, unit: 'tbsp' },
        { name: 'lemon juice', amount: 1, unit: 'tbsp' },
        { name: 'curry powder', amount: 1, unit: 'tsp' },
        { name: 'diced red onion', amount: 1, unit: 'tbsp' },
        { name: 'diced celery', amount: 1, unit: 'item', optional: true },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'whole-grain bread', amount: 4, unit: 'slices' },
    ],
    instructions: [
        'Mash chickpeas until flaky.',
        'Mix in tahini, lemon, curry powder, onion, celery, salt/pepper.',
        'Build sandwiches (add greens if you want). Serve and enjoy.'
    ],
    tags: ["lunch","no-cook","quick","chickpeas"],
    nutritionPerServing: {
        calories: 520,
        protein: 18,
        carbs: 72,
        fat: 18,
    },
};
