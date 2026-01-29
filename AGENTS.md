# Repository Guidelines

## Project Structure & Module Organization
- Complete repository tree (excluding generated `.git/`, `.expo/`, and `node_modules/`):
```
vegandaily/
├── .gitignore
├── AGENTS.md
├── CHANGELOG.md
├── README.md
├── app
│   ├── (tabs)
│   │   ├── _layout.tsx
│   │   ├── bookmarks.tsx
│   │   ├── browse.tsx
│   │   └── home.tsx
│   ├── recipe
│   │   ├── [mealType].tsx
│   │   └── detail
│   │       └── [id].tsx
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── index.web.tsx
│   ├── privacy.tsx
│   └── terms.tsx
├── app.json
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── recipes
│   │   ├── bread
│   │   │   ├── naan.webp
│   │   │   └── spelt-tortillas.webp
│   │   ├── breakfast
│   │   │   ├── apple-cinnamon-quinoa-breakfast-bowl.webp
│   │   │   ├── banana-walnut-baked-oatmeal-meal-prep.webp
│   │   │   ├── berry-chia-pudding.webp
│   │   │   ├── blueberry-buckwheat-pancakes.webp
│   │   │   ├── breakfast-burrito-beans-potatoes-salsa.webp
│   │   │   ├── chickpea-flour-omelet-veggies.webp
│   │   │   ├── chickpea-scramble-peppers.webp
│   │   │   ├── chickpeas-toast.webp
│   │   │   ├── cinnamon-apple-overnight-oats.webp
│   │   │   ├── date-nut-breakfast-bars-no-bake.webp
│   │   │   ├── high-fiber-smoothie-bowl-berry-flax.webp
│   │   │   ├── oatmeal-carrot-cake-bowl.webp
│   │   │   ├── omelette.webp
│   │   │   ├── overnight-oats.webp
│   │   │   ├── peanut-butter-banana-smoothie.webp
│   │   │   ├── pear-almond-butter-toast-hemp.webp
│   │   │   ├── pumpkin-pie-overnight-oats.webp
│   │   │   ├── savory-avocado-toast-tomato-hemp.webp
│   │   │   ├── savory-breakfast-lentils-garlic-greens.webp
│   │   │   ├── savory-oatmeal-mushrooms-spinach.webp
│   │   │   ├── sweet-potato-breakfast-hash-beans-greens.webp
│   │   │   ├── warm-millet-porridge-berries.webp
│   │   │   └── warm-quinoa-breakfast-bowl-coconut-mango.webp
│   │   ├── dessert
│   │   │   ├── baked-cinnamon-pears-walnuts.webp
│   │   │   ├── banana-nice-cream-1-ingredient-base.webp
│   │   │   ├── black-bean-brownies.webp
│   │   │   ├── blondies.webp
│   │   │   ├── carrot-cake-bliss-balls.webp
│   │   │   ├── chocolate-avocado-mousse.webp
│   │   │   ├── cinnamon-rolls.webp
│   │   │   ├── coconut-rice-pudding-simple.webp
│   │   │   ├── dark-chocolate-covered-almonds-quick.webp
│   │   │   ├── lemon-blueberry-chia-jam.webp
│   │   │   ├── matcha-cookies.webp
│   │   │   ├── oatmeal-creme-pies.webp
│   │   │   ├── peanut-butter-chocolate-bark-freezer.webp
│   │   │   ├── strawberry-oat-shortcake-bowl.webp
│   │   │   └── warm-apple-crumble-oat-topping.webp
│   │   ├── dinner
│   │   │   ├── black-bean-sweet-potato-chili.webp
│   │   │   ├── butternut-squash-risotto.webp
│   │   │   ├── cabbage-rolls.webp
│   │   │   ├── cashew-tomato-soup-veggie-sandwich.webp
│   │   │   ├── chickpea-shawarma-bowl.webp
│   │   │   ├── coconut-chickpea-curry-spinach.webp
│   │   │   ├── creamy-cashew-tomato-soup-grilled-veggie-sandwich.webp
│   │   │   ├── creamy-coconut-red-lentil-curry.webp
│   │   │   ├── creamy-potato-corn-chowder-no-dairy.webp
│   │   │   ├── creamy-white-bean-tomato-orzo.webp
│   │   │   ├── eggplant-chickpea-tagine.webp
│   │   │   ├── garlic-lemon-broccoli-chickpea-pasta.webp
│   │   │   ├── hearty-lentil-bolognese.webp
│   │   │   ├── jamaican-style-cabbage-beans-over-rice.webp
│   │   │   ├── lemon-garlic-pasta-cannellini-asparagus.webp
│   │   │   ├── lentil-shepherds-pie.webp
│   │   │   ├── moroccan-lentil-stew-carrot-apricot.webp
│   │   │   ├── mushroom-steak-garlic-herb-potatoes.webp
│   │   │   ├── one-pan-pesto-veggie-pasta.webp
│   │   │   ├── one-pot-spanish-beans-greens.webp
│   │   │   ├── pasta-primavera.webp
│   │   │   ├── red-beans-rice-weeknight-version.webp
│   │   │   ├── roasted-cauliflower-tacos-lime-slaw.webp
│   │   │   ├── roasted-veggie-lentil-sausage-free-bake.webp
│   │   │   ├── sheet-pan-gnocchi-veg-no-meat-no-dairy.webp
│   │   │   ├── stuffed-bell-peppers-quinoa-beans.webp
│   │   │   ├── stuffed-eggplant-lentils-herbs.webp
│   │   │   ├── stuffed-sweet-potatoes.webp
│   │   │   ├── thai-peanut-chickpea-curry.webp
│   │   │   ├── vegetable-paella.webp
│   │   │   ├── veggie-fried-rice-chickpeas.webp
│   │   │   └── zucchini-boats-with-lentil-marinara.webp
│   │   ├── lunch
│   │   │   ├── baked-falafel-salad-bowl.webp
│   │   │   ├── barley-chickpea-greek-bowl.webp
│   │   │   ├── black-bean-corn-salad-meal-prep.webp
│   │   │   ├── brothy-miso-mushroom-noodle-soup.webp
│   │   │   ├── creamy-avocado-pea-pasta-green-sauce.webp
│   │   │   ├── creamy-roasted-red-pepper-pasta-salad.webp
│   │   │   ├── creamy-white-bean-broccoli-baked-potato-bowl.webp
│   │   │   ├── curried-chickpea-tuna-sandwich.webp
│   │   │   ├── ginger-carrot-red-lentil-soup.webp
│   │   │   ├── lemon-dill-white-bean-cucumber-salad.webp
│   │   │   ├── lentil-veggie-soup-one-pot.webp
│   │   │   ├── mediterranean-chickpea-salad-wraps.webp
│   │   │   ├── mediterranean-wrap.webp
│   │   │   ├── minestrone-beans-veg-pasta.webp
│   │   │   ├── quinoa-tabbouleh-chickpeas.webp
│   │   │   ├── rainbow-quinoa-bowl-lemon-tahini.webp
│   │   │   ├── red-beans-rice.webp
│   │   │   ├── red-beans.webp
│   │   │   ├── roasted-beet-orange-walnut-salad.webp
│   │   │   ├── roasted-carrot-lentil-wraps-tahini.webp
│   │   │   ├── roasted-cauliflower-tahini-rice-bowl.webp
│   │   │   ├── roasted-veg-lentil-salad-lemon-mustard.webp
│   │   │   ├── roasted-veggie-hummus-pita.webp
│   │   │   ├── sesame-ginger-cabbage-noodle-soup.webp
│   │   │   ├── smashed-chickpea-pita-pickles-greens.webp
│   │   │   ├── smoky-black-bean-quesadilla-no-cheese.webp
│   │   │   ├── smoky-corn-black-bean-rice-salad.webp
│   │   │   ├── spicy-peanut-soba-noodle-bowl.webp
│   │   │   ├── split-pea-soup-thick-cozy.webp
│   │   │   ├── sweet-potato-white-bean-kale-salad.webp
│   │   │   ├── tomato-basil-white-bean-toasts.webp
│   │   │   ├── tomato-white-bean-pizza-toasts.webp
│   │   │   ├── warm-farro-bowl-mushrooms-spinach.webp
│   │   │   └── white-bean-mash.webp
│   │   └── snack
│   │       ├── apple-nachos-pb-seeds.webp
│   │       ├── classic-hummus-creamy.webp
│   │       ├── date-tahini-energy-bites.webp
│   │       ├── guacamole-veggie-sticks.webp
│   │       ├── kimchi.webp
│   │       ├── lemon-garlic-green-peas-warm.webp
│   │       ├── quick-pickled-cucumbers.webp
│   │       ├── roasted-chickpeas-crunchy.webp
│   │       ├── smoky-salsa-style-black-bean-dip.webp
│   │       ├── spiced-nuts-pan-toasted.webp
│   │       └── warm-cinnamon-walnuts.webp
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
