import { Tabs } from 'expo-router';
import { theme } from '../../src/theme';
import { Ionicons } from '@expo/vector-icons';

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
                    paddingTop: 8,
                    height: 90,
                    paddingBottom: 20,
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
                        <TabIcon name={focused ? 'home' : 'home-outline'} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="browse"
                options={{
                    title: 'Browse',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon name={focused ? 'search' : 'search-outline'} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="bookmarks"
                options={{
                    title: 'Bookmarks',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon name={focused ? 'bookmark' : 'bookmark-outline'} focused={focused} />
                    ),
                }}
            />
        </Tabs>
    );
}

// Simple tab icon component
import { View, StyleSheet } from 'react-native';

interface TabIconProps {
    name: keyof typeof Ionicons.glyphMap;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ name, focused }) => (
    <View style={[styles.iconContainer, focused && styles.iconFocused]}>
        <Ionicons 
            name={name} 
            size={24} 
            color={focused ? theme.colors.primary : theme.colors.textLight} 
        />
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
});
