// Empty State Component
// Displays placeholder content when lists are empty

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

interface EmptyStateProps {
    emoji: string;
    title: string;
    message: string;
}

/**
 * Empty state display for empty lists
 */
export const EmptyState: React.FC<EmptyStateProps> = ({ emoji, title, message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.xl,
    },
    emoji: {
        fontSize: 64,
        marginBottom: theme.spacing.md,
    },
    title: {
        fontSize: theme.typography.sizes.lg,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
        marginBottom: theme.spacing.sm,
        textAlign: 'center',
    },
    message: {
        fontSize: theme.typography.sizes.md,
        color: theme.colors.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
    },
});
