import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { getBookmarks, addBookmark, removeBookmark } from '../utils/bookmarkStorage';
import { useAuth } from './AuthContext';
import { getDBBookmarks, addDBBookmark, removeDBBookmark, syncBookmarksToDB } from '../services/bookmarkService';
import { Platform } from 'react-native';

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

export const BookmarkProvider: React.FC<BookmarkProviderProps> = ({ children }) => {
    const [bookmarks, setBookmarks] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();

    // Sync logic when user logs in
    useEffect(() => {
        const syncOnLogin = async () => {
            if (user && Platform.OS !== 'web') {
                const localBookmarks = await getBookmarks();
                if (localBookmarks.length > 0) {
                    await syncBookmarksToDB(user.id, localBookmarks);
                    // Optionally clear local storage after sync
                    // await clearLocalBookmarks(); 
                }
            }
            refreshBookmarks();
        };
        syncOnLogin();
    }, [user]);

    const refreshBookmarks = useCallback(async () => {
        setIsLoading(true);
        try {
            if (user) {
                const dbBookmarks = await getDBBookmarks(user.id);
                setBookmarks(dbBookmarks);
            } else if (Platform.OS !== 'web') {
                const stored = await getBookmarks();
                setBookmarks(stored);
            } else {
                setBookmarks([]);
            }
        } catch (error) {
            console.error('Error loading bookmarks:', error);
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    useEffect(() => {
        refreshBookmarks();
    }, [refreshBookmarks]);

    const isBookmarkedFn = useCallback(
        (recipeId: string): boolean => {
            return bookmarks.includes(recipeId);
        },
        [bookmarks]
    );

    const toggleBookmarkFn = useCallback(
        async (recipeId: string): Promise<void> => {
            // Web requirement check
            if (Platform.OS === 'web' && !user) {
                // Should ideally trigger login modal, but for now we alert
                alert('Please sign in to bookmark recipes');
                return;
            }

            const currentlyBookmarked = bookmarks.includes(recipeId);

            if (currentlyBookmarked) {
                setBookmarks((prev) => prev.filter((id) => id !== recipeId));
                let success = false;
                if (user) {
                    success = await removeDBBookmark(user.id, recipeId);
                } else {
                    success = await removeBookmark(recipeId);
                }
                if (!success) setBookmarks((prev) => [...prev, recipeId]);
            } else {
                setBookmarks((prev) => [...prev, recipeId]);
                let success = false;
                if (user) {
                    success = await addDBBookmark(user.id, recipeId);
                } else {
                    success = await addBookmark(recipeId);
                }
                if (!success) setBookmarks((prev) => prev.filter((id) => id !== recipeId));
            }
        },
        [bookmarks, user]
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

export const useBookmarks = (): BookmarkContextType => {
    const context = useContext(BookmarkContext);
    if (!context) {
        throw new Error('useBookmarks must be used within a BookmarkProvider');
    }
    return context;
};
