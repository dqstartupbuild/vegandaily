import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { theme } from '../src/theme';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

/**
 * Settings/About Screen
 * Displays app version, legal links, and support
 */
export default function SettingsScreen() {
    const router = useRouter();
    const version = Constants.expoConfig?.version || '1.0.0';

    const settingsItems = [
        {
            title: 'Support',
            icon: 'help-circle-outline' as const,
            route: '/support' as const,
        },
        {
            title: 'Privacy Policy',
            icon: 'shield-checkmark-outline' as const,
            route: '/privacy' as const,
        },
        {
            title: 'Terms of Service',
            icon: 'document-text-outline' as const,
            route: '/terms' as const,
        },
    ];

    return (
        <View style={styles.container}>
            <Stack.Screen 
                options={{ 
                    title: 'Settings', 
                    headerShown: true,
                    headerStyle: { backgroundColor: theme.colors.primary },
                    headerTintColor: theme.colors.textOnPrimary,
                }} 
            />
            
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>General</Text>
                    <View style={styles.card}>
                        {settingsItems.map((item, index) => (
                            <React.Fragment key={item.title}>
                                <Pressable 
                                    style={({ pressed }) => [
                                        styles.item,
                                        pressed && styles.itemPressed
                                    ]}
                                    onPress={() => router.push(item.route)}
                                >
                                    <View style={styles.itemLeft}>
                                        <Ionicons name={item.icon} size={22} color={theme.colors.primary} />
                                        <Text style={styles.itemText}>{item.title}</Text>
                                    </View>
                                    <Ionicons name="chevron-forward" size={20} color={theme.colors.textLight} />
                                </Pressable>
                                {index < settingsItems.length - 1 && <View style={styles.divider} />}
                            </React.Fragment>
                        ))}
                    </View>
                </View>

                <View style={styles.aboutSection}>
                    <Text style={styles.versionText}>Version {version}</Text>
                    <Text style={styles.madeWithText}>Made with 💚 for Vegan Cooking</Text>
                </View>
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
        padding: theme.spacing.lg,
        maxWidth: 600,
        alignSelf: Platform.OS === 'web' ? 'center' : 'auto',
        width: '100%',
    },
    section: {
        marginBottom: theme.spacing.xl,
    },
    sectionTitle: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.textLight,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: theme.spacing.sm,
        marginLeft: theme.spacing.xs,
    },
    card: {
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: theme.colors.border,
        ...theme.shadows.sm,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing.md,
    },
    itemPressed: {
        backgroundColor: theme.colors.surfaceElevated,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.sm,
    },
    itemText: {
        fontSize: theme.typography.sizes.md,
        color: theme.colors.text,
        fontWeight: theme.typography.weights.medium,
    },
    divider: {
        height: 1,
        backgroundColor: theme.colors.divider,
        marginHorizontal: theme.spacing.md,
    },
    aboutSection: {
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xxl,
    },
    versionText: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textLight,
        marginBottom: 4,
    },
    madeWithText: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        fontStyle: 'italic',
        marginBottom: theme.spacing.md,
    },
});
