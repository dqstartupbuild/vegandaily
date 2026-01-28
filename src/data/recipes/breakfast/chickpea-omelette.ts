import { Recipe } from '../../../types';

export const chickpeaOmelette: Recipe = {
    id: 'chickpea-omelette',
    name: 'Chickpea Vegetable Omelette',
    description: 'High-protein, egg-free omelette made from chickpea flour and packed with fresh veggies.',
    image: require('../../../../assets/recipes/omelette.png'),
    mealType: 'breakfast',
    prepTime: 10,
    cookTime: 10,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
        { name: 'Gram flour (Chickpea flour)', amount: 0.5, unit: 'cup' }, // Est
        { name: 'Baking powder', amount: 1, unit: 'tsp' },
        { name: 'Water', amount: 0.5, unit: 'cup' }, // Est
        { name: 'Soy sauce', amount: 1, unit: 'tsp' },
        { name: 'Lemon juice', amount: 1, unit: 'squeeze' },
        { name: 'Red onion', amount: 0.25, unit: 'medium' },
        { name: 'Courgette', amount: 0.5, unit: 'medium' },
        { name: 'Bell pepper', amount: 0.5, unit: 'medium' },
        { name: 'Tomato', amount: 1, unit: 'medium' },
        { name: 'Fresh coriander', amount: 1, unit: 'handful' },
    ],
    instructions: [
        'Whisk gram flour, baking powder, and water until smooth. Add soy sauce.',
        'Sauté onions, courgette, and peppers until caramelized. Add garlic at end.',
        'Mix cooked veggies, fresh tomato, and herbs into batter.',
        'Sauté mushrooms (optional) in pan base.',
        'Add squeeze of lemon to batter (for fluffiness) and pour into pan.',
        'Cook on low heat, covered, for 5 minutes.',
        'Slice into quarters to serve.',
    ],
    tags: ['breakfast', 'high-protein', 'savory', 'gluten-free'],
};
