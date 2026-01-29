import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { theme } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.container}>
                <View style={styles.brand}>
                    <View style={styles.logoContainer}>
                        <Image 
                            source={require('../../../assets/icon.png')} 
                            style={styles.logoIcon} 
                        />
                        <Text style={styles.logoText}>Vegan Daily</Text>
                    </View>
                    <Text style={styles.tagline}>
                        Making plant-based cooking simple for everyone, everywhere.
                    </Text>
                </View>

                <View style={styles.links}>
                    <View style={styles.linkGroup}>
                        <Text style={styles.groupTitle}>Application</Text>
                        <Link href="/home" asChild>
                            <Pressable style={styles.link}><Text style={styles.linkText}>Daily Recipes</Text></Pressable>
                        </Link>
                        <Link href="/browse" asChild>
                            <Pressable style={styles.link}><Text style={styles.linkText}>Browse Library</Text></Pressable>
                        </Link>
                        <Link href="/bookmarks" asChild>
                            <Pressable style={styles.link}><Text style={styles.linkText}>My Bookmarks</Text></Pressable>
                        </Link>
                    </View>

                    <View style={styles.linkGroup}>
                        <Text style={styles.groupTitle}>Legal</Text>
                        <Link href="/support" asChild>
                            <Pressable style={styles.link}><Text style={styles.linkText}>Support</Text></Pressable>
                        </Link>
                        <Link href="/privacy" asChild>
                            <Pressable style={styles.link}><Text style={styles.linkText}>Privacy Policy</Text></Pressable>
                        </Link>
                        <Link href="/terms" asChild>
                            <Pressable style={styles.link}><Text style={styles.linkText}>Terms of Service</Text></Pressable>
                        </Link>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.copyright}>© 2026 Vegan Daily. All rights reserved.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        paddingTop: 80,
        paddingBottom: 40,
        backgroundColor: theme.colors.surfaceElevated,
        borderTopWidth: 1,
        borderTopColor: theme.colors.divider,
    },
    container: {
        maxWidth: 1100,
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: theme.spacing.lg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    brand: {
        flex: 1,
        minWidth: 250,
        marginBottom: 40,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    logoIcon: {
        width: 28,
        height: 28,
        borderRadius: 6,
        marginRight: 8,
    },
    logoText: {
        fontSize: 22,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
    },
    tagline: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        maxWidth: 300,
        lineHeight: 24,
    },
    links: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    linkGroup: {
        marginLeft: 60,
        minWidth: 150,
        marginBottom: 40,
    },
    groupTitle: {
        fontSize: 14,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 20,
    },
    link: {
        marginBottom: 12,
    },
    linkText: {
        fontSize: 16,
        color: theme.colors.textSecondary,
    },
    bottom: {
        maxWidth: 1100,
        width: '100%',
        alignSelf: 'center',
        paddingTop: 40,
        marginTop: 40,
        borderTopWidth: 1,
        borderTopColor: theme.colors.divider,
        paddingHorizontal: theme.spacing.lg,
        alignItems: 'center',
    },
    copyright: {
        fontSize: 14,
        color: theme.colors.textLight,
    },
});
