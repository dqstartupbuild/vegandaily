import { Recipe } from '../../../types';

export const smokyBlackBeanQuesadillaNoCheese: Recipe = {
    id: 'smoky-black-bean-quesadilla-no-cheese',
    name: 'Smoky Black Bean Quesadilla (No Cheese)',
    description: 'A flavorful, plant-based lunch recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/lunch/smoky-black-bean-quesadilla-no-cheese.png'),
    mealType: 'lunch',
    prepTime: 8,
    cookTime: 8,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'tortillas', amount: 2, unit: 'large' },
        { name: 'black beans', amount: 1.5, unit: 'cups' },
        { name: 'salsa', amount: 1, unit: 'item' },
        { name: 'corn', amount: 1, unit: 'item' },
        { name: 'spinach', amount: 1, unit: 'item' },
        { name: 'smoked paprika', amount: 1, unit: 'item' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
    ],
    instructions: [
        'Mash beans with paprika + a little salsa.',
        'Spread onto tortilla, add corn + spinach, fold/cover with second tortilla.',
        'Pan-toast with a little oil 3-4 min/side. Slice. Serve and enjoy.'
    ],
    tags: ["lunch","beans"],
    nutritionPerServing: {
        calories: 520,
        protein: 18,
        carbs: 78,
        fat: 16,
    },
};
