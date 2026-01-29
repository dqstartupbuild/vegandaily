import { View, Text, StyleSheet, Pressable, Platform, Image } from 'react-native';
import { Link } from 'expo-router';
import { theme } from '../../theme';

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <View style={styles.container}>
                <Link href="/" asChild>
                    <Pressable style={styles.logoContainer}>
                        <Image 
                            source={require('../../../assets/icon.png')} 
                            style={styles.logoIcon} 
                        />
                        <Text style={styles.logoText}>Vegan Daily</Text>
                    </Pressable>
                </Link>

                <View style={styles.navLinks}>
                    <Link href="/browse" asChild>
                        <Pressable style={styles.navButton}>
                            <Text style={styles.navButtonText}>Explore Recipes</Text>
                        </Pressable>
                    </Link>
                    <Link href="/home" asChild>
                        <Pressable style={styles.ctaButton}>
                            <Text style={styles.ctaButtonText}>Open App</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.divider,
        justifyContent: 'center',
        paddingHorizontal: theme.spacing.lg,
        position: Platform.OS === 'web' ? 'sticky' as any : 'relative',
        top: 0,
        zIndex: 100,
        // @ts-ignore
        backdropFilter: 'blur(10px)',
    },
    container: {
        maxWidth: 1100,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        marginRight: theme.spacing.sm,
    },
    logoText: {
        fontSize: theme.typography.sizes.xl,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.primary,
        letterSpacing: -0.5,
    },
    navLinks: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navButton: {
        marginRight: theme.spacing.xl,
        paddingVertical: theme.spacing.sm,
    },
    navButtonText: {
        color: theme.colors.textSecondary,
        fontWeight: theme.typography.weights.medium,
        fontSize: theme.typography.sizes.md,
    },
    ctaButton: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.sm + 2,
        borderRadius: theme.borderRadius.full,
    },
    ctaButtonText: {
        color: theme.colors.textOnPrimary,
        fontWeight: theme.typography.weights.bold,
        fontSize: theme.typography.sizes.md,
    },
});
