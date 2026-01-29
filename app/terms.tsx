import React from 'react';
import { ScrollView, View, Text, StyleSheet, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { theme } from '../src/theme';

/**
 * Terms of Service page
 * Shared between mobile (for links) and web
 */
export default function TermsPage() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Terms of Service', headerShown: true }} />
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Terms of Service</Text>
                <Text style={styles.date}>Last Updated: January 28, 2026</Text>

                <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
                <Text style={styles.text}>
                    By accessing and using Vegan Daily, you accept and agree to be bound by the terms and provision of this agreement.
                </Text>

                <Text style={styles.sectionTitle}>2. Use License</Text>
                <Text style={styles.text}>
                    Permission is granted to use Vegan Daily for personal, non-commercial use. You may not:
                </Text>
                <Text style={styles.text}>
                    • Modify or copy the materials;
                </Text>
                <Text style={styles.text}>
                    • Use the materials for any commercial purpose, or for any public display;
                </Text>
                <Text style={styles.text}>
                    • Attempt to decompile or reverse engineer any software contained in Vegan Daily.
                </Text>

                <Text style={styles.sectionTitle}>3. Disclaimer</Text>
                <Text style={styles.text}>
                    The materials on Vegan Daily are provided on an 'as is' basis. Vegan Daily makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </Text>
                <Text style={styles.text}>
                    Furthermore, Vegan Daily does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the recipes or materials.
                </Text>

                <Text style={styles.sectionTitle}>4. Limitations</Text>
                <Text style={styles.text}>
                    In no event shall Vegan Daily or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vegan Daily.
                </Text>

                <Text style={styles.sectionTitle}>5. Accuracy of Materials</Text>
                <Text style={styles.text}>
                    The recipes and health information provided in Vegan Daily are for informational purposes only. We are not medical professionals or nutritionists. Always consult with a health professional before making dietary changes.
                </Text>

                <Text style={styles.sectionTitle}>6. Governing Law</Text>
                <Text style={styles.text}>
                    These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the creator operates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </Text>

                <Text style={styles.sectionTitle}>7. Contact Us</Text>
                <Text style={styles.text}>
                    If you have any questions about these Terms, please contact us at support@followusai.com.
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
    footer: {
        height: 60,
    },
});
