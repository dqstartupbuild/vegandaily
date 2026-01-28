import { Recipe } from '../../../types';

export const bakedCinnamonPearsWalnuts: Recipe = {
    id: 'baked-cinnamon-pears-walnuts',
    name: 'Baked Cinnamon Pears + Walnuts',
    description: 'A flavorful, plant-based dessert recipe that\'s simple and satisfying.',
    image: null,
    mealType: 'dessert',
    prepTime: 8,
    cookTime: 20,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'pears halved', amount: 4, unit: 'item' },
        { name: 'cinnamon', amount: 1, unit: 'item' },
        { name: 'maple', amount: 2, unit: 'tbsp' },
        { name: 'walnuts', amount: 0.3333333333333333, unit: 'cup' },
        { name: 'salt', amount: 1, unit: 'pinch' },
    ],
    instructions: [
        'Place pears cut-side up; drizzle maple; sprinkle cinnamon + salt.',
        'Bake 375F for ~20 min.',
        'Top with walnuts. Serve and enjoy.'
    ],
    tags: ["dessert","meal-prep","baked"],
    nutritionPerServing: {
        calories: 190,
        protein: 3,
        carbs: 30,
        fat: 8,
    },
};
