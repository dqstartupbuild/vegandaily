// Search Bar Component for Browse screen
// Provides text input with search styling

import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { theme } from '../theme';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

/**
 * Styled search input for the Browse screen
 */
export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder = 'Search recipes...',
}) => {
    const showClear = value.length > 0;

    return (
        <View style={styles.container}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={theme.colors.textLight}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="search"
            />
            {showClear && (
                <TouchableOpacity
                    style={styles.clearButton}
                    onPress={() => onChangeText('')}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Text style={styles.clearIcon}>✕</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.lg,
        marginHorizontal: theme.spacing.lg,
        marginVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
        ...theme.shadows.sm,
    },
    searchIcon: {
        fontSize: 18,
        marginRight: theme.spacing.sm,
    },
    input: {
        flex: 1,
        fontSize: theme.typography.sizes.md,
        color: theme.colors.text,
        paddingVertical: theme.spacing.md,
    },
    clearButton: {
        padding: theme.spacing.xs,
    },
    clearIcon: {
        fontSize: 16,
        color: theme.colors.textLight,
    },
});
