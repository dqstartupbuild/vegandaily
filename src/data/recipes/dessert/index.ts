// Dessert recipes index
// Add new dessert recipe exports here

export { matchaCookies } from './matcha-cookies';
export { chocolateChipBlondies } from './chocolate-chip-blondies';
export { oatmealCremePies } from './oatmeal-creme-pies';
export { blackBeanBrownies } from './black-bean-brownie';
export { cinnamonRolls } from './cinnamon-rolls';

import { Recipe } from '../../../types';
import { matchaCookies } from './matcha-cookies';
import { chocolateChipBlondies } from './chocolate-chip-blondies';
import { oatmealCremePies } from './oatmeal-creme-pies';
import { blackBeanBrownies } from './black-bean-brownie';
import { cinnamonRolls } from './cinnamon-rolls';

export const dessertRecipes: Recipe[] = [
    matchaCookies,
    chocolateChipBlondies,
    oatmealCremePies,
    blackBeanBrownies,
    cinnamonRolls,
];
