// Recipe Card Component for Browse and Bookmarks views
// Displays a compact recipe preview with bookmark button

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { Recipe, MealType } from '../types';
import { useBookmarks } from '../context/BookmarkContext';

interface RecipeCardProps {
    recipe: Recipe;
    onPress: () => void;
}

const mealIcons: Record<MealType, keyof typeof MaterialCommunityIcons.glyphMap> = {
    breakfast: 'coffee-outline',
    lunch: 'white-balance-sunny',
    dinner: 'weather-night',
    dessert: 'cookie-outline',
    snack: 'popcorn',
    bread: 'bread-slice',
};

const difficultyColors = {
    easy: theme.colors.success,
    medium: theme.colors.warning,
    hard: theme.colors.error,
};

/**
 * Compact recipe card for list views
 */
export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress }) => {
    const { isBookmarked, toggleBookmark } = useBookmarks();
    const bookmarked = isBookmarked(recipe.id);

    const handleBookmarkPress = () => {
        toggleBookmark(recipe.id);
    };

    const totalTime = recipe.prepTime + recipe.cookTime;

    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
            {/* Meal Type Badge or Image */}
            {recipe.image ? (
                <Image source={recipe.image} style={styles.thumbnail} />
            ) : (
                <View style={styles.mealBadge}>
                    <MaterialCommunityIcons 
                        name={mealIcons[recipe.mealType]} 
                        size={24} 
                        color={theme.colors.primary} 
                    />
                </View>
            )}

            {/* Main Content */}
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={1}>
                    {recipe.name}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                    {recipe.description}
                </Text>

                {/* Meta Info */}
                <View style={styles.metaRow}>
                    <View style={styles.metaItem}>
                        <Ionicons name="time-outline" size={14} color={theme.colors.textLight} style={styles.metaIcon} />
                        <Text style={styles.metaText}>{totalTime} min</Text>
                    </View>
                    <View style={[styles.difficultyBadge, { backgroundColor: difficultyColors[recipe.difficulty] }]}>
                        <Text style={styles.difficultyText}>{recipe.difficulty}</Text>
                    </View>
                </View>
            </View>

            {/* Bookmark Button */}
            <TouchableOpacity style={styles.bookmarkButton} onPress={handleBookmarkPress} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Ionicons 
                    name={bookmarked ? "bookmark" : "bookmark-outline"} 
                    size={24} 
                    color={bookmarked ? theme.colors.primary : theme.colors.textLight} 
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        marginHorizontal: theme.spacing.lg,
        marginVertical: theme.spacing.sm,
        padding: theme.spacing.md,
        ...theme.shadows.sm,
    },
    mealBadge: {
        width: 48,
        height: 48,
        borderRadius: theme.borderRadius.md,
        backgroundColor: theme.colors.surfaceElevated,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: theme.spacing.md,
    },
    thumbnail: {
        width: 48,
        height: 48,
        borderRadius: theme.borderRadius.md,
        marginRight: theme.spacing.md,
        backgroundColor: theme.colors.surfaceElevated,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: theme.typography.sizes.md,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
        marginBottom: theme.spacing.xs,
    },
    description: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        lineHeight: 18,
        marginBottom: theme.spacing.sm,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    metaIcon: {
        marginRight: theme.spacing.xs,
    },
    metaText: {
        fontSize: theme.typography.sizes.xs,
        color: theme.colors.textLight,
    },
    difficultyBadge: {
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: 2,
        borderRadius: theme.borderRadius.sm,
    },
    difficultyText: {
        fontSize: theme.typography.sizes.xs,
        color: theme.colors.textOnPrimary,
        fontWeight: theme.typography.weights.medium,
        textTransform: 'capitalize',
    },
    bookmarkButton: {
        justifyContent: 'center',
        paddingLeft: theme.spacing.sm,
    },
});
