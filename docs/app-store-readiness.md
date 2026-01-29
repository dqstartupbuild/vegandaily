# App Store Readiness Assessment: Vegan Daily 🌱

This document outlines the current state of the Vegan Daily application and provides a checklist of requirements to successfully ship to the Apple App Store and Google Play Store.

## Current Status: **MVP+ Stable** 🟢

The application is functionally complete and follows the core philosophy of a simple, no-account-required daily recipe suggester.

---

## 🟢 What is Ready

- **Core Algorithm**: Deterministic daily selection based on the day of the year is stable.
- **Recipe Data**: Robust library of ~120 recipes across 6 categories.
- **Features**: 
  - Search & Filter (Browse Tab)
  - Persistent Bookmarks (Local Storage)
  - Interactive Servings Adjuster with dynamic scaling.
  - Fraction formatting for readable measurements.
- **Branding**: Custom themed colors, typography, and assets (icons/splash).
- **TypeScript**: 100% type coverage and strict 300-line file limit enforcement.

---

## 🔴 Critical "Must-Haves" for Shipping

These items are mandatory for app store submission and are currently missing from the codebase.

### 1. Store Identifiers (`app.json`)
You must define unique identifiers for both platforms.
- `ios.bundleIdentifier`: e.g., `com.yourname.vegandaily`
- `android.package`: e.g., `com.yourname.vegandaily`

### 2. EAS Configuration (`eas.json`)
To build the production `.ipa` and `.aab` files, you need to initialize EAS (Expo Application Services).
- Run `eas build:configure` or create a manual `eas.json`.

### 3. Legal & Support
- **Privacy Policy**: A public URL is required. Even if no data is collected, this must be stated.
- **Support URL**: A contact point for users (mandated by Apple).
- **In-App Links**: A screen (e.g., "About") where users can access these links.

---

## 🟡 Recommended Polishing

Highly recommended to improve user experience and app performance.

### 1. Image Optimization ⚠️ - COMPLETED
- **Current Issue**: Recipe images are ~2.5MB each. Total app bundle may exceed 300MB.
- **Action**: Compress images to WebP or optimized JPEG to target a total app size under 100MB.

### 2. Assets Validation
- Ensure `adaptive-icon.png` is correctly layered for Android (icon centered on a background).
- Verify splash screen appearance on different aspect ratios (tablet vs phone).

### 3. "About" Screen
Add a settings/info icon to the Home screen to display:
- App Version (1.0.0)
- Link to Privacy Policy
- "Made with ❤️ for Vegan Cooking"

---

## 🚀 Pre-Submission Checklist

- [ ] Update `app.json` with `bundleIdentifier` and `package`.
- [ ] Create `eas.json` for production builds.
- [ ] Compress `assets/recipes/` images.
- [ ] Host a Privacy Policy (GitHub Pages is a good choice).
- [ ] Run `npx expo run:ios --configuration Release` to verify production stability.
- [ ] Generate screenshots for the App Store (6.5" and 5.5" for iOS).

---

*Last Updated: 2026-01-28*
