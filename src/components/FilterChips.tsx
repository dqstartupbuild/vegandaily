// Filter Chips Component for Browse screen
// Provides meal type filtering with chip buttons

import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
    iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

const chips: ChipConfig[] = [
    { key: 'all', label: 'All', iconName: 'silverware-fork-knife' },
    { key: 'breakfast', label: 'Breakfast', iconName: 'coffee-outline' },
    { key: 'lunch', label: 'Lunch', iconName: 'white-balance-sunny' },
    { key: 'dinner', label: 'Dinner', iconName: 'weather-night' },
    { key: 'dessert', label: 'Dessert', iconName: 'cookie-outline' },
    { key: 'snack', label: 'Snack', iconName: 'popcorn' },
    { key: 'bread', label: 'Bread', iconName: 'bread-slice' },
];

/**
 * Horizontal scrollable filter chips for meal types
 */
export const FilterChips: React.FC<FilterChipsProps> = ({ selected, onSelect }) => {
    return (
        <View style={styles.wrapper}>
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
                            <MaterialCommunityIcons 
                                name={chip.iconName} 
                                size={18} 
                                color={isSelected ? theme.colors.textOnPrimary : theme.colors.text} 
                            />
                            <Text style={[styles.chipLabel, isSelected && styles.chipLabelSelected]}>
                                {chip.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 60,
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: theme.spacing.lg,
        alignItems: 'center', // Vertically center chips
        gap: theme.spacing.sm,
        // Height is controlled by wrapper
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
    chipLabel: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.text,
    },
    chipLabelSelected: {
        color: theme.colors.textOnPrimary,
    },
});
