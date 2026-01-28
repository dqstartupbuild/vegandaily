import { Recipe } from '../../../types';

/**
 * Pasta Primavera
 * A colorful Italian classic loaded with seasonal vegetables.
 */
export const pastaPrimavera: Recipe = {
    id: 'pasta-primavera',
    name: 'Pasta Primavera',
    description:
        'A vibrant Italian pasta dish bursting with fresh seasonal vegetables, tossed in a light garlic and olive oil sauce. Simple, satisfying, and full of flavor.',
    mealType: 'dinner',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'easy',
    ingredients: [
        { name: 'penne or rotini pasta', amount: 12, unit: 'oz' },
        { name: 'olive oil', amount: 3, unit: 'tbsp' },
        { name: 'garlic cloves, minced', amount: 4, unit: 'pieces' },
        { name: 'zucchini, sliced', amount: 1, unit: 'medium' },
        { name: 'yellow squash, sliced', amount: 1, unit: 'medium' },
        { name: 'cherry tomatoes, halved', amount: 1, unit: 'cup' },
        { name: 'broccoli florets', amount: 1.5, unit: 'cups' },
        { name: 'bell pepper (any color), sliced', amount: 1, unit: 'medium' },
        { name: 'fresh basil, chopped', amount: 0.25, unit: 'cup' },
        { name: 'fresh parsley, chopped', amount: 2, unit: 'tbsp' },
        { name: 'red pepper flakes', amount: 0.25, unit: 'tsp', optional: true },
        { name: 'vegan parmesan', amount: 0.25, unit: 'cup', optional: true },
        { name: 'salt and pepper', amount: 1, unit: 'to taste' },
        { name: 'lemon zest', amount: 1, unit: 'tsp', optional: true },
    ],
    instructions: [
        'Bring a large pot of salted water to a boil. Cook pasta according to package directions until al dente. Reserve 1 cup of pasta water before draining.',
        'While pasta cooks, heat olive oil in a large skillet or pan over medium-high heat.',
        'Add the minced garlic and sauté for 30 seconds until fragrant.',
        'Add the broccoli florets and cook for 2-3 minutes until they start to soften.',
        'Add the zucchini, yellow squash, and bell pepper. Sauté for 4-5 minutes until vegetables are tender-crisp.',
        'Add the cherry tomatoes and cook for another 2 minutes until they begin to soften.',
        'Add the cooked pasta to the skillet along with half the reserved pasta water.',
        'Toss everything together, adding more pasta water if needed to create a light sauce.',
        'Remove from heat and stir in fresh basil, parsley, and optional red pepper flakes.',
        'Season with salt and pepper to taste. Top with optional vegan parmesan and lemon zest.',
        'Serve immediately while hot.',
    ],
    tags: ['italian', 'vegetable-packed', 'family-friendly', 'colorful'],
    nutritionPerServing: {
        calories: 380,
        protein: 12,
        carbs: 62,
        fat: 10,
    },
};
