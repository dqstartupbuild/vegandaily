import { Recipe } from '../../../types';

export const sweetPotatoWhiteBeanKaleSalad: Recipe = {
    id: 'sweet-potato-white-bean-kale-salad',
    name: 'Sweet Potato + White Bean Kale Salad',
    description: 'A fresh, colorful salad with bright flavors and a satisfying crunch.',
    image: null,
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'sweet potato (cubed)', amount: 1, unit: 'large' },
        { name: 'oil', amount: 1, unit: 'tbsp' },
        { name: 'kale', amount: 3, unit: 'cups' },
        { name: 'white beans', amount: 1.5, unit: 'cups' },
        { name: 'pumpkin seeds', amount: 1, unit: 'item' },
        { name: 'Dressing - mustard', amount: 1, unit: 'item' },
        { name: 'Dressing - lemon', amount: 1, unit: 'item' },
        { name: 'Dressing - maple', amount: 1, unit: 'item' },
        { name: 'Dressing - salt', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Roast sweet potato at 425F for ~20 min with oil + salt.',
        'Massage kale with a pinch of salt and a little dressing.',
        'Toss kale + beans + sweet potato; top seeds. Serve and enjoy.'
    ],
    tags: ["lunch","salad","beans","sweet-potato","potatoes"],
    nutritionPerServing: {
        calories: 520,
        protein: 18,
        carbs: 78,
        fat: 16,
    },
};
