import { Recipe } from '../../../types';

export const cinnamonAppleOvernightOats: Recipe = {
    id: 'cinnamon-apple-overnight-oats',
    name: 'Cinnamon Apple Overnight Oats',
    description: 'A flavorful, plant-based breakfast recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'breakfast',
    prepTime: 8,
    cookTime: 0,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'rolled oats', amount: 0.5, unit: 'cup' },
        { name: 'chia seeds', amount: 1, unit: 'tbsp' },
        { name: 'unsweetened soy or oat milk', amount: 1, unit: 'cup' },
        { name: 'apple (diced)', amount: 1, unit: 'small' },
        { name: 'peanut butter', amount: 1, unit: 'tbsp' },
        { name: 'maple syrup', amount: 2, unit: 'tsp' },
        { name: 'cinnamon', amount: 0.5, unit: 'tsp' },
        { name: 'salt', amount: 1, unit: 'pinch' },
    ],
    instructions: [
        'Stir oats, chia, milk, cinnamon, salt, and maple in a jar.',
        'Fold in diced apple.',
        'Refrigerate 6+ hours.',
        'Top with peanut butter (and extra cinnamon) before eating. Serve and enjoy.'
    ],
    tags: ["breakfast","no-cook","quick","oats"],
    nutritionPerServing: {
        calories: 420,
        protein: 12,
        carbs: 67,
        fat: 12,
    },
};
