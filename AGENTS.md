# Repository Guidelines

## Project Structure & Module Organization
- Complete repository tree (excluding generated `.git/`, `.expo/`, and `node_modules/`):
```
easyvegan/
├── .gitignore
├── AGENTS.md
├── CHANGELOG.md
├── README.md
├── app
│   ├── (tabs)
│   │   ├── _layout.tsx
│   │   ├── bookmarks.tsx
│   │   ├── browse.tsx
│   │   └── index.tsx
│   ├── _layout.tsx
│   └── recipe
│       ├── [mealType].tsx
│       └── detail
│           └── [id].tsx
├── app.json
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── recipes
│   │   ├── bread
│   │   │   ├── naan.png
│   │   │   └── spelt-tortillas.png
│   │   ├── breakfast
│   │   │   ├── apple-cinnamon-quinoa-breakfast-bowl.png
│   │   │   ├── banana-walnut-baked-oatmeal-meal-prep.png
│   │   │   ├── berry-chia-pudding.png
│   │   │   ├── blueberry-buckwheat-pancakes.png
│   │   │   ├── breakfast-burrito-beans-potatoes-salsa.png
│   │   │   ├── chickpea-flour-omelet-veggies.png
│   │   │   ├── chickpea-scramble-peppers.png
│   │   │   ├── chickpeas-toast.png
│   │   │   ├── cinnamon-apple-overnight-oats.png
│   │   │   ├── date-nut-breakfast-bars-no-bake.png
│   │   │   ├── high-fiber-smoothie-bowl-berry-flax.png
│   │   │   ├── oatmeal-carrot-cake-bowl.png
│   │   │   ├── omelette.png
│   │   │   ├── overnight-oats.png
│   │   │   ├── peanut-butter-banana-smoothie.png
│   │   │   ├── pear-almond-butter-toast-hemp.png
│   │   │   ├── pumpkin-pie-overnight-oats.png
│   │   │   ├── savory-avocado-toast-tomato-hemp.png
│   │   │   ├── savory-breakfast-lentils-garlic-greens.png
│   │   │   ├── savory-oatmeal-mushrooms-spinach.png
│   │   │   ├── sweet-potato-breakfast-hash-beans-greens.png
│   │   │   ├── warm-millet-porridge-berries.png
│   │   │   └── warm-quinoa-breakfast-bowl-coconut-mango.png
│   │   ├── dessert
│   │   │   ├── baked-cinnamon-pears-walnuts.png
│   │   │   ├── banana-nice-cream-1-ingredient-base.png
│   │   │   ├── black-bean-brownies.png
│   │   │   ├── blondies.png
│   │   │   ├── carrot-cake-bliss-balls.png
│   │   │   ├── chocolate-avocado-mousse.png
│   │   │   ├── cinnamon-rolls.png
│   │   │   ├── coconut-rice-pudding-simple.png
│   │   │   ├── dark-chocolate-covered-almonds-quick.png
│   │   │   ├── lemon-blueberry-chia-jam.png
│   │   │   ├── matcha-cookies.png
│   │   │   ├── oatmeal-creme-pies.png
│   │   │   ├── peanut-butter-chocolate-bark-freezer.png
│   │   │   ├── strawberry-oat-shortcake-bowl.png
│   │   │   └── warm-apple-crumble-oat-topping.png
│   │   ├── dinner
│   │   │   ├── black-bean-sweet-potato-chili.png
│   │   │   ├── butternut-squash-risotto.png
│   │   │   ├── cabbage-rolls.png
│   │   │   ├── cashew-tomato-soup-veggie-sandwich.png
│   │   │   ├── chickpea-shawarma-bowl.png
│   │   │   ├── coconut-chickpea-curry-spinach.png
│   │   │   ├── creamy-cashew-tomato-soup-grilled-veggie-sandwich.png
│   │   │   ├── creamy-coconut-red-lentil-curry.png
│   │   │   ├── creamy-potato-corn-chowder-no-dairy.png
│   │   │   ├── creamy-white-bean-tomato-orzo.png
│   │   │   ├── eggplant-chickpea-tagine.png
│   │   │   ├── garlic-lemon-broccoli-chickpea-pasta.png
│   │   │   ├── hearty-lentil-bolognese.png
│   │   │   ├── jamaican-style-cabbage-beans-over-rice.png
│   │   │   ├── lemon-garlic-pasta-cannellini-asparagus.png
│   │   │   ├── lentil-shepherds-pie.png
│   │   │   ├── moroccan-lentil-stew-carrot-apricot.png
│   │   │   ├── mushroom-steak-garlic-herb-potatoes.png
│   │   │   ├── one-pan-pesto-veggie-pasta.png
│   │   │   ├── one-pot-spanish-beans-greens.png
│   │   │   ├── pasta-primavera.png
│   │   │   ├── red-beans-rice-weeknight-version.png
│   │   │   ├── roasted-cauliflower-tacos-lime-slaw.png
│   │   │   ├── roasted-veggie-lentil-sausage-free-bake.png
│   │   │   ├── sheet-pan-gnocchi-veg-no-meat-no-dairy.png
│   │   │   ├── stuffed-bell-peppers-quinoa-beans.png
│   │   │   ├── stuffed-eggplant-lentils-herbs.png
│   │   │   ├── stuffed-sweet-potatoes.png
│   │   │   ├── thai-peanut-chickpea-curry.png
│   │   │   ├── vegetable-paella.png
│   │   │   ├── veggie-fried-rice-chickpeas.png
│   │   │   └── zucchini-boats-with-lentil-marinara.png
│   │   ├── lunch
│   │   │   ├── baked-falafel-salad-bowl.png
│   │   │   ├── barley-chickpea-greek-bowl.png
│   │   │   ├── black-bean-corn-salad-meal-prep.png
│   │   │   ├── brothy-miso-mushroom-noodle-soup.png
│   │   │   ├── creamy-avocado-pea-pasta-green-sauce.png
│   │   │   ├── creamy-roasted-red-pepper-pasta-salad.png
│   │   │   ├── creamy-white-bean-broccoli-baked-potato-bowl.png
│   │   │   ├── curried-chickpea-tuna-sandwich.png
│   │   │   ├── ginger-carrot-red-lentil-soup.png
│   │   │   ├── lemon-dill-white-bean-cucumber-salad.png
│   │   │   ├── lentil-veggie-soup-one-pot.png
│   │   │   ├── mediterranean-chickpea-salad-wraps.png
│   │   │   ├── mediterranean-wrap.png
│   │   │   ├── minestrone-beans-veg-pasta.png
│   │   │   ├── quinoa-tabbouleh-chickpeas.png
│   │   │   ├── rainbow-quinoa-bowl-lemon-tahini.png
│   │   │   ├── red-beans-rice.png
│   │   │   ├── red-beans.png
│   │   │   ├── roasted-beet-orange-walnut-salad.png
│   │   │   ├── roasted-carrot-lentil-wraps-tahini.png
│   │   │   ├── roasted-cauliflower-tahini-rice-bowl.png
│   │   │   ├── roasted-veg-lentil-salad-lemon-mustard.png
│   │   │   ├── roasted-veggie-hummus-pita.png
│   │   │   ├── sesame-ginger-cabbage-noodle-soup.png
│   │   │   ├── smashed-chickpea-pita-pickles-greens.png
│   │   │   ├── smoky-black-bean-quesadilla-no-cheese.png
│   │   │   ├── smoky-corn-black-bean-rice-salad.png
│   │   │   ├── spicy-peanut-soba-noodle-bowl.png
│   │   │   ├── split-pea-soup-thick-cozy.png
│   │   │   ├── sweet-potato-white-bean-kale-salad.png
│   │   │   ├── tomato-basil-white-bean-toasts.png
│   │   │   ├── tomato-white-bean-pizza-toasts.png
│   │   │   ├── warm-farro-bowl-mushrooms-spinach.png
│   │   │   └── white-bean-mash.png
│   │   └── snack
│   │       ├── apple-nachos-pb-seeds.png
│   │       ├── classic-hummus-creamy.png
│   │       ├── date-tahini-energy-bites.png
│   │       ├── guacamole-veggie-sticks.png
│   │       ├── kimchi.png
│   │       ├── lemon-garlic-green-peas-warm.png
│   │       ├── quick-pickled-cucumbers.png
│   │       ├── roasted-chickpeas-crunchy.png
│   │       ├── smoky-salsa-style-black-bean-dip.png
│   │       ├── spiced-nuts-pan-toasted.png
│   │       └── warm-cinnamon-walnuts.png
│   └── splash-icon.png
├── docs
│   └── possible-features.md
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── BookmarkButton.tsx
│   │   ├── EmptyState.tsx
│   │   ├── FilterChips.tsx
│   │   ├── Header.tsx
│   │   ├── MealButton.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── RecipeDisplay.tsx
│   │   ├── SearchBar.tsx
│   │   └── ServingsAdjuster.tsx
│   ├── context
│   │   ├── BookmarkContext.tsx
│   │   └── DailyRecipeContext.tsx
│   ├── data
│   │   └── recipes
│   │       ├── bread
│   │       │   ├── garlic-naan.ts
│   │       │   ├── index.ts
│   │       │   └── spelt-tortillas.ts
│   │       ├── breakfast
│   │       │   ├── apple-cinnamon-quinoa-breakfast-bowl.ts
│   │       │   ├── banana-walnut-baked-oatmeal-meal-prep.ts
│   │       │   ├── berry-chia-pudding.ts
│   │       │   ├── blueberry-buckwheat-pancakes.ts
│   │       │   ├── breakfast-burrito-beans-potatoes-salsa.ts
│   │       │   ├── chickpea-flour-omelet-no-egg-veggies.ts
│   │       │   ├── chickpea-omelette.ts
│   │       │   ├── chickpea-scramble-no-tofu-peppers.ts
│   │       │   ├── cinnamon-apple-overnight-oats.ts
│   │       │   ├── curried-chickpeas.ts
│   │       │   ├── date-nut-breakfast-bars-no-bake.ts
│   │       │   ├── high-fiber-smoothie-bowl-berry-flax.ts
│   │       │   ├── index.ts
│   │       │   ├── oatmeal-carrot-cake-bowl.ts
│   │       │   ├── overnight-oats.ts
│   │       │   ├── peanut-butter-banana-smoothie.ts
│   │       │   ├── pear-almond-butter-toast-with-hemp.ts
│   │       │   ├── pumpkin-pie-overnight-oats.ts
│   │       │   ├── savory-avocado-toast-tomato-hemp.ts
│   │       │   ├── savory-breakfast-lentils-garlic-greens.ts
│   │       │   ├── savory-oatmeal-with-mushrooms-spinach.ts
│   │       │   ├── sweet-potato-breakfast-hash-beans-greens.ts
│   │       │   ├── warm-millet-porridge-berries.ts
│   │       │   └── warm-quinoa-breakfast-bowl-coconut-mango.ts
│   │       ├── dessert
│   │       │   ├── baked-cinnamon-pears-walnuts.ts
│   │       │   ├── banana-nice-cream-1-ingredient-base.ts
│   │       │   ├── black-bean-brownie.ts
│   │       │   ├── carrot-cake-bliss-balls.ts
│   │       │   ├── chocolate-avocado-mousse.ts
│   │       │   ├── chocolate-chip-blondies.ts
│   │       │   ├── cinnamon-rolls.ts
│   │       │   ├── coconut-rice-pudding-simple.ts
│   │       │   ├── dark-chocolate-covered-almonds-quick.ts
│   │       │   ├── index.ts
│   │       │   ├── lemon-blueberry-chia-jam.ts
│   │       │   ├── matcha-cookies.ts
│   │       │   ├── oatmeal-creme-pies.ts
│   │       │   ├── peanut-butter-chocolate-bark-freezer.ts
│   │       │   ├── strawberry-oat-shortcake-bowl.ts
│   │       │   └── warm-apple-crumble-oat-topping.ts
│   │       ├── dinner
│   │       │   ├── black-bean-sweet-potato-chili.ts
│   │       │   ├── butternut-squash-risotto-creamy-no-dairy.ts
│   │       │   ├── cabbage-rolls-rice-lentils.ts
│   │       │   ├── chickpea-shawarma-bowls.ts
│   │       │   ├── coconut-chickpea-curry-spinach.ts
│   │       │   ├── creamy-cashew-tomato-soup-grilled-veggie-sandwich.ts
│   │       │   ├── creamy-coconut-red-lentil-curry.ts
│   │       │   ├── creamy-potato-corn-chowder-no-dairy.ts
│   │       │   ├── creamy-tomato-basil-orzo-white-beans.ts
│   │       │   ├── eggplant-chickpea-tagine-warm-spices.ts
│   │       │   ├── garlic-lemon-broccoli-chickpea-pasta.ts
│   │       │   ├── hearty-lentil-bolognese.ts
│   │       │   ├── index.ts
│   │       │   ├── jamaican-style-cabbage-beans-over-rice.ts
│   │       │   ├── lemon-garlic-pasta-with-cannellini-asparagus.ts
│   │       │   ├── lentil-shepherd-s-pie-no-meat.ts
│   │       │   ├── moroccan-lentil-stew-carrot-apricot.ts
│   │       │   ├── mushroom-steak-garlic-herb-potatoes.ts
│   │       │   ├── one-pan-pesto-veggie-pasta-nut-based-pesto.ts
│   │       │   ├── one-pot-spanish-beans-greens.ts
│   │       │   ├── pasta-primavera.ts
│   │       │   ├── red-beans-rice-weeknight-version.ts
│   │       │   ├── roasted-cauliflower-tacos-lime-slaw.ts
│   │       │   ├── roasted-veggie-lentil-sausage-free-bake.ts
│   │       │   ├── sheet-pan-gnocchi-veg-no-meat-no-dairy.ts
│   │       │   ├── stuffed-bell-peppers-quinoa-beans.ts
│   │       │   ├── stuffed-eggplant-lentils-herbs.ts
│   │       │   ├── stuffed-sweet-potatoes-black-beans-corn-avocado.ts
│   │       │   ├── thai-style-peanut-curry-chickpeas-veg.ts
│   │       │   ├── vegetable-paella-chickpeas-peas.ts
│   │       │   ├── veggie-fried-rice-chickpeas-instead-of-egg-meat.ts
│   │       │   └── zucchini-boats-with-lentil-marinara.ts
│   │       ├── index.ts
│   │       ├── lunch
│   │       │   ├── baked-falafel-salad-bowl-homemade-not-meat.ts
│   │       │   ├── barley-chickpea-greek-bowl.ts
│   │       │   ├── black-bean-corn-salad-meal-prep.ts
│   │       │   ├── brothy-miso-mushroom-noodle-soup-no-tofu.ts
│   │       │   ├── creamy-avocado-pea-pasta-green-sauce.ts
│   │       │   ├── creamy-roasted-red-pepper-pasta-salad-no-dairy.ts
│   │       │   ├── creamy-white-bean-broccoli-baked-potato-bowl.ts
│   │       │   ├── curried-chickpea-tuna-sandwich-no-mayo-needed.ts
│   │       │   ├── ginger-carrot-red-lentil-soup.ts
│   │       │   ├── index.ts
│   │       │   ├── lemon-dill-white-bean-cucumber-salad.ts
│   │       │   ├── lentil-veggie-soup-one-pot.ts
│   │       │   ├── mediterranean-chickpea-salad-wraps.ts
│   │       │   ├── mediterranean-wrap.ts
│   │       │   ├── minestrone-beans-veg-pasta.ts
│   │       │   ├── quinoa-tabbouleh-chickpeas.ts
│   │       │   ├── rainbow-quinoa-bowl-lemon-tahini.ts
│   │       │   ├── red-beans-rice.ts
│   │       │   ├── roasted-beet-orange-walnut-salad.ts
│   │       │   ├── roasted-carrot-lentil-wraps-with-tahini.ts
│   │       │   ├── roasted-cauliflower-tahini-rice-bowl.ts
│   │       │   ├── roasted-veg-lentil-salad-lemon-mustard.ts
│   │       │   ├── roasted-veggie-hummus-pita.ts
│   │       │   ├── sesame-ginger-cabbage-noodle-soup-quick.ts
│   │       │   ├── smashed-chickpea-pita-with-pickles-greens.ts
│   │       │   ├── smoky-black-bean-quesadilla-no-cheese.ts
│   │       │   ├── smoky-corn-black-bean-rice-salad.ts
│   │       │   ├── spicy-peanut-soba-noodle-bowl-no-tofu.ts
│   │       │   ├── split-pea-soup-thick-cozy.ts
│   │       │   ├── sweet-potato-white-bean-kale-salad.ts
│   │       │   ├── tomato-basil-white-bean-toasts.ts
│   │       │   ├── tomato-white-bean-pizza-toasts.ts
│   │       │   ├── warm-farro-bowl-with-mushrooms-spinach.ts
│   │       │   └── white-bean-mash.ts
│   │       └── snack
│   │           ├── apple-nachos-pb-seeds.ts
│   │           ├── classic-hummus-creamy.ts
│   │           ├── date-tahini-energy-bites.ts
│   │           ├── edamame-alternative-snack-lemon-garlic-green-peas-warm.ts
│   │           ├── guacamole-veggie-sticks.ts
│   │           ├── index.ts
│   │           ├── kimchi.ts
│   │           ├── quick-pickled-cucumbers.ts
│   │           ├── roasted-chickpeas-crunchy.ts
│   │           ├── smoky-salsa-style-black-bean-dip.ts
│   │           ├── spiced-nuts-pan-toasted.ts
│   │           └── warm-cinnamon-walnuts.ts
│   ├── theme
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       ├── bookmarkStorage.ts
│       ├── dateUtils.ts
│       ├── formatAmount.ts
│       └── recipeSelector.ts
└── tsconfig.json
```

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm start`: run the Expo dev server.
- `npm run ios`: open in iOS simulator.
- `npm run android`: open in Android emulator/device.
- `npm run web`: run the web preview.

## Coding Style & Naming Conventions
- TypeScript only; prefer explicit types for new data or component props.
- Keep files ≤300 lines; split components or utilities if needed.
- Naming: components in PascalCase (`MealButton.tsx`), utilities in camelCase (`recipeSelector.ts`), data files in kebab-case (`overnight-oats.ts`).
- Styling uses React Native `StyleSheet` and shared tokens in `src/theme/index.ts`.

## Testing Guidelines
- No automated test runner is configured yet.
- Validate changes by running `npm start` and checking screens in Expo Go or simulators.

## Commit & Pull Request Guidelines
- Commit messages follow Conventional Commits (e.g., `feat:`, `refactor:`, `fix:`).
- PRs should include:
  - A short summary and rationale.
  - Steps to verify (commands or screens tested).
  - Screenshots for UI changes (before/after if helpful).
  - Documentation updates when changing data formats, structure, or core logic.

## Documentation Sync
- Any fundamental change to the codebase (new/removed feature, function, logic, or significant behavior change) must be reflected in `README.md` or the relevant `.md` docs.
- When implementing planned or new features, record them in the appropriate documentation (for example, the README roadmap or a relevant file under `docs/`).
- If the directory structure changes or grows, update both `README.md` and `AGENTS.md` so paths stay easy to discover.

## Data & Content Updates
- New recipes go in `src/data/recipes/<mealType>/` and must be exported from the corresponding `index.ts`.
- Keep recipe IDs, file names, and assets aligned (kebab-case recommended).
- Add any new images to `assets/recipes/` and reference them in the recipe module.
