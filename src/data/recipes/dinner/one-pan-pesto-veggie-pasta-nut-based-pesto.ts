import { Recipe } from '../../../types';

export const onePanPestoVeggiePastaNutBasedPesto: Recipe = {
    id: 'one-pan-pesto-veggie-pasta-nut-based-pesto',
    name: 'One-Pan Pesto Veggie Pasta (Nut-Based Pesto)',
    description: 'A comforting pasta dish with bold, plant-forward flavors and a silky sauce.',
    image: require('../../../../assets/recipes/dinner/one-pan-pesto-veggie-pasta.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'pasta', amount: 12, unit: 'oz' },
        { name: 'zucchini', amount: 1, unit: 'item' },
        { name: 'cherry tomatoes', amount: 1, unit: 'item' },
        { name: 'spinach', amount: 1, unit: 'item' },
        { name: 'Pesto - basil', amount: 1, unit: 'cup' },
        { name: 'Pesto - walnuts', amount: 0.3333333333333333, unit: 'cup' },
        { name: 'Pesto - garlic', amount: 1, unit: 'item' },
        { name: 'Pesto - lemon', amount: 1, unit: 'item' },
        { name: 'Pesto - olive oil', amount: 1, unit: 'item' },
        { name: 'Pesto - salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Blend pesto ingredients (add water to loosen).',
        'Cook pasta; reserve 1/2 cup pasta water.',
        'Saute zucchini + tomatoes 5 min; add spinach to wilt.',
        'Toss pasta with veggies, pesto, and a splash of pasta water. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","pasta"],
    nutritionPerServing: {
        calories: 520,
        protein: 14,
        carbs: 78,
        fat: 18,
    },
};
