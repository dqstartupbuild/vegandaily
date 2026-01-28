import { Recipe } from '../../../types';

/**
 * Classic Overnight Oats
 * A no-cook, make-ahead breakfast that's creamy and delicious.
 */
export const overnightOats: Recipe = {
    id: 'overnight-oats',
    name: 'Classic Overnight Oats',
    description:
        'A creamy, no-cook breakfast that you prepare the night before. Wake up to a delicious, ready-to-eat meal packed with fiber and nutrients.',
    mealType: 'breakfast',
    prepTime: 5,
    cookTime: 0, // No cooking - just refrigerate overnight
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'rolled oats', amount: 0.5, unit: 'cup' },
        { name: 'plant milk (oat or almond)', amount: 0.5, unit: 'cup' },
        { name: 'chia seeds', amount: 1, unit: 'tbsp' },
        { name: 'maple syrup', amount: 1, unit: 'tbsp' },
        { name: 'vanilla extract', amount: 0.25, unit: 'tsp' },
        { name: 'fresh berries', amount: 0.25, unit: 'cup' },
        { name: 'sliced banana', amount: 0.5, unit: 'medium' },
        { name: 'cinnamon', amount: 0.25, unit: 'tsp', optional: true },
        { name: 'almond butter', amount: 1, unit: 'tbsp', optional: true },
    ],
    instructions: [
        'In a mason jar or container, combine the rolled oats, plant milk, chia seeds, maple syrup, and vanilla extract.',
        'Stir everything together until well combined.',
        'Add the optional cinnamon if desired and stir again.',
        'Cover the container and refrigerate overnight (or for at least 4 hours).',
        'In the morning, give the oats a good stir. Add more plant milk if you prefer a thinner consistency.',
        'Top with fresh berries, sliced banana, and a drizzle of almond butter if desired.',
        'Enjoy cold or warm it up in the microwave for 1-2 minutes.',
    ],
    tags: ['no-cook', 'meal-prep', 'fiber-rich', 'quick'],
    nutritionPerServing: {
        calories: 380,
        protein: 10,
        carbs: 58,
        fat: 12,
    },
};
