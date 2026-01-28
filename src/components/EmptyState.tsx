// Empty State Component
// Displays placeholder content when lists are empty

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

interface EmptyStateProps {
    iconName: keyof typeof Ionicons.glyphMap;
    title: string;
    message: string;
}

/**
 * Empty state display for empty lists
 */
export const EmptyState: React.FC<EmptyStateProps> = ({ iconName, title, message }) => {
    return (
        <View style={styles.container}>
            <Ionicons name={iconName} size={64} color={theme.colors.textLight} style={styles.icon} />
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
    icon: {
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
