import { Tabs } from 'expo-router';
import { theme } from '../../src/theme';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet, Pressable } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

/**
 * Tab layout for main navigation
 * Three tabs: Home, Browse, Bookmarks
 */
export default function TabLayout() {
    return (
        <Tabs
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerTintColor: theme.colors.textOnPrimary,
                headerTitleStyle: {
                    fontWeight: '600',
                },
            }}
        >
            <Tabs.Screen
                name="home"
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

const TAB_BAR_HEIGHT = 56;

interface TabIconProps {
    name: keyof typeof Ionicons.glyphMap;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ name, focused }) => (
    <View style={[styles.iconContainer, focused && styles.iconFocused]}>
        <Ionicons 
            name={name} 
            size={26} 
            color={focused ? theme.colors.primary : theme.colors.textLight} 
        />
    </View>
);

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.tabBar,
                {
                    height: TAB_BAR_HEIGHT + insets.bottom,
                    paddingBottom: insets.bottom,
                },
            ]}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const focused = state.index === index;

                const icon = options.tabBarIcon?.({
                    focused,
                    color: focused ? theme.colors.primary : theme.colors.textLight,
                    size: 26,
                });

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!focused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={focused ? { selected: true } : {}}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabItem}
                    >
                        {icon}
                    </Pressable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.surface,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        paddingTop: 6,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
    },
    iconContainer: {
        padding: 4,
        borderRadius: 8,
    },
    iconFocused: {
        backgroundColor: theme.colors.surfaceElevated,
    },
});
