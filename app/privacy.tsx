import React from 'react';
import { ScrollView, View, Text, StyleSheet, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { theme } from '../src/theme';

/**
 * Privacy Policy page
 * Shared between mobile (for links) and web
 */
export default function PrivacyPage() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Privacy Policy', headerShown: true }} />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Privacy Policy</Text>
                <Text style={styles.date}>Last Updated: January 28, 2026</Text>

                <Text style={styles.sectionTitle}>1. Introduction</Text>
                <Text style={styles.text}>
                    Vegan Daily ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how your information is collected, used, and safeguarded when you use our mobile application and website.
                </Text>

                <Text style={styles.sectionTitle}>2. Information Collection</Text>
                <Text style={styles.text}>
                    Vegan Daily is a "privacy-first" application. We do not require you to create an account or provide any personal information (such as your name, email, or phone number) to use the app.
                </Text>
                <Text style={styles.text}>
                    • <Text style={styles.bold}>Local Data:</Text> Your bookmarked recipes and preferences are stored locally on your device using your device's storage (AsyncStorage/localStorage). We do not have access to this data.
                </Text>
                <Text style={styles.text}>
                    • <Text style={styles.bold}>Cookies (Web only):</Text> We may use minimal technical cookies to ensure the website functions correctly. No tracking or marketing cookies are used.
                </Text>

                <Text style={styles.sectionTitle}>3. Third-Party Services</Text>
                <Text style={styles.text}>
                    Our app is built using Expo. We do not currently use any third-party analytics or advertising services that collect identifying information.
                </Text>

                <Text style={styles.sectionTitle}>4. Data Security</Text>
                <Text style={styles.text}>
                    As your data is stored locally on your device, the security of that data depends on your device's security. We recommend keeping your device updated and secured.
                </Text>

                <Text style={styles.sectionTitle}>5. Children's Privacy</Text>
                <Text style={styles.text}>
                    Our services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13.
                </Text>

                <Text style={styles.sectionTitle}>6. Changes to This Policy</Text>
                <Text style={styles.text}>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </Text>

                <Text style={styles.sectionTitle}>7. Contact Us</Text>
                <Text style={styles.text}>
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at privacy@followusai.com.
                </Text>
                
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
        marginBottom: theme.spacing.xs,
    },
    date: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textLight,
        marginBottom: theme.spacing.xl,
    },
    sectionTitle: {
        fontSize: theme.typography.sizes.lg,
        fontWeight: theme.typography.weights.semibold,
        color: theme.colors.text,
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.sm,
    },
    text: {
        fontSize: theme.typography.sizes.md,
        lineHeight: 24,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.md,
    },
    bold: {
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
    },
    footer: {
        height: 60,
    },
});
