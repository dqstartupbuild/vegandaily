import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { useAuth } from '../context/AuthContext';
import { getRecipeComments, addComment } from '../services/socialService';

interface CommentSectionProps {
    recipeId: string;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ recipeId }) => {
    const { user } = useAuth();
    const [comments, setComments] = useState<any[]>([]);
    const [newComment, setNewComment] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const loadComments = async () => {
        setIsLoading(true);
        const data = await getRecipeComments(recipeId);
        setComments(data);
        setIsLoading(false);
    };

    useEffect(() => {
        loadComments();
    }, [recipeId]);

    const handleSubmit = async () => {
        if (!user) {
            alert('Please sign in to comment');
            return;
        }
        if (!newComment.trim()) return;

        setIsSubmitting(true);
        const success = await addComment(user.id, recipeId, newComment.trim());
        if (success) {
            setNewComment('');
            loadComments();
        } else {
            Alert.alert('Error', 'Failed to post comment. Please try again.');
        }
        setIsSubmitting(false);
    };

    const renderComment = ({ item }: { item: any }) => (
        <View style={styles.commentItem}>
            <View style={styles.commentHeader}>
                <Ionicons name="person-circle" size={24} color={theme.colors.textLight} />
                <Text style={styles.commentUser}>User {item.user_id.substring(0, 5)}...</Text>
                <Text style={styles.commentDate}>
                    {new Date(item.created_at).toLocaleDateString()}
                </Text>
            </View>
            <Text style={styles.commentContent}>{item.content}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comments ({comments.length})</Text>

            {user ? (
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add a comment..."
                        value={newComment}
                        onChangeText={setNewComment}
                        multiline
                    />
                    <TouchableOpacity
                        style={[styles.sendButton, (!newComment.trim() || isSubmitting) && styles.disabledButton]}
                        onPress={handleSubmit}
                        disabled={!newComment.trim() || isSubmitting}
                    >
                        {isSubmitting ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Ionicons name="send" size={20} color="#fff" />
                        )}
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.loginPrompt}>
                    <Text style={styles.loginPromptText}>Sign in to join the conversation</Text>
                </View>
            )}

            {isLoading ? (
                <ActivityIndicator size="large" color={theme.colors.primary} style={{ marginTop: 20 }} />
            ) : (
                <FlatList
                    data={comments}
                    renderItem={renderComment}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false} // Since it's nested in a ScrollView usually
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No comments yet. Be the first to share your thoughts!</Text>
                    }
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: theme.spacing.lg,
        paddingHorizontal: theme.spacing.md,
    },
    title: {
        fontSize: theme.typography.sizes.lg,
        fontWeight: theme.typography.weights.bold,
        color: theme.colors.text,
        marginBottom: theme.spacing.md,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: theme.colors.surface,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.sm,
        borderWidth: 1,
        borderColor: theme.colors.border,
        marginBottom: theme.spacing.lg,
    },
    input: {
        flex: 1,
        minHeight: 40,
        maxHeight: 100,
        paddingTop: 8,
        paddingHorizontal: 8,
        fontSize: theme.typography.sizes.md,
        color: theme.colors.text,
    },
    sendButton: {
        backgroundColor: theme.colors.primary,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing.sm,
    },
    disabledButton: {
        opacity: 0.5,
    },
    loginPrompt: {
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surfaceElevated,
        borderRadius: theme.borderRadius.md,
        alignItems: 'center',
        marginBottom: theme.spacing.lg,
    },
    loginPromptText: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.sizes.sm,
    },
    commentItem: {
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        marginBottom: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.divider,
    },
    commentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.xs,
    },
    commentUser: {
        fontSize: theme.typography.sizes.sm,
        fontWeight: theme.typography.weights.semibold,
        marginLeft: 8,
        color: theme.colors.text,
        flex: 1,
    },
    commentDate: {
        fontSize: theme.typography.sizes.xs,
        color: theme.colors.textLight,
    },
    commentContent: {
        fontSize: theme.typography.sizes.md,
        color: theme.colors.text,
        lineHeight: 22,
    },
    emptyText: {
        textAlign: 'center',
        color: theme.colors.textLight,
        marginTop: theme.spacing.md,
        fontStyle: 'italic',
    },
});
