import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../src/theme';
import { BookmarkProvider } from '../src/context/BookmarkContext';
import { DailyRecipeProvider } from '../src/context/DailyRecipeContext';

/**
 * Root layout for the Vegan Daily app
 * Sets up navigation, safe area context, and bookmark provider
 */
export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <BookmarkProvider>
                <DailyRecipeProvider>
                    <StatusBar style="light" />
                    <Stack
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: theme.colors.primary,
                            },
                            headerTintColor: theme.colors.textOnPrimary,
                            headerTitleStyle: {
                                fontWeight: '600',
                            },
                            contentStyle: {
                                backgroundColor: theme.colors.background,
                            },
                        }}
                    >
                        <Stack.Screen
                            name="(tabs)"
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="recipe/[mealType]"
                            options={{
                                headerTitle: "Today's Recipe",
                                headerBackTitle: 'Back',
                            }}
                        />
                        <Stack.Screen
                            name="recipe/detail/[id]"
                            options={{
                                headerTitle: 'Recipe',
                                headerBackTitle: 'Back',
                            }}
                        />
                    </Stack>
                </DailyRecipeProvider>
            </BookmarkProvider>
        </SafeAreaProvider>
    );
}
