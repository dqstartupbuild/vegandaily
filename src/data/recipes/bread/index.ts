// Bread recipes index
// Add new bread recipe exports here

export { speltTortillas } from './spelt-tortillas';
export { garlicNaan } from './garlic-naan';

import { Recipe } from '../../../types';
import { speltTortillas } from './spelt-tortillas';
import { garlicNaan } from './garlic-naan';

export const breadRecipes: Recipe[] = [
    speltTortillas,
    garlicNaan,
];
