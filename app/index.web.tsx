import React from 'react';
import { ScrollView, StyleSheet, View, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { theme } from '../src/theme';
import { Navbar } from '../src/components/landing/Navbar';
import { Hero } from '../src/components/landing/Hero';
import { Features } from '../src/components/landing/Features';
import { Footer } from '../src/components/landing/Footer';

import { Metadata } from '../src/components/Metadata';

/**
 * Web-only Landing Page
 * Overrides the root index for web platform to provide a marketing introduction
 */
export default function WebLandingPage() {
    // Only show landing page on web
    if (Platform.OS !== 'web') {
        return null; // This file shouldn't even be loaded on mobile normally
    }

    return (
        <View style={styles.container}>
            <Metadata 
                title="Vegan Daily: Easy Plant-Based | Now on iOS"
                description="Vegan Daily: Easy Plant-Based is now available on the App Store. Get simple vegan breakfast, lunch, and dinner ideas every day."
                canonicalPath="/"
                iosAppId="6758465465"
                iosAppArgument="https://apps.apple.com/us/app/vegan-daily-easy-plant-based/id6758465465"
            />
            <Stack.Screen 
                options={{ 
                    title: 'Vegan Daily: Easy Plant-Based',
                    headerShown: false 
                }} 
            />
            
            <Navbar />
            
            <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Hero />
                <Features />
                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        flexGrow: 1,
    },
});
