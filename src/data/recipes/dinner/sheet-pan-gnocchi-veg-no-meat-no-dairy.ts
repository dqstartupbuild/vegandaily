import { Recipe } from '../../../types';

export const sheetPanGnocchiVegNoMeatNoDairy: Recipe = {
    id: 'sheet-pan-gnocchi-veg-no-meat-no-dairy',
    name: 'Sheet Pan Gnocchi + Veg (No Meat, No Dairy)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/sheet-pan-gnocchi-veg-no-meat-no-dairy.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 20,
    servings: 3,
    difficulty: 'medium',
    ingredients: [
        { name: 'potato gnocchi (check vegan)', amount: 1, unit: 'lb' },
        { name: 'zucchini', amount: 1, unit: 'item' },
        { name: 'bell pepper', amount: 1, unit: 'item' },
        { name: 'red onion', amount: 1, unit: 'item' },
        { name: 'cherry tomatoes', amount: 2, unit: 'cups' },
        { name: 'olive oil', amount: 2, unit: 'tbsp' },
        { name: 'Italian seasoning', amount: 1, unit: 'item' },
        { name: 'salt/pepper', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Heat oven 425F.',
        'Toss gnocchi + chopped veg with oil + seasoning + salt/pepper.',
        'Roast 18-22 min, stirring halfway, until browned and blistered. Serve and enjoy.'
    ],
    tags: ["dinner"],
    nutritionPerServing: {
        calories: 560,
        protein: 12,
        carbs: 92,
        fat: 16,
    },
};
