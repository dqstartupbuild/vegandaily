import { Recipe } from '../../../types';

export const blueberryBuckwheatPancakes: Recipe = {
    id: 'blueberry-buckwheat-pancakes',
    name: 'Blueberry Buckwheat Pancakes',
    description: 'Fluffy, golden pancakes with a cozy, breakfast-ready flavor.',
    image: require('../../../../assets/recipes/breakfast/blueberry-buckwheat-pancakes.webp'),
    mealType: 'breakfast',
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'buckwheat flour', amount: 1, unit: 'cup' },
        { name: 'baking powder', amount: 1, unit: 'tbsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
        { name: 'plant milk', amount: 1, unit: 'cup' },
        { name: 'maple', amount: 1, unit: 'tbsp' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
        { name: 'blueberries', amount: 1, unit: 'cup' },
    ],
    instructions: [
        'Mix dry ingredients; whisk in milk, maple, oil.',
        'Fold in blueberries.',
        'Cook 1/4-cup scoops on nonstick pan 2-3 min/side. Serve and enjoy.'
    ],
    tags: ["breakfast","pancakes"],
    nutritionPerServing: {
        calories: 430,
        protein: 10,
        carbs: 80,
        fat: 9,
    },
};
