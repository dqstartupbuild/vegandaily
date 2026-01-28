import { Recipe } from '../../../types';

/**
 * Mediterranean Veggie Wrap
 * A fresh, flavorful wrap packed with Mediterranean flavors.
 */
export const mediterraneanWrap: Recipe = {
    id: 'mediterranean-wrap',
    name: 'Mediterranean Veggie Wrap',
    description:
        'A vibrant, flavor-packed wrap filled with creamy hummus, crisp vegetables, and tangy olives. Perfect for a satisfying and portable lunch.',
    image: require('../../../../assets/recipes/lunch/mediterranean-wrap.png'),
    mealType: 'lunch',
    prepTime: 15,
    cookTime: 0,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'large whole wheat tortilla', amount: 1, unit: 'piece' },
        { name: 'hummus', amount: 3, unit: 'tbsp' },
        { name: 'cucumber, thinly sliced', amount: 0.5, unit: 'medium' },
        { name: 'cherry tomatoes, halved', amount: 0.5, unit: 'cup' },
        { name: 'kalamata olives, sliced', amount: 8, unit: 'pieces' },
        { name: 'red onion, thinly sliced', amount: 2, unit: 'tbsp' },
        { name: 'fresh spinach leaves', amount: 1, unit: 'cup' },
        { name: 'roasted red peppers', amount: 0.25, unit: 'cup' },
        { name: 'fresh lemon juice', amount: 1, unit: 'tbsp' },
        { name: 'dried oregano', amount: 0.25, unit: 'tsp' },
        { name: 'salt and pepper', amount: 1, unit: 'pinch' },
        { name: 'vegan feta crumbles', amount: 2, unit: 'tbsp', optional: true },
    ],
    instructions: [
        'Lay the tortilla flat on a clean surface.',
        'Spread the hummus evenly across the center of the tortilla, leaving about an inch on the edges.',
        'Layer the spinach leaves on top of the hummus.',
        'Arrange the cucumber slices, cherry tomatoes, olives, red onion, and roasted red peppers on top.',
        'Sprinkle with dried oregano and optional vegan feta crumbles.',
        'Drizzle with fresh lemon juice and season with salt and pepper.',
        'Fold in the sides of the tortilla, then roll tightly from the bottom up.',
        'Cut in half diagonally and serve immediately, or wrap in foil for a portable lunch.',
    ],
    tags: ['no-cook', 'portable', 'high-fiber', 'protein-rich'],
    nutritionPerServing: {
        calories: 420,
        protein: 14,
        carbs: 52,
        fat: 18,
    },
};
