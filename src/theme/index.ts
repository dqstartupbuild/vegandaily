// Theme constants for Vegan Daily app
// Centralized styling for consistent design

export const colors = {
    // Primary palette - fresh vegan greens
    primary: '#2D5A27',
    primaryLight: '#4A8B3C',
    primaryDark: '#1E3D1A',

    // Secondary palette - warm earth tones
    secondary: '#E8A54D',
    secondaryLight: '#F4C47A',
    secondaryDark: '#C47A20',

    // Backgrounds
    background: '#FAFDF8',
    surface: '#FFFFFF',
    surfaceElevated: '#F5F9F3',

    // Text colors
    text: '#1A1A1A',
    textSecondary: '#5C6B58',
    textLight: '#8A9688',
    textOnPrimary: '#FFFFFF',

    // Semantic colors
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',

    // Borders and dividers
    border: '#E0E7DC',
    divider: '#E8EFE4',
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const typography = {
    sizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
        xxl: 32,
        hero: 40,
    },
    weights: {
        regular: '400' as const,
        medium: '500' as const,
        semibold: '600' as const,
        bold: '700' as const,
    },
    lineHeights: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75,
    },
};

export const borderRadius = {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
};

export const shadows = {
    sm: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    md: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    lg: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
    },
};

export const theme = {
    colors,
    spacing,
    typography,
    borderRadius,
    shadows,
};

export default theme;
