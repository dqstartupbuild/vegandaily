import { Recipe } from '../../../types';

export const redBeansRiceWeeknightVersion: Recipe = {
    id: 'red-beans-rice-weeknight-version',
    name: 'Red Beans & Rice (Weeknight Version)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/red-beans-rice-weeknight-version.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    difficulty: 'hard',
    ingredients: [
        { name: 'kidney beans', amount: 2, unit: 'cans' },
        { name: 'onion', amount: 1, unit: 'item' },
        { name: 'bell pepper', amount: 1, unit: 'item' },
        { name: 'celery', amount: 2, unit: 'item' },
        { name: 'garlic', amount: 1, unit: 'item' },
        { name: 'Cajun seasoning', amount: 1, unit: 'item' },
        { name: 'cooked rice', amount: 3, unit: 'cups' },
        { name: 'broth splash', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Saute onion/pepper/celery 7 min; add garlic.',
        'Add beans + Cajun seasoning + splash broth; simmer 15 min.',
        'Mash some beans for thickness. Serve over rice.'
    ],
    tags: ["dinner","meal-prep","rice","beans"],
    nutritionPerServing: {
        calories: 560,
        protein: 22,
        carbs: 96,
        fat: 8,
    },
};
