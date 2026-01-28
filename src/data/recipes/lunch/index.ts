// Lunch recipes index
// Add new lunch recipe exports here

export { mediterraneanWrap } from './mediterranean-wrap';
export { redBeansRice } from './red-beans-rice';
export { whiteBeanMash } from './white-bean-mash';

import { Recipe } from '../../../types';
import { mediterraneanWrap } from './mediterranean-wrap';
import { redBeansRice } from './red-beans-rice';
import { whiteBeanMash } from './white-bean-mash';

export const lunchRecipes: Recipe[] = [
    mediterraneanWrap,
    redBeansRice,
    whiteBeanMash
];
