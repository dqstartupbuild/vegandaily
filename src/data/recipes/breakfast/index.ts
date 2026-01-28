// Breakfast recipes index
// Add new breakfast recipe exports here

export { overnightOats } from './overnight-oats';
export { chickpeaOmelette } from './chickpea-omelette';
export { curriedChickpeasToast } from './curried-chickpeas';

import { Recipe } from '../../../types';
import { overnightOats } from './overnight-oats';
import { chickpeaOmelette } from './chickpea-omelette';
import { curriedChickpeasToast } from './curried-chickpeas';

export const breakfastRecipes: Recipe[] = [
    overnightOats,
    chickpeaOmelette,
    curriedChickpeasToast
];
