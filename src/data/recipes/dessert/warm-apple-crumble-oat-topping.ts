import { Recipe } from '../../../types';

export const warmAppleCrumbleOatTopping: Recipe = {
    id: 'warm-apple-crumble-oat-topping',
    name: 'Warm Apple Crumble (Oat Topping)',
    description: 'A flavorful, plant-based dessert recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dessert/warm-apple-crumble-oat-topping.png'),
    mealType: 'dessert',
    prepTime: 12,
    cookTime: 30,
    servings: 6,
    difficulty: 'hard',
    ingredients: [
        { name: 'apples sliced', amount: 5, unit: 'item' },
        { name: 'lemon', amount: 1, unit: 'item' },
        { name: 'cinnamon', amount: 1, unit: 'item' },
        { name: 'Topping - oats', amount: 1, unit: 'cup' },
        { name: 'Topping - flour', amount: 0.5, unit: 'cup' },
        { name: 'Topping - brown sugar', amount: 0.3333333333333333, unit: 'cup' },
        { name: 'Topping - coconut oil', amount: 0.25, unit: 'cup' },
        { name: 'Topping - salt', amount: 1, unit: 'pinch' },
    ],
    instructions: [
        'Heat oven to 375F. Toss apples with lemon + cinnamon; place in dish.',
        'Mix topping until crumbly; sprinkle over apples.',
        'Bake 28-35 min until bubbly. Serve and enjoy.'
    ],
    tags: ["dessert","meal-prep","oats"],
    nutritionPerServing: {
        calories: 260,
        protein: 4,
        carbs: 44,
        fat: 9,
    },
};
