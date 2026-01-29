import { View, StyleSheet } from 'react-native';
import { Metadata } from '../../../src/components/Metadata';
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
            <Metadata 
                title={recipe.name}
                description={recipe.description}
                canonicalPath={`/recipe/detail/${recipe.id}`}
                ogImage={recipe.image ? (typeof recipe.image === 'string' ? recipe.image : undefined) : undefined}
            />
            <Stack.Screen
                options={{
                    headerTitle: recipe.name,
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
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
