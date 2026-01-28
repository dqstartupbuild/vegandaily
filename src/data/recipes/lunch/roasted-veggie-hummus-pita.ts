import { Recipe } from '../../../types';

export const roastedVeggieHummusPita: Recipe = {
    id: 'roasted-veggie-hummus-pita',
    name: 'Roasted Veggie + Hummus Pita',
    description: 'A flavorful, plant-based lunch recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/lunch/roasted-veggie-hummus-pita.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: '2 pitas', amount: 2, unit: 'pitas' },
        { name: 'zucchini', amount: 1, unit: 'item' },
        { name: 'bell pepper', amount: 1, unit: 'item' },
        { name: 'red onion', amount: 1, unit: 'item' },
        { name: 'olive oil', amount: 1, unit: 'tbsp' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
        { name: 'hummus', amount: 0.5, unit: 'cup' },
        { name: 'arugula', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Roast chopped veggies at 425F for ~20 min with oil + salt/pepper.',
        'Warm pitas, spread hummus.',
        'Stuff with veggies + arugula. Serve and enjoy.'
    ],
    tags: ["lunch"],
    nutritionPerServing: {
        calories: 540,
        protein: 16,
        carbs: 76,
        fat: 20,
    },
};
