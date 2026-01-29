import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Header } from '../../src/components/Header';
import { MealButton } from '../../src/components/MealButton';
import { theme } from '../../src/theme';
import { MealType } from '../../src/types';
import { Metadata } from '../../src/components/Metadata';

/**
 * Home screen with meal selection buttons
 */
export default function HomeScreen() {
    const router = useRouter();

    const handleMealPress = (mealType: MealType) => {
        router.push(`/recipe/${mealType}`);
    };

    return (
        <View style={styles.container}>
            <Metadata 
                title="Daily Meal Suggestions"
                description="Get your daily dose of breakfast, lunch, and dinner vegan recipe ideas."
                canonicalPath="/home"
            />
            <Header showDate={true} />

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <MealButton
                    mealType="breakfast"
                    onPress={() => handleMealPress('breakfast')}
                />
                <MealButton
                    mealType="lunch"
                    onPress={() => handleMealPress('lunch')}
                />
                <MealButton
                    mealType="dinner"
                    onPress={() => handleMealPress('dinner')}
                />
                <MealButton
                    mealType="dessert"
                    onPress={() => handleMealPress('dessert')}
                />
                <MealButton
                    mealType="snack"
                    onPress={() => handleMealPress('snack')}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: theme.spacing.lg,
    },
});
