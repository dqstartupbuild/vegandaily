import { View, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Header } from '../../src/components/Header';
import { MealButton } from '../../src/components/MealButton';
import { theme } from '../../src/theme';
import { MealType } from '../../src/types';

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
