// Bookmark Context for managing bookmarked recipes across the app
// Provides a centralized state for bookmark operations

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { getBookmarks, addBookmark, removeBookmark } from '../utils/bookmarkStorage';

interface BookmarkContextType {
    bookmarks: string[];
    isLoading: boolean;
    isBookmarked: (recipeId: string) => boolean;
    toggleBookmark: (recipeId: string) => Promise<void>;
    refreshBookmarks: () => Promise<void>;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

interface BookmarkProviderProps {
    children: ReactNode;
}

/**
 * Provider component that manages bookmark state
 */
export const BookmarkProvider: React.FC<BookmarkProviderProps> = ({ children }) => {
    const [bookmarks, setBookmarks] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load bookmarks from storage on mount
    const refreshBookmarks = useCallback(async () => {
        setIsLoading(true);
        try {
            const stored = await getBookmarks();
            setBookmarks(stored);
        } catch (error) {
            console.error('Error loading bookmarks:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshBookmarks();
    }, [refreshBookmarks]);

    // Check if a recipe is bookmarked (synchronous for UI)
    const isBookmarkedFn = useCallback(
        (recipeId: string): boolean => {
            return bookmarks.includes(recipeId);
        },
        [bookmarks]
    );

    // Toggle bookmark status
    const toggleBookmarkFn = useCallback(
        async (recipeId: string): Promise<void> => {
            const currentlyBookmarked = bookmarks.includes(recipeId);

            if (currentlyBookmarked) {
                // Optimistic update - remove
                setBookmarks((prev) => prev.filter((id) => id !== recipeId));
                const success = await removeBookmark(recipeId);
                if (!success) {
                    // Revert on failure
                    setBookmarks((prev) => [...prev, recipeId]);
                }
            } else {
                // Optimistic update - add
                setBookmarks((prev) => [...prev, recipeId]);
                const success = await addBookmark(recipeId);
                if (!success) {
                    // Revert on failure
                    setBookmarks((prev) => prev.filter((id) => id !== recipeId));
                }
            }
        },
        [bookmarks]
    );

    const value: BookmarkContextType = {
        bookmarks,
        isLoading,
        isBookmarked: isBookmarkedFn,
        toggleBookmark: toggleBookmarkFn,
        refreshBookmarks,
    };

    return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
};

/**
 * Hook to access bookmark context
 */
export const useBookmarks = (): BookmarkContextType => {
    const context = useContext(BookmarkContext);
    if (!context) {
        throw new Error('useBookmarks must be used within a BookmarkProvider');
    }
    return context;
};
