import { Recipe } from '../../../types';

export const creamyRoastedRedPepperPastaSaladNoDairy: Recipe = {
    id: 'creamy-roasted-red-pepper-pasta-salad-no-dairy',
    name: 'Creamy Roasted Red Pepper Pasta Salad (No Dairy)',
    description: 'A fresh, colorful salad with bright flavors and a satisfying crunch.',
    image: require('../../../../assets/recipes/lunch/creamy-roasted-red-pepper-pasta-salad.png'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 12,
    servings: 4,
    difficulty: 'medium',
    ingredients: [
        { name: 'whole-grain pasta', amount: 12, unit: 'oz' },
        { name: 'roasted red peppers', amount: 1, unit: 'jar' },
        { name: 'cashews (soaked 10 min in hot water)', amount: 0.3333333333333333, unit: 'cup' },
        { name: 'lemon juice', amount: 2, unit: 'tbsp' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'basil', amount: 1, unit: 'item' },
        { name: 'spinach', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Cook pasta; rinse cool.',
        'Blend peppers + cashews + lemon + garlic + salt until creamy.',
        'Toss pasta with sauce and spinach/basil. Serve and enjoy.'
    ],
    tags: ["lunch","meal-prep","salad","pasta"],
    nutritionPerServing: {
        calories: 460,
        protein: 12,
        carbs: 72,
        fat: 14,
    },
};
