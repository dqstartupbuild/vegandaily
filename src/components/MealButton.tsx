import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { theme } from '../theme';
import { MealType } from '../types';

interface MealButtonProps {
  mealType: MealType;
  onPress: () => void;
}

const mealConfig = {
  breakfast: {
    emoji: '🌅',
    label: 'Breakfast',
    color: theme.colors.secondary,
  },
  lunch: {
    emoji: '☀️',
    label: 'Lunch',
    color: theme.colors.primaryLight,
  },
  dinner: {
    emoji: '🌙',
    label: 'Dinner',
    color: theme.colors.primary,
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
        <Text style={styles.emoji}>{config.emoji}</Text>
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
  emoji: {
    fontSize: 48,
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
