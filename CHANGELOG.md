# Changelog

All notable changes to Vegan Daily will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2026-01-29

### Added
- **Settings Screen**: New application settings page accessible via the dashboard.
  - Displays application version dynamically using `expo-constants`.
  - Added "Made with 💚 for Vegan Cooking" attribution.
- **Support Page**: Dedicated support page mandated by Apple for App Store submission.
  - Links to X (@dqstartupbuild) and email (support@followusai.com).
  - Includes Frequently Asked Questions (FAQ) for quick user assistance.
- **Header Navigation**: Integrated a settings icon (cog) in the global Header for easy access to the Settings screen.
- **Custom 404 Page**: Added a themed `+not-found.tsx` page to handle broken links gracefully with a custom "withered plant" aesthetic.
- **SEO & Web**:
  - Created a static `public/sitemap.xml` for better search engine discovery.
  - Added `public/robots.txt` to guide search crawlers.

### Changed
- **Footer Updates**: Added a "Support" link to the web landing page footer in the legal section.
- **App Store Readiness**: Updated documentation and checklists for App Store submission status.

---

## [1.3.1] - 2026-01-28

### Fixed
- **Splash Screen**: Resolved "target icon" placeholder issue on iOS/Android by optimizing app branding assets.
  - Reduced `icon.png`, `splash-icon.png`, and `adaptive-icon.png` from 1.4MB to ~388KB (70% reduction).
  - Resized branding assets to 512x512 for better compatibility.
- **App Configuration**: Cleaned up `app.json` asset paths and added missing platform identifiers (`bundleIdentifier`, `package`).

### Added
- **Startup Management**: Integrated `expo-splash-screen` to manage the transition from splash to app, preventing initial flashes and ensuring theme colors are respected.

---

## [1.3.0] - 2026-01-28

### Performance
- **Image Optimization**: Optimized 117 recipe images, reducing total asset size from ~292MB to ~12MB (95% reduction).
  - Converted all recipe images from PNG to WebP.
  - Resized high-resolution images to max 1000px dimensions.
  - Applied quality compression for efficient mobile delivery.

### Changed
- Updated all recipe data modules to reference optimized `.webp` assets.
- Updated documentation (README.md, AGENTS.md) to reflect the new asset structure.

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
