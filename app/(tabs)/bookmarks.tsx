import React, { useMemo } from 'react';
import { Metadata } from '../../src/components/Metadata';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../src/theme';
import { Recipe } from '../../src/types';
import { getRecipeById } from '../../src/data/recipes';
import { useBookmarks } from '../../src/context/BookmarkContext';
import { RecipeCard } from '../../src/components/RecipeCard';
import { EmptyState } from '../../src/components/EmptyState';

/**
 * Bookmarks screen - displays saved recipes
 */
export default function BookmarksScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { bookmarks, isLoading } = useBookmarks();

    // Convert bookmark IDs to recipe objects
    const bookmarkedRecipes = useMemo(() => {
        const recipes: Recipe[] = [];
        for (const id of bookmarks) {
            const recipe = getRecipeById(id);
            if (recipe) {
                recipes.push(recipe);
            }
        }
        return recipes;
    }, [bookmarks]);

    const handleRecipePress = (recipe: Recipe) => {
        router.push(`/recipe/detail/${recipe.id}`);
    };

    const renderRecipe = ({ item }: { item: Recipe }) => (
        <RecipeCard recipe={item} onPress={() => handleRecipePress(item)} />
    );

    if (isLoading) {
        return (
            <View style={styles.container}>
                <View style={[styles.header, { paddingTop: insets.top + theme.spacing.md }]}>
                    <Text style={styles.headerTitle}>My Bookmarks</Text>
                </View>
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Metadata 
                title="My Bookmarked Recipes"
                description="Easily access all your favorite saved vegan recipes in one place. Your personalized plant-based cookbook."
                canonicalPath="/bookmarks"
            />
            {/* Header */}
            <View style={[styles.header, { paddingTop: insets.top + theme.spacing.md }]}>
                <Text style={styles.headerTitle}>My Bookmarks</Text>
                <Text style={styles.headerSubtitle}>
                    {bookmarkedRecipes.length} saved recipe{bookmarkedRecipes.length !== 1 ? 's' : ''}
                </Text>
            </View>

            {/* Bookmarked Recipes List */}
            {bookmarkedRecipes.length > 0 ? (
                <FlatList
                    data={bookmarkedRecipes}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRecipe}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <EmptyState
                    iconName="bookmark-outline"
                    title="No saved recipes yet"
                    message="Tap the bookmark icon on any recipe to save it here for quick access."
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.md,
        paddingBottom: theme.spacing.lg,
    },
    headerTitle: {
        fontSize: theme.typography.sizes.xl,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.textOnPrimary,
    },
    headerSubtitle: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textOnPrimary,
        opacity: 0.8,
        marginTop: theme.spacing.xs,
    },
    listContent: {
        paddingTop: theme.spacing.md,
        paddingBottom: theme.spacing.xl,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        fontSize: theme.typography.sizes.md,
        color: theme.colors.textSecondary,
    },
});
