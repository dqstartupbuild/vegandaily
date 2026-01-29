import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { theme } from '../src/theme';
import { BookmarkProvider } from '../src/context/BookmarkContext';
import { DailyRecipeProvider } from '../src/context/DailyRecipeContext';
import { AuthProvider } from '../src/context/AuthContext';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

/**
 * Root layout for the Vegan Daily app
 * Sets up navigation, safe area context, and bookmark provider
 */
export default function RootLayout() {
    useEffect(() => {
        // Hide splash screen after a short delay to ensure everything is rendered
        const hideSplash = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            await SplashScreen.hideAsync();
        };
        hideSplash();
    }, []);

    return (
        <SafeAreaProvider>

            <AuthProvider>
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
                                    headerBackTitle: 'Back',
                                }}
                            />
                            <Stack.Screen
                                name="settings"
                                options={{
                                    title: 'Settings',
                                    headerBackTitle: 'Back',
                                }}
                            />
                            <Stack.Screen
                                name="support"
                                options={{
                                    title: 'Support',
                                    headerBackTitle: 'Back',
                                }}
                            />
                            <Stack.Screen
                                name="privacy"
                                options={{
                                    title: 'Privacy Policy',
                                    headerBackTitle: 'Back',
                                }}
                            />
                            <Stack.Screen
                                name="terms"
                                options={{
                                    title: 'Terms of Service',
                                    headerBackTitle: 'Back',
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
                            <Stack.Screen
                                name="auth/login"
                                options={{
                                    title: 'Sign In',
                                    presentation: 'modal',
                                }}
                            />
                        </Stack>
                    </DailyRecipeProvider>
                </BookmarkProvider>
            </AuthProvider>
        </SafeAreaProvider>
    );
}
