import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { getFormattedDate } from '../utils/dateUtils';

interface HeaderProps {
  showDate?: boolean;
}

/**
 * App header component with title and optional date display
 */
export const Header: React.FC<HeaderProps> = ({ showDate = true }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + theme.spacing.md }]}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Ionicons name="leaf" size={28} color={theme.colors.textOnPrimary} />
          <Text style={styles.title}>Vegan Daily</Text>
        </View>
        {showDate && (
          <Text style={styles.date}>{getFormattedDate()}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
  },
  content: {
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  title: {
    fontSize: theme.typography.sizes.xxl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textOnPrimary,
  },
  date: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.textOnPrimary,
    opacity: 0.9,
  },
});
