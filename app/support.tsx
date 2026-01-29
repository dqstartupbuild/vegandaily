import React from 'react';
import { ScrollView, View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import * as Linking from 'expo-linking';
import { theme } from '../src/theme';
import { Ionicons } from '@expo/vector-icons';

/**
 * Support page
 * Mandated by Apple for App Store submission
 */
export default function SupportPage() {
    const handleEmail = () => {
        Linking.openURL('mailto:support@followusai.com');
    };

    const handleTwitter = () => {
        Linking.openURL('https://x.com/dqstartupbuild');
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Support', headerShown: true, headerBackTitle: 'Back' }} />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Support</Text>
                <Text style={styles.text}>
                    Need help with Vegan Daily? We're here to assist you. Whether you have a question about a recipe, found a bug, or just want to say hi, feel free to reach out.
                </Text>

                <View style={styles.supportMethod}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="mail-outline" size={24} color={theme.colors.primary} />
                    </View>
                    <View style={styles.supportInfo}>
                        <Text style={styles.supportTitle}>Email Support</Text>
                        <Text style={styles.supportDescription}>The best way to get help with specific issues.</Text>
                        <Pressable onPress={handleEmail}>
                            <Text style={styles.linkText}>support@followusai.com</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.supportMethod}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="logo-twitter" size={24} color={theme.colors.primary} />
                    </View>
                    <View style={styles.supportInfo}>
                        <Text style={styles.supportTitle}>X (Twitter)</Text>
                        <Text style={styles.supportDescription}>Follow us for updates and quick questions.</Text>
                        <Pressable onPress={handleTwitter}>
                            <Text style={styles.linkText}>@dqstartupbuild</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
                    
                    <View style={styles.faqItem}>
                        <Text style={styles.faqQuestion}>Is my data saved?</Text>
                        <Text style={styles.faqAnswer}>
                            Yes! Your bookmarks are saved locally on your device. We don't store any of your data on our servers, ensuring your privacy.
                        </Text>
                    </View>

                    <View style={styles.faqItem}>
                        <Text style={styles.faqQuestion}>Can I use this app offline?</Text>
                        <Text style={styles.faqAnswer}>
                            Since all recipe data is included within the app, you can browse and view your bookmarked recipes without an internet connection.
                        </Text>
                    </View>

                    <View style={styles.faqItem}>
                        <Text style={styles.faqQuestion}>How do I submit a recipe?</Text>
                        <Text style={styles.faqAnswer}>
                            We'd love to hear your suggestions! Send us an email with your favorite vegan recipe and we might include it in a future update.
                        </Text>
                    </View>
                </View>
                
                <View style={styles.footer} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        padding: theme.spacing.lg,
        maxWidth: 800,
        alignSelf: Platform.OS === 'web' ? 'center' : 'auto',
        width: '100%',
    },
    title: {
        fontSize: theme.typography.sizes.xxl,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.primary,
        marginBottom: theme.spacing.md,
    },
    text: {
        fontSize: theme.typography.sizes.md,
        lineHeight: 24,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.xl,
    },
    supportMethod: {
        flexDirection: 'row',
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.lg,
        borderRadius: theme.borderRadius.lg,
        marginBottom: theme.spacing.md,
        ...theme.shadows.sm,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: theme.colors.surfaceElevated,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing.md,
    },
    supportInfo: {
        flex: 1,
    },
    supportTitle: {
        fontSize: theme.typography.sizes.lg,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.text,
        marginBottom: 4,
    },
    supportDescription: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        marginBottom: 8,
    },
    linkText: {
        fontSize: theme.typography.sizes.md,
        fontWeight: theme.typography.weights.medium,
        color: theme.colors.primary,
    },
    section: {
        marginTop: theme.spacing.xxl,
    },
    sectionTitle: {
        fontSize: theme.typography.sizes.xl,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
        marginBottom: theme.spacing.lg,
    },
    faqItem: {
        marginBottom: theme.spacing.lg,
    },
    faqQuestion: {
        fontSize: theme.typography.sizes.md,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.text,
        marginBottom: theme.spacing.xs,
    },
    faqAnswer: {
        fontSize: theme.typography.sizes.md,
        lineHeight: 22,
        color: theme.colors.textSecondary,
    },
    footer: {
        height: 60,
    },
});
