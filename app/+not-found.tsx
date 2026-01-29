import { Link, Stack } from 'expo-router';
import { Metadata } from '../src/components/Metadata';
import { StyleSheet, Text, View, Platform, Pressable } from 'react-native';
import { theme } from '../src/theme';
import { Ionicons } from '@expo/vector-icons';

/**
 * Custom 404 Not Found Page
 * Matches the app's fresh, vegan-friendly aesthetic
 */
export default function NotFoundScreen() {
  return (
    <>
      <Metadata 
        title="Page Not Found"
        description="Sorry, the page you're looking for doesn't exist. Return to Vegan Daily for fresh vegan recipe ideas."
        noIndex={true}
      />
      <Stack.Screen options={{ title: 'Oops!', headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Ionicons name="leaf-outline" size={80} color={theme.colors.primary} />
            <View style={styles.overlayIcon}>
              <Ionicons name="help-circle" size={40} color={theme.colors.secondary} />
            </View>
          </View>
          
          <Text style={styles.title}>404</Text>
          <Text style={styles.subtitle}>Oops! This page seems to have withered away.</Text>
          <Text style={styles.description}>
            The recipe or page you're looking for isn't here. It might have been moved or doesn't exist anymore.
          </Text>

          <Link href="/" asChild>
            <Pressable style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed
            ]}>
              <Ionicons name="home-outline" size={20} color={theme.colors.textOnPrimary} style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Back to Fresh Recipes</Text>
            </Pressable>
          </Link>
          
          {Platform.OS === 'web' && (
            <View style={styles.footer}>
              <Link href="/support" style={styles.footerLink}>
                <Text style={styles.footerLinkText}>Need help?</Text>
              </Link>
            </View>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.background,
  },
  content: {
    alignItems: 'center',
    maxWidth: 450,
    width: '100%',
  },
  iconContainer: {
    position: 'relative',
    marginBottom: theme.spacing.lg,
  },
  overlayIcon: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: theme.colors.background,
    borderRadius: 20,
    padding: 2,
  },
  title: {
    fontSize: 80,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.primary,
    lineHeight: 80,
  },
  subtitle: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.semibold,
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  description: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: theme.spacing.xl,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: theme.borderRadius.full,
    ...theme.shadows.md,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: theme.colors.textOnPrimary,
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.bold,
  },
  footer: {
    marginTop: theme.spacing.xxl,
  },
  footerLink: {
    padding: theme.spacing.sm,
  },
  footerLinkText: {
    color: theme.colors.primary,
    fontSize: theme.typography.sizes.sm,
    fontWeight: theme.typography.weights.medium,
    textDecorationLine: 'underline',
  },
});
