import { Recipe } from '../../../types';

export const bakedFalafelSaladBowlHomemadeNotMeat: Recipe = {
    id: 'baked-falafel-salad-bowl-homemade-not-meat',
    name: 'Baked Falafel Salad Bowl (Homemade, Not "Meat")',
    description: 'A fresh, colorful salad with bright flavors and a satisfying crunch.',
    image: require('../../../../assets/recipes/lunch/baked-falafel-salad-bowl.png'),
    mealType: 'lunch',
    prepTime: 15,
    cookTime: 25,
    servings: 3,
    difficulty: 'hard',
    ingredients: [
        { name: 'chickpeas', amount: 1, unit: 'can' },
        { name: 'onion', amount: 0.5, unit: 'item' },
        { name: 'parsley', amount: 1, unit: 'item' },
        { name: 'garlic cloves', amount: 2, unit: 'item' },
        { name: 'flour/oats', amount: 1, unit: 'tbsp' },
        { name: 'cumin', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'salad greens', amount: 1, unit: 'item' },
        { name: 'tahini-lemon sauce', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Heat oven 400F.',
        'Pulse chickpeas, onion, parsley, garlic, spices, flour until sticky (not totally smooth).',
        'Form patties/balls; bake 20-25 min, flipping halfway.',
        'Serve over greens with tahini + lemon thinned with water.'
    ],
    tags: ["lunch","salad","bowl","baked"],
    nutritionPerServing: {
        calories: 480,
        protein: 18,
        carbs: 62,
        fat: 18,
    },
};
