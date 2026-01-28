// Bookmark Button Component for Recipe Display
// Floating action button style bookmark toggle

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { useBookmarks } from '../context/BookmarkContext';

interface BookmarkButtonProps {
    recipeId: string;
    variant?: 'pill' | 'icon';
}

/**
 * Bookmark button for recipe view
 */
export const BookmarkButton: React.FC<BookmarkButtonProps> = ({ 
    recipeId, 
    variant = 'pill' 
}) => {
    const { isBookmarked, toggleBookmark } = useBookmarks();
    const bookmarked = isBookmarked(recipeId);

    const handlePress = () => {
        toggleBookmark(recipeId);
    };

    if (variant === 'icon') {
        return (
            <TouchableOpacity onPress={handlePress} activeOpacity={0.7} style={styles.iconButton}>
                <Ionicons 
                    name={bookmarked ? "bookmark" : "bookmark-outline"} 
                    size={24} 
                    color={theme.colors.textOnPrimary} 
                />
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={[styles.button, bookmarked && styles.buttonActive]}
            onPress={handlePress}
            activeOpacity={0.85}
        >
            <Ionicons 
                name={bookmarked ? "bookmark" : "bookmark-outline"} 
                size={20} 
                color={bookmarked ? theme.colors.textOnPrimary : theme.colors.text} 
            />
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
    iconButton: {
        padding: 8,
    },
    // headerIcon and icon styles removed as size is passed via props
    label: {
        fontSize: theme.typography.sizes.md,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.text,
    },
    labelActive: {
        color: theme.colors.textOnPrimary,
    },
});
