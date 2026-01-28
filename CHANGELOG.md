# Changelog

All notable changes to Vegan Daily will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-01-27

### Added
- **Browse Tab**: Full recipe discovery with searching and filtering
  - Search by recipe name, description, tags, or ingredients
  - Filter by meal type (Breakfast, Lunch, Dinner)
- **Bookmarks Feature**: Save recipes for quick access
  - Persistent local storage using AsyncStorage
  - `BookmarkProvider` context for app-wide bookmark state
  - Bookmark toggle in both daily and detail recipe views
- **Navigation Overhaul**: Switched to tab-based navigation
  - New Home, Browse, and Bookmarks tabs
  - Updated path structure for dynamic recipe routing
- **New Components**:
  - `RecipeCard`: Compact preview for list views
  - `SearchBar`: Styled search input with clear function
  - `FilterChips`: Horizontal scrollable meal type filters
  - `BookmarkButton`: Floating action button for recipe detail
  - `EmptyState`: Placeholder for empty browse/bookmark lists

---

## [1.1.0] - 2026-01-27

### Added
- **Servings Adjuster**: Users can now increase/decrease servings with +/- buttons
- **Dynamic Ingredient Scaling**: Ingredient amounts automatically update based on selected servings
- **Fraction Formatting**: Amounts display as fractions (1/2, 1/4, 3/4) instead of decimals for better readability
- New `ServingsAdjuster` component
- New `formatAmount` utility for decimal-to-fraction conversion

### Changed
- Moved servings display from static header meta to interactive adjuster
- Updated project documentation
- Replaced boilerplate Expo icons with custom vegan branding (icon, adaptive-icon, splash, favicon)
- Corrected utility import paths in components

---

## [1.0.0] - 2026-01-27

### Added
- Initial app structure with Expo Router
- Three starter recipes:
  - **Breakfast**: Classic Overnight Oats
  - **Lunch**: Mediterranean Veggie Wrap
  - **Dinner**: Pasta Primavera
- Daily meal suggestion system (deterministic selection based on day of year)
- Home screen with meal type buttons (Breakfast, Lunch, Dinner)
- Recipe display with ingredients, instructions, and nutrition info
- Comprehensive documentation (README.md)

### Technical
- TypeScript support throughout
- Strict 300-line file limit for code splitting
- Modular component architecture
- Centralized theme system (colors, spacing, typography)
