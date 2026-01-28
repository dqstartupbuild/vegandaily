// Bread recipes index
// Add new bread recipe exports here

export { garlicNaan } from './garlic-naan';
export { speltTortillas } from './spelt-tortillas';

import { Recipe } from '../../../types';
import { garlicNaan } from './garlic-naan';
import { speltTortillas } from './spelt-tortillas';

export const breadRecipes: Recipe[] = [
    garlicNaan,
    speltTortillas,
];
