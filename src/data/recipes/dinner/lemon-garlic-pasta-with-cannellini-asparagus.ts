import { Recipe } from '../../../types';

export const lemonGarlicPastaWithCannelliniAsparagus: Recipe = {
    id: 'lemon-garlic-pasta-with-cannellini-asparagus',
    name: 'Lemon Garlic Pasta with Cannellini + Asparagus',
    description: 'A comforting pasta dish with bold, plant-forward flavors and a silky sauce.',
    image: require('../../../../assets/recipes/dinner/lemon-garlic-pasta-cannellini-asparagus.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'pasta', amount: 12, unit: 'oz' },
        { name: 'asparagus chopped', amount: 1, unit: 'bunch' },
        { name: 'cannellini beans', amount: 1, unit: 'can' },
        { name: 'garlic cloves', amount: 3, unit: 'item' },
        { name: 'olive oil', amount: 2, unit: 'tbsp' },
        { name: 'lemon zest/juice', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'chili flakes', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Cook pasta; reserve 1 cup pasta water.',
        'In pan, saute garlic in oil 30 sec; add asparagus 3-4 min.',
        'Add beans + splash pasta water; heat 2 min.',
        'Toss in pasta + lemon zest/juice + more pasta water to make it glossy. Season. Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep","pasta"],
    nutritionPerServing: {
        calories: 540,
        protein: 20,
        carbs: 86,
        fat: 12,
    },
};
