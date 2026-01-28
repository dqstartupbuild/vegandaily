import { Tabs } from 'expo-router';
import { theme } from '../../src/theme';

/**
 * Tab layout for main navigation
 * Three tabs: Home, Browse, Bookmarks
 */
export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerTintColor: theme.colors.textOnPrimary,
                headerTitleStyle: {
                    fontWeight: '600',
                },
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                    borderTopColor: theme.colors.border,
                    paddingTop: 4,
                    height: 60,
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.textLight,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginBottom: 4,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon emoji="🏠" focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="browse"
                options={{
                    title: 'Browse',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon emoji="📖" focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="bookmarks"
                options={{
                    title: 'Bookmarks',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon emoji="🔖" focused={focused} />
                    ),
                }}
            />
        </Tabs>
    );
}

// Simple tab icon component
import { Text, View, StyleSheet } from 'react-native';

interface TabIconProps {
    emoji: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ emoji, focused }) => (
    <View style={[styles.iconContainer, focused && styles.iconFocused]}>
        <Text style={styles.icon}>{emoji}</Text>
    </View>
);

const styles = StyleSheet.create({
    iconContainer: {
        padding: 4,
        borderRadius: 8,
    },
    iconFocused: {
        backgroundColor: theme.colors.surfaceElevated,
    },
    icon: {
        fontSize: 22,
    },
});
