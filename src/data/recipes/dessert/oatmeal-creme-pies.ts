import { Recipe } from '../../../types';

export const oatmealCremePies: Recipe = {
    id: 'oatmeal-creme-pies',
    name: 'Vegan Oatmeal Creme Pies',
    description: 'Nostalgic spiced oat cookies sandwiched with a fluffy vanilla creme filling.',
    image: require('../../../../assets/recipes/oatmeal-creme-pies.png'),
    mealType: 'dessert',
    prepTime: 30,
    cookTime: 12,
    servings: 12,
    difficulty: 'medium',
    ingredients: [
        { name: 'Vegan butter', amount: 1, unit: 'stick' },
        { name: 'Coconut sugar', amount: 0.75, unit: 'cup' },
        { name: 'Flaxmeal', amount: 1, unit: 'tbs' },
        { name: 'Water', amount: 3, unit: 'tbs' },
        { name: 'Molasses', amount: 1, unit: 'tbs' },
        { name: 'Vanilla extract', amount: 2, unit: 'tsp' }, // Combined for cookie + filling
        { name: 'All-purpose flour', amount: 1.125, unit: 'cup' }, // 1 cup + 2 tbs
        { name: 'Rolled oats', amount: 0.75, unit: 'cup' },
        { name: 'Nutmeg', amount: 0.125, unit: 'tsp' }, // 'R tsp' interpreted as pinch/small amount, going with 1/8
        { name: 'Baking soda', amount: 0.5, unit: 'tsp' },
        { name: 'Ceylon cinnamon', amount: 0.5, unit: 'tsp' },
        { name: 'Salt', amount: 0.25, unit: 'tsp' },
        { name: 'Softened vegan butter (filling)', amount: 1, unit: 'stick' },
        { name: 'Powdered sugar', amount: 1, unit: 'cup' },
        { name: 'Coconut cream', amount: 0.5, unit: 'tbs' },
    ],
    instructions: [
        'Preheat oven to 350°F (175°C) and line a baking sheet with parchment.',
        'Prepare flax egg: 1 tbs flaxmeal + 3 tbs water. Let sit.',
        'Cream 1 stick vegan butter with coconut sugar. Add flax egg, molasses, and 1 tsp vanilla.',
        'Whisk dry ingredients: flour, oats, nutmeg, baking soda, cinnamon, salt.',
        'Combine wet and dry ingredients. Drop spoonfuls onto baking sheet.',
        'Bake 10-12 minutes. Cool completely.',
        'Make filling: Beat 1 stick softened butter, 1 tsp vanilla, powdered sugar, and coconut cream until fluffy.',
        'Sandwich filling between two cooled cookies.',
    ],
    tags: ['dessert', 'cookies', 'oatmeal', 'creme-pie'],
    nutritionPerServing: {
        calories: 280,
        protein: 3,
        carbs: 38,
        fat: 12,
    },
};
