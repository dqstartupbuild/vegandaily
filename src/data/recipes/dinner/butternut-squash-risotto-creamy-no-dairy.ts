import { Recipe } from '../../../types';

export const butternutSquashRisottoCreamyNoDairy: Recipe = {
    id: 'butternut-squash-risotto-creamy-no-dairy',
    name: 'Butternut Squash Risotto (Creamy, No Dairy)',
    description: 'A flavorful, plant-based dinner recipe that\'s simple and satisfying.',
    image: require('../../../../assets/recipes/dinner/butternut-squash-risotto.png'),
    mealType: 'dinner',
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    difficulty: 'hard',
    ingredients: [

    ],
    instructions: [
        'Saute onion in oil 4 min; add garlic 30 sec.',
        'Add rice; stir 1 min.',
        'Add squash + 1 cup broth; stir until absorbed.',
        'Keep adding broth 1/2-1 cup at a time, stirring frequently, until rice is creamy and tender (25-30 min). Serve and enjoy.'
    ],
    tags: ["dinner","meal-prep"],
    nutritionPerServing: {
        calories: 520,
        protein: 10,
        carbs: 88,
        fat: 14,
    },
};
