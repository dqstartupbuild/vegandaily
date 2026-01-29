import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

const features = [
    {
        icon: 'calendar-outline',
        title: 'Daily Inspiration',
        description: 'New breakfast, lunch, and dinner ideas every day to keep your vegan journey fresh and exciting.',
    },
    {
        icon: 'options-outline',
        title: 'Adjustable Servings',
        description: 'Scale recipes instantly for one person or a whole family. Ingredients update automatically.',
    },
    {
        icon: 'shield-checkmark-outline',
        title: 'Privacy First',
        description: 'No accounts, no trackers. Your bookmarks stay on your device and nowhere else.',
    },
    {
        icon: 'search-outline',
        title: 'Full Discovery',
        description: 'Search our entire library of easy vegan recipes by meal type, tags, or ingredients.',
    },
];

export const Features = () => {
    return (
        <View style={styles.section}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.subtitle}>WHY VEGAN DAILY</Text>
                    <Text style={styles.title}>Designed for simple living</Text>
                    <View style={styles.underline} />
                </View>

                <View style={styles.grid}>
                    {features.map((feature, index) => (
                        <View key={index} style={styles.card}>
                            <View style={styles.iconContainer}>
                                <Ionicons name={feature.icon as any} size={28} color={theme.colors.primary} />
                            </View>
                            <Text style={styles.cardTitle}>{feature.title}</Text>
                            <Text style={styles.cardDescription}>{feature.description}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        paddingVertical: 100,
        backgroundColor: theme.colors.surface,
    },
    container: {
        maxWidth: 1100,
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: theme.spacing.lg,
    },
    header: {
        alignItems: 'center',
        marginBottom: 60,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.primary,
        letterSpacing: 2,
        marginBottom: 12,
    },
    title: {
        fontSize: 36,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
        marginBottom: 16,
    },
    underline: {
        width: 60,
        height: 4,
        backgroundColor: theme.colors.secondary,
        borderRadius: 2,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -theme.spacing.md,
    },
    card: {
        width: '50%',
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xl,
        marginBottom: theme.spacing.lg,
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 16,
        backgroundColor: theme.colors.surfaceElevated,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
        marginBottom: 12,
    },
    cardDescription: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        lineHeight: 24,
    },
});
