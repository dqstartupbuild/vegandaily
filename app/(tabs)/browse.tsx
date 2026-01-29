import React, { useState, useMemo, useCallback } from 'react';
import { Metadata } from '../../src/components/Metadata';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../src/theme';
import { MealType, Recipe } from '../../src/types';
import { getAllRecipesList } from '../../src/data/recipes';
import { SearchBar } from '../../src/components/SearchBar';
import { FilterChips } from '../../src/components/FilterChips';
import { RecipeCard } from '../../src/components/RecipeCard';
import { EmptyState } from '../../src/components/EmptyState';

type FilterOption = 'all' | MealType;

/**
 * Browse screen - displays all recipes with search and filter
 */
export default function BrowseScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<FilterOption>('all');

    // Get all recipes
    const allRecipes = useMemo(() => getAllRecipesList(), []);

    // Filter recipes based on search and meal type
    const filteredRecipes = useMemo(() => {
        let recipes = allRecipes;

        // Filter by meal type
        if (filter !== 'all') {
            recipes = recipes.filter((recipe) => recipe.mealType === filter);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            recipes = recipes.filter(
                (recipe) =>
                    recipe.name.toLowerCase().includes(query) ||
                    recipe.description.toLowerCase().includes(query) ||
                    recipe.tags.some((tag) => tag.toLowerCase().includes(query)) ||
                    recipe.ingredients.some((ing) => ing.name.toLowerCase().includes(query))
            );
        }

        return recipes;
    }, [allRecipes, filter, searchQuery]);

    const handleRecipePress = useCallback((recipeId: string) => {
        router.push(`/recipe/detail/${recipeId}`);
    }, [router]);

    const renderRecipe = useCallback(({ item }: { item: Recipe }) => {
        return <RecipeCard recipe={item} onPress={handleRecipePress} />;
    }, [handleRecipePress]);

    return (
        <View style={styles.container}>
            <Metadata 
                title="Browse All Recipes"
                description="Explore our full collection of easy vegan recipes. Search by ingredients or filter by meal type."
                canonicalPath="/browse"
            />
            {/* Header */}
            <View style={[styles.header, { paddingTop: insets.top + theme.spacing.md }]}>
                <Text style={styles.headerTitle}>Browse Recipes</Text>
                <Text style={styles.headerSubtitle}>
                    {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
                </Text>
            </View>

            {/* Search Bar */}
            <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search recipes, ingredients..."
            />

            {/* Filter Chips */}
            <FilterChips selected={filter} onSelect={setFilter} />

            {/* Recipe List */}
            {filteredRecipes.length > 0 ? (
                <FlatList
                    data={filteredRecipes}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRecipe}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <EmptyState
                    iconName="search-outline"
                    title="No recipes found"
                    message={
                        searchQuery
                            ? `No recipes match "${searchQuery}". Try a different search term.`
                            : 'No recipes in this category yet.'
                    }
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
        paddingBottom: theme.spacing.xl,
    },
});
