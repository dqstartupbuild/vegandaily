import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
        <Text style={styles.title}>🌱 Vegan Daily</Text>
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
  title: {
    fontSize: theme.typography.sizes.xxl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textOnPrimary,
    marginBottom: theme.spacing.xs,
  },
  date: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.textOnPrimary,
    opacity: 0.9,
  },
});
