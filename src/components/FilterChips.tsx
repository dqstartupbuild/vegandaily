// Filter Chips Component for Browse screen
// Provides meal type filtering with chip buttons

import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { MealType } from '../types';

type FilterOption = 'all' | MealType;

interface FilterChipsProps {
    selected: FilterOption;
    onSelect: (filter: FilterOption) => void;
}

interface ChipConfig {
    key: FilterOption;
    label: string;
    emoji: string;
}

const chips: ChipConfig[] = [
    { key: 'all', label: 'All', emoji: '🍽️' },
    { key: 'breakfast', label: 'Breakfast', emoji: '🌅' },
    { key: 'lunch', label: 'Lunch', emoji: '☀️' },
    { key: 'dinner', label: 'Dinner', emoji: '🌙' },
    { key: 'dessert', label: 'Dessert', emoji: '🍪' },
    { key: 'snack', label: 'Snack', emoji: '🍿' },
    { key: 'bread', label: 'Bread', emoji: '🍞' },
];

/**
 * Horizontal scrollable filter chips for meal types
 */
export const FilterChips: React.FC<FilterChipsProps> = ({ selected, onSelect }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {chips.map((chip) => {
                const isSelected = selected === chip.key;
                return (
                    <TouchableOpacity
                        key={chip.key}
                        style={[styles.chip, isSelected && styles.chipSelected]}
                        onPress={() => onSelect(chip.key)}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.chipEmoji}>{chip.emoji}</Text>
                        <Text style={[styles.chipLabel, isSelected && styles.chipLabelSelected]}>
                            {chip.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.sm,
        gap: theme.spacing.sm,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.full,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
        borderWidth: 1,
        borderColor: theme.colors.border,
        gap: theme.spacing.xs,
    },
    chipSelected: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },
    chipEmoji: {
        fontSize: 16,
    },
    chipLabel: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.text,
    },
    chipLabelSelected: {
        color: theme.colors.textOnPrimary,
    },
});
