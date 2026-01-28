// Search Bar Component for Browse screen
// Provides text input with search styling

import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
            <Ionicons name="search" size={20} color={theme.colors.textLight} style={styles.searchIcon} />
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
                    <Ionicons name="close-circle" size={18} color={theme.colors.textLight} />
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
    // clearIcon style removed as standard icon is used
});
