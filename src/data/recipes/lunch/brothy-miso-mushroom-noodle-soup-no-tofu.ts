import { Recipe } from '../../../types';

export const brothyMisoMushroomNoodleSoupNoTofu: Recipe = {
    id: 'brothy-miso-mushroom-noodle-soup-no-tofu',
    name: 'Brothy Miso Mushroom Noodle Soup (No Tofu)',
    description: 'A cozy, savory bowl that\'s hearty, warming, and easy to make.',
    image: require('../../../../assets/recipes/lunch/brothy-miso-mushroom-noodle-soup.png'),
    mealType: 'lunch',
    prepTime: 8,
    cookTime: 12,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'broth/water', amount: 4, unit: 'cups' },
        { name: 'miso', amount: 2, unit: 'tbsp' },
        { name: 'noodles (rice/soba)', amount: 6, unit: 'oz' },
        { name: 'mushrooms', amount: 2, unit: 'cups' },
        { name: 'baby spinach', amount: 2, unit: 'cups' },
        { name: 'scallions', amount: 1, unit: 'item' },
        { name: 'ginger', amount: 1, unit: 'item' },
        { name: 'sesame seeds', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Simmer broth with sliced ginger 3 min.',
        'Add mushrooms; simmer 4-5 min.',
        'Add noodles; cook until tender.',
        'Turn heat off; whisk miso with a little hot broth in a cup, then stir back in.',
        'Add spinach to wilt; top scallions + sesame. Serve and enjoy.'
    ],
    tags: ["lunch","soup"],
    nutritionPerServing: {
        calories: 410,
        protein: 12,
        carbs: 72,
        fat: 7,
    },
};
