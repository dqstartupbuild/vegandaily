// Bookmark Button Component for Recipe Display
// Floating action button style bookmark toggle

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { theme } from '../theme';
import { useBookmarks } from '../context/BookmarkContext';

interface BookmarkButtonProps {
    recipeId: string;
}

/**
 * Floating bookmark button for recipe detail view
 */
export const BookmarkButton: React.FC<BookmarkButtonProps> = ({ recipeId }) => {
    const { isBookmarked, toggleBookmark } = useBookmarks();
    const bookmarked = isBookmarked(recipeId);

    const handlePress = () => {
        toggleBookmark(recipeId);
    };

    return (
        <TouchableOpacity
            style={[styles.button, bookmarked && styles.buttonActive]}
            onPress={handlePress}
            activeOpacity={0.85}
        >
            <Text style={styles.icon}>{bookmarked ? '🔖' : '📑'}</Text>
            <Text style={[styles.label, bookmarked && styles.labelActive]}>
                {bookmarked ? 'Saved' : 'Save'}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.full,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.md,
        borderWidth: 2,
        borderColor: theme.colors.border,
        ...theme.shadows.md,
        gap: theme.spacing.sm,
    },
    buttonActive: {
        backgroundColor: theme.colors.primaryLight,
        borderColor: theme.colors.primary,
    },
    icon: {
        fontSize: 20,
    },
    label: {
        fontSize: theme.typography.sizes.md,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.text,
    },
    labelActive: {
        color: theme.colors.textOnPrimary,
    },
});
