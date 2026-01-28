import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { RecipeDisplay } from '../../src/components/RecipeDisplay';
import { BookmarkButton } from '../../src/components/BookmarkButton';
import { getDailyRecipe } from '../../src/utils/recipeSelector';
import { MealType } from '../../src/types';
import { theme } from '../../src/theme';

const mealLabels: Record<MealType, string> = {
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
};

/**
 * Recipe screen - displays the daily recipe for a meal type
 */
export default function RecipeScreen() {
    const { mealType } = useLocalSearchParams<{ mealType: MealType }>();

    // Validate meal type
    const validMealType: MealType =
        mealType === 'breakfast' || mealType === 'lunch' || mealType === 'dinner'
            ? mealType
            : 'breakfast';

    const recipe = getDailyRecipe(validMealType);
    const headerTitle = `Today's ${mealLabels[validMealType]}`;

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle,
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
    bookmarkContainer: {
        position: 'absolute',
        bottom: theme.spacing.xl,
        right: theme.spacing.lg,
        left: theme.spacing.lg,
        alignItems: 'center',
    },
});
