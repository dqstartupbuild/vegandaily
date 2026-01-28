# Recipe App Features and Roadmap

# Product Development: Recipe App Features

## Core Functionality: Bookmarks and Persistence
- **Favorite/Bookmark System**: Users must be able to save recipes to a dedicated "Bookmarks" or "Favorites" tab.
- **Monetization (Paywall)**: Access to the bookmark feature will be restricted to **paid users**.
- **Data Persistence**: Data must be saved locally on the user's device.
    - **Implementation**: Since this is a **React Native Expo** app, we cannot use Swift-native Core Data. We must use the standard local storage solutions for the Expo environment (e.g., **AsyncStorage**, **SQLite**, or **Expo SecureStore**).

## Social and Community Features
- **Recipe Ratings**: Implement a rating system where users can rate recipes on a scale of **1 to 5 stars**.
- **User Comments**: Provide a way for users to leave comments on specific recipes.
- **Cross-Device Syncing**: While recipes are stored in the local repository, **comments and ratings** must be sent to a **backend database** (to be implemented) so they can be shared and displayed to all users across all devices.

## Navigation and App Structure
### Home Page Tab (Default)
- **Header**: Displays "Vegan Daily" and the current date.
- **Categories**: Shows three main categories: **Breakfast**, **Lunch**, and **Dinner**.
- **Launch Behavior**: This remains the primary screen when the user launches the app.

### Browse Tab
- **Discovery**: A separate tab for users to scroll through all available recipes.
- **Search**: Must include a functional search bar for specific recipe lookup.
- **Monetization (Paywall)**: This feature will be restricted to paid users once payment systems are integrated.

### Bookmarks Tab
- **Storage**: A dedicated third tab for accessing saved recipes.
- **Accessibility**: Users can quickly toggle between Home, Browse, and Bookmarks.

## Monetization Strategy
- **Payment Gateway**: Integration will be handled via **RevenueCat**.
- **Gated Features**:
    - **Browse Tab**: Requires a subscription/payment.
    - **Bookmarks/Favorites**: Requires a subscription/payment.

## Media and Assets
- **Recipe Images**: Need to ensure images are correctly displayed when added to the repository.
- **UI/UX Design**: Develop a high-quality, aesthetic way to display recipe images within the app interface.

## Action Items
- [ ] **Data Management**: Research and implement local storage persistence specific to **React Native Expo** (e.g., SQLite or AsyncStorage).
- [ ] **Social Integration**: Design the backend architecture for storing and fetching global **ratings and comments**.
- [ ] **UI Development**: Design and build the **Bookmarks/Favorites** tab.
- [ ] **Rating System**: Build the UI components for the 1-5 star rating and comment section.
- [ ] **Search & Discovery**: Create the **Browse** tab with scroll and search functionality.
- [ ] **Monetization**: Integrate **RevenueCat** for payment processing.
- [ ] **Feature Gating**: Implement logic to gate the **Browse** tab and **Bookmarks** feature behind a payment/subscription wall.
- [ ] **Media Optimization**: Optimize the image loading and display system for the recipe repository.