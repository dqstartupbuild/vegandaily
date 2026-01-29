import { Recipe } from '../../../types';

export const creamyWhiteBeanBroccoliBakedPotatoBowl: Recipe = {
    id: 'creamy-white-bean-broccoli-baked-potato-bowl',
    name: 'Creamy White Bean Broccoli "Baked Potato" Bowl',
    description: 'A balanced bowl layered with vibrant veggies and hearty plant proteins.',
    image: require('../../../../assets/recipes/lunch/creamy-white-bean-broccoli-baked-potato-bowl.webp'),
    mealType: 'lunch',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
        { name: 'russet potatoes (microwave ok)', amount: 2, unit: 'large' },
        { name: 'broccoli', amount: 2, unit: 'cups' },
        { name: 'white beans', amount: 1, unit: 'can' },
        { name: 'lemon', amount: 1, unit: 'item' },
        { name: 'garlic powder', amount: 1, unit: 'item' },
        { name: 'salt', amount: 1, unit: 'item' },
        { name: 'splash plant milk/water', amount: 1, unit: 'item' },
    ],
    instructions: [
        'Cook potatoes (microwave 6-10 min, flipping once).',
        'Steam broccoli until tender-crisp.',
        'Blend beans + lemon + garlic + salt + splash milk/water until creamy.',
        'Split potatoes; top broccoli + bean sauce. Serve and enjoy.'
    ],
    tags: ["lunch","bowl","beans","potatoes","baked"],
    nutritionPerServing: {
        calories: 520,
        protein: 20,
        carbs: 86,
        fat: 10,
    },
};
