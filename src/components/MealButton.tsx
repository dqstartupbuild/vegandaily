import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';
import { MealType } from '../types';

interface MealButtonProps {
  mealType: MealType;
  onPress: () => void;
}

const mealConfig = {
  breakfast: {
    iconName: 'coffee-outline' as const,
    label: 'Breakfast',
    color: theme.colors.secondary,
  },
  lunch: {
    iconName: 'white-balance-sunny' as const,
    label: 'Lunch',
    color: theme.colors.primaryLight,
  },
  dinner: {
    iconName: 'weather-night' as const,
    label: 'Dinner',
    color: theme.colors.primary,
  },
  dessert: {
    iconName: 'cookie-outline' as const,
    label: 'Dessert',
    color: theme.colors.secondaryDark,
  },
  snack: {
    iconName: 'popcorn' as const,
    label: 'Snack',
    color: theme.colors.secondary,
  },
  bread: {
    iconName: 'bread-slice' as const,
    label: 'Bread',
    color: theme.colors.secondaryLight,
  },
};

/**
 * Button for selecting a meal type
 */
export const MealButton: React.FC<MealButtonProps> = ({ mealType, onPress }) => {
  const config = mealConfig[mealType];

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: config.color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <MaterialCommunityIcons 
          name={config.iconName} 
          size={48} 
          color={theme.colors.textOnPrimary} 
          style={styles.icon}
        />
        <Text style={styles.label}>{config.label}</Text>
        <Text style={styles.hint}>Tap to view today's recipe</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.sm,
    ...theme.shadows.md,
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: theme.spacing.sm,
  },
  label: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textOnPrimary,
    marginBottom: theme.spacing.xs,
  },
  hint: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.textOnPrimary,
    opacity: 0.8,
  },
});
