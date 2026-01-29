# Vegan Daily Project Context

## Project Overview
**Vegan Daily** is a React Native mobile application built with **Expo Go** that provides daily vegan meal suggestions (Breakfast, Lunch, Dinner). It follows a privacy-first, no-account approach, storing user preferences (bookmarks) locally.

## Technology Stack
- **Framework:** React Native (via Expo SDK 54)
- **Language:** TypeScript (Strict mode enabled)
- **Navigation:** Expo Router (`app` directory-based routing)
- **State Management:** React Context (`BookmarkContext`, `DailyRecipeContext`)
- **Persistence:** `@react-native-async-storage/async-storage` for bookmarks
- **Styling:** React Native `StyleSheet` API & `@expo/vector-icons`

## Architecture & Structure
The project follows a modular architecture with strict code-splitting rules.

### Key Directories
- `app/`: Expo Router pages.
  - `(tabs)/`: Main tab navigation (Home, Browse, Bookmarks).
  - `recipe/`: Dynamic recipe details and lists.
- `src/components/`: UI components (PascalCase).
- `src/data/recipes/`: Static recipe data organized by meal type.
- `src/context/`: React Context providers for app-wide state.
- `src/utils/`: Helper functions (camelCase).
- `assets/`: Static assets (images, fonts).

### Data Model
Recipes are static TypeScript objects defined in `src/data/recipes`.
- **Recipe Interface:** Defined in `src/types/index.ts`.
- **Selection Logic:** Deterministic daily selection based on the date (see `src/context/DailyRecipeContext.tsx`).

## Development Conventions

### Critical Rules
1.  **300-Line Limit:** **STRICTLY ENFORCED**. No file should exceed 300 lines. Refactor and split if approaching this limit.
2.  **TypeScript:** All code must be fully typed. `noImplicitAny` is implied by strict mode.
3.  **Functional Components:** Use React Functional Components with Hooks.

### Naming Conventions
- **Components:** `PascalCase.tsx` (e.g., `RecipeCard.tsx`)
- **Utilities:** `camelCase.ts` (e.g., `dateUtils.ts`)
- **Data Files:** `kebab-case.ts` (e.g., `overnight-oats.ts`)

### Commit & Pull Request Guidelines
- Commit messages follow Conventional Commits (e.g., `feat:`, `refactor:`, `fix:`).
- PRs should include:
  - A short summary and rationale.
  - Steps to verify (commands or screens tested).
  - Screenshots for UI changes (before/after if helpful).
  - Documentation updates when changing data formats, structure, or core logic.

### Documentation Sync
- Any fundamental change to the codebase (new/removed feature, function, logic, or significant behavior change) must be reflected in `README.md` or the relevant `.md` docs.
- When implementing planned or new features, record them in the appropriate documentation (for example, the README roadmap or a relevant file under `docs/`).
- If the directory structure changes or grows, update both `README.md` and `AGENTS.md` so paths stay easy to discover.

### Data & Content Updates
- New recipes go in `src/data/recipes/<mealType>/` and must be exported from the corresponding `index.ts`.
- Keep recipe IDs, file names, and assets aligned (kebab-case recommended).
- Add any new images to `assets/recipes/` and reference them in the recipe module.

## Build & Run
This project uses standard Expo CLI commands.

```bash
# Install dependencies
npm install

# Start the development server
npm start

# Run on specific platform
npm run android
npm run ios
npm run web
```

## Testing Strategy
- **Manual Verification:** Currently relies on manual testing via Expo Go app on physical devices or emulators. Validate changes by running `npm start` and checking screens in Expo Go or simulators.
- **No CI/CD:** No automated testing pipeline is currently configured.
