import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { useAuth } from '../context/AuthContext';
import { getRecipeRating, getUserRecipeRating, upsertRating } from '../services/socialService';

interface RatingSectionProps {
    recipeId: string;
}

export const RatingSection: React.FC<RatingSectionProps> = ({ recipeId }) => {
    const { user } = useAuth();
    const [averageRating, setAverageRating] = useState(0);
    const [totalRatings, setTotalRatings] = useState(0);
    const [userRating, setUserRating] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const loadRatings = async () => {
        setIsLoading(true);
        const stats = await getRecipeRating(recipeId);
        setAverageRating(stats.average_rating || 0);
        setTotalRatings(stats.total_ratings || 0);

        if (user) {
            const currentRating = await getUserRecipeRating(user.id, recipeId);
            setUserRating(currentRating);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        loadRatings();
    }, [recipeId, user]);

    const handleRate = async (rating: number) => {
        if (!user) {
            // Ideally trigger login
            alert('Please sign in to rate recipes');
            return;
        }

        const success = await upsertRating(user.id, recipeId, rating);
        if (success) {
            setUserRating(rating);
            loadRatings(); // Refresh stats
        }
    };

    if (isLoading && totalRatings === 0) {
        return <ActivityIndicator size="small" color={theme.colors.primary} style={{ marginVertical: 20 }} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.statsRow}>
                <View style={styles.ratingBadge}>
                    <Ionicons name="star" size={16} color={theme.colors.secondary} />
                    <Text style={styles.ratingText}>
                        {averageRating > 0 ? averageRating.toFixed(1) : 'N/A'}
                    </Text>
                </View>
                <Text style={styles.totalText}>({totalRatings} ratings)</Text>
            </View>

            <Text style={styles.label}>{user ? 'Your Rating' : 'Sign in to rate'}</Text>
            <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity
                        key={star}
                        onPress={() => handleRate(star)}
                        disabled={!user}
                    >
                        <Ionicons
                            name={star <= (userRating || 0) ? "star" : "star-outline"}
                            size={32}
                            color={star <= (userRating || 0) ? theme.colors.secondary : theme.colors.textLight}
                            style={styles.star}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: theme.spacing.md,
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surfaceElevated,
        borderRadius: theme.borderRadius.md,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.sm,
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: 4,
        borderRadius: theme.borderRadius.full,
        marginRight: theme.spacing.sm,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    ratingText: {
        marginLeft: 4,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
    },
    totalText: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.sizes.sm,
    },
    label: {
        fontSize: theme.typography.sizes.sm,
        color: theme.colors.textSecondary,
        marginBottom: theme.spacing.xs,
    },
    starsRow: {
        flexDirection: 'row',
    },
    star: {
        marginRight: theme.spacing.xs,
    },
});
