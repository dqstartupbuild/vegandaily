import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Linking } from 'react-native';
import { Link } from 'expo-router';
import { theme } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

const APP_STORE_URL = 'https://apps.apple.com/us/app/vegan-daily-easy-plant-based/id6758465465';

export const Hero = () => {
    return (
        <View style={styles.hero}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>🌱 Simple. Healthy. Daily.</Text>
                    </View>
                    <Text style={styles.title}>
                        Delicious Vegan Meals,{'\n'}
                        <Text style={styles.accentText}>Made Effortless.</Text>
                    </Text>
                    <Text style={styles.description}>
                        Stop searching for "what to cook." Get one perfect breakfast, lunch, and dinner suggestion every single day. No accounts, no clutter, just cooking.
                    </Text>
                    
                    <View style={styles.actions}>
                        <Pressable style={styles.primaryAction} onPress={() => Linking.openURL(APP_STORE_URL)}>
                            <Ionicons name="logo-apple" size={20} color={theme.colors.textOnPrimary} style={{ marginRight: 8 }} />
                            <Text style={styles.primaryActionText}>Download on the App Store</Text>
                        </Pressable>
                        <Link href="/home" asChild>
                            <Pressable style={styles.primaryAction}>
                                <Text style={styles.primaryActionText}>Preview on Web</Text>
                                <Ionicons name="arrow-forward" size={18} color={theme.colors.textOnPrimary} style={{ marginLeft: 8 }} />
                            </Pressable>
                        </Link>
                        <View style={styles.appLinks}>
                            <Ionicons name="logo-apple" size={24} color={theme.colors.textLight} style={styles.appIcon} />
                            <Text style={styles.appLinksText}>Now on iOS: Vegan Daily: Easy Plant-Based</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.imageContainer}>
                    <View style={styles.imageCircle}>
                        <Image 
                            source={require('../../../assets/icon.png')} 
                            style={styles.heroLogo} 
                        />
                    </View>
                    <View style={[styles.floatingCard, styles.card1]}>
                        <Ionicons name="checkmark-circle" size={24} color={theme.colors.success} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Daily Meal Set</Text>
                            <Text style={styles.cardSub}>Breakfast, Lunch, Dinner</Text>
                        </View>
                    </View>
                    <View style={[styles.floatingCard, styles.card2]}>
                        <Ionicons name="bookmark" size={24} color={theme.colors.secondary} />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Save Favorites</Text>
                            <Text style={styles.cardSub}>Stored locally & private</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    hero: {
        paddingVertical: 100,
        backgroundColor: theme.colors.background,
        overflow: 'hidden',
    },
    container: {
        maxWidth: 1100,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.lg,
    },
    content: {
        flex: 1,
        paddingRight: theme.spacing.xl,
    },
    badge: {
        backgroundColor: theme.colors.surfaceElevated,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: theme.spacing.lg,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    badgeText: {
        color: theme.colors.primary,
        fontWeight: theme.typography.weights.semibold,
        fontSize: theme.typography.sizes.sm,
    },
    title: {
        fontSize: 56,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
        lineHeight: 64,
        marginBottom: theme.spacing.lg,
        letterSpacing: -1,
    },
    accentText: {
        color: theme.colors.primary,
    },
    description: {
        fontSize: theme.typography.sizes.lg,
        color: theme.colors.textSecondary,
        lineHeight: 30,
        marginBottom: theme.spacing.xxl,
        maxWidth: 500,
    },
    actions: {
        flexDirection: 'column',
    },
    primaryAction: {
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        paddingVertical: 18,
        borderRadius: 14,
        alignSelf: 'flex-start',
        ...theme.shadows.md,
        marginBottom: theme.spacing.md,
    },
    primaryActionText: {
        color: theme.colors.textOnPrimary,
        fontSize: 18,
        fontWeight: theme.typography.weights.bold,
    },
    appLinks: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
    },
    appIcon: {
        marginRight: 10,
    },
    appLinksText: {
        color: theme.colors.textLight,
        fontSize: theme.typography.sizes.sm,
    },
    imageContainer: {
        flex: 1,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    imageCircle: {
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: theme.colors.surfaceElevated,
        borderWidth: 2,
        borderColor: theme.colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    heroLogo: {
        width: 200,
        height: 200,
        borderRadius: 40,
    },
    floatingCard: {
        position: 'absolute',
        backgroundColor: theme.colors.surface,
        padding: 16,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        ...theme.shadows.lg,
        width: 220,
    },
    cardContent: {
        marginLeft: 12,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
    },
    cardSub: {
        fontSize: 12,
        color: theme.colors.textLight,
    },
    card1: {
        top: 80,
        right: 20,
    },
    card2: {
        bottom: 80,
        left: 20,
    },
});
