import React, { useEffect } from 'react';
import { Metadata } from '../../src/components/Metadata';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { RecipeDisplay } from '../../src/components/RecipeDisplay';
import { BookmarkButton } from '../../src/components/BookmarkButton';
import { useDailyRecipe } from '../../src/context/DailyRecipeContext';
import { getRecipeById } from '../../src/data/recipes';
import { MealType } from '../../src/types';
import { theme } from '../../src/theme';

const mealLabels: Record<MealType, string> = {
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    dessert: 'Dessert',
    snack: 'Snack',
    bread: 'Bread',
};

/**
 * Recipe screen - displays the daily recipe for a meal type
 */
export default function RecipeScreen() {
    const { mealType } = useLocalSearchParams<{ mealType: MealType }>();
    const { getDailyRecipeId, isLoading: isContextLoading } = useDailyRecipe();
    const router = useRouter();

    // Validate meal type
    const validMealType: MealType =
        mealType === 'breakfast' ||
        mealType === 'lunch' ||
        mealType === 'dinner' ||
        mealType === 'dessert' ||
        mealType === 'snack' ||
        mealType === 'bread'
            ? mealType
            : 'breakfast';

    // Get persisted daily recipe ID
    const recipeId = getDailyRecipeId(validMealType);
    const recipe = recipeId ? getRecipeById(recipeId) : null;
    
    const headerTitle = `Today's ${mealLabels[validMealType]}`;

    if (isContextLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    if (!recipe) {
        return (
            <View style={styles.container}>
                 <Stack.Screen options={{ headerTitle }} />
                 <View style={styles.centerContent}>
                    <Text>Recipe not found. Please try again.</Text>
                 </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Metadata 
                title={headerTitle}
                description={`Check out today's featured ${mealLabels[validMealType].toLowerCase()} vegan recipe: ${recipe.name}.`}
                canonicalPath={`/recipe/${validMealType}`}
                ogImage={recipe.image ? (typeof recipe.image === 'string' ? recipe.image : undefined) : undefined}
            />
            <Stack.Screen
                options={{
                    headerTitle,
                    headerRight: () => <BookmarkButton recipeId={recipe.id} variant="icon" />,
                }}
            />
            <RecipeDisplay recipe={recipe} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
