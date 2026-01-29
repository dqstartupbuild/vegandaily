import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { getFormattedDate } from '../utils/dateUtils';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface HeaderProps {
  showDate?: boolean;
}

/**
 * App header component with title, optional date display, and settings access
 */
export const Header: React.FC<HeaderProps> = ({ showDate = true }) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={[styles.container, { paddingTop: insets.top + theme.spacing.md }]}>
      <View style={styles.topBar}>
        <View style={styles.placeholder} />
        <View style={styles.titleContainer}>
          <Image 
            source={require('../../assets/icon.png')} 
            style={styles.logoIcon} 
          />
          <Text style={styles.title}>Vegan Daily</Text>
        </View>
        <Pressable 
          style={({ pressed }) => [styles.settingsButton, pressed && styles.buttonPressed]}
          onPress={() => router.push('/settings')}
        >
          <Ionicons name="settings-outline" size={24} color={theme.colors.textOnPrimary} />
        </Pressable>
      </View>
      
      {showDate && (
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{getFormattedDate()}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xs,
  },
  placeholder: {
    width: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    flex: 1,
    justifyContent: 'center',
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  logoIcon: {
    width: 28,
    height: 28,
    borderRadius: 6,
  },
  title: {
    fontSize: theme.typography.sizes.xxl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textOnPrimary,
  },
  dateContainer: {
    alignItems: 'center',
  },
  date: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.textOnPrimary,
    opacity: 0.9,
  },
});

