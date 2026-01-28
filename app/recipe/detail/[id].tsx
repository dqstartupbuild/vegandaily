import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { RecipeDisplay } from '../../../src/components/RecipeDisplay';
import { BookmarkButton } from '../../../src/components/BookmarkButton';
import { getRecipeById } from '../../../src/data/recipes';
import { theme } from '../../../src/theme';

/**
 * Recipe detail screen - displays a specific recipe by ID
 * Used when navigating from Browse or Bookmarks
 */
export default function RecipeDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const recipe = id ? getRecipeById(id) : undefined;

    if (!recipe) {
        return (
            <View style={styles.container}>
                <Stack.Screen options={{ headerTitle: 'Recipe Not Found' }} />
                <View style={styles.errorContainer}>
                    {/* Error state is handled in the RecipeDisplay */}
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle: recipe.name,
                }}
            />
            <RecipeDisplay recipe={recipe} />
            
            {/* Floating Bookmark Button */}
            <View style={styles.bookmarkContainer}>
                <BookmarkButton recipeId={recipe.id} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookmarkContainer: {
        position: 'absolute',
        bottom: theme.spacing.xl,
        right: theme.spacing.lg,
        left: theme.spacing.lg,
        alignItems: 'center',
    },
});
