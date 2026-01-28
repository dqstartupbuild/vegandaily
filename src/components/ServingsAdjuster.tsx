import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

interface ServingsAdjusterProps {
  currentServings: number;
  originalServings: number;
  onIncrease: () => void;
  onDecrease: () => void;
  minServings?: number;
  maxServings?: number;
}

/**
 * Component for adjusting recipe servings with +/- buttons
 */
export const ServingsAdjuster: React.FC<ServingsAdjusterProps> = ({
  currentServings,
  originalServings,
  onIncrease,
  onDecrease,
  minServings = 1,
  maxServings = 20,
}) => {
  const isAtMin = currentServings <= minServings;
  const isAtMax = currentServings >= maxServings;
  const isModified = currentServings !== originalServings;

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Ionicons name="restaurant-outline" size={20} color={theme.colors.textLight} style={styles.labelIcon} />
        <Text style={styles.label}>Servings</Text>
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity
          style={[styles.button, isAtMin && styles.buttonDisabled]}
          onPress={onDecrease}
          disabled={isAtMin}
          activeOpacity={0.7}
        >
          <Ionicons 
            name="remove" 
            size={24} 
            color={isAtMin ? theme.colors.textLight : theme.colors.textOnPrimary} 
          />
        </TouchableOpacity>

        <View style={styles.valueContainer}>
          <Text style={styles.value}>{currentServings}</Text>
          {isModified && (
            <Text style={styles.originalValue}>
              (originally {originalServings})
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={[styles.button, isAtMax && styles.buttonDisabled]}
          onPress={onIncrease}
          disabled={isAtMax}
          activeOpacity={0.7}
        >
          <Ionicons 
            name="add" 
            size={24} 
            color={isAtMax ? theme.colors.textLight : theme.colors.textOnPrimary} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surfaceElevated,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  labelIcon: {
    marginRight: theme.spacing.xs,
  },
  label: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.textLight,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.sm,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.border,
  },
  valueContainer: {
    alignItems: 'center',
    minWidth: 80,
  },
  value: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text,
  },
  originalValue: {
    fontSize: theme.typography.sizes.xs,
    color: theme.colors.textLight,
    marginTop: 2,
  },
});
