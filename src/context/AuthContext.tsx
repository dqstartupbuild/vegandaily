import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authClient } from '../services/auth';

interface User {
    id: string;
    email: string;
    name?: string;
    image?: string;
}

interface AuthContextType {
    user: User | null;
    session: any | null;
    isLoading: boolean;
    signIn: (email: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const refreshSession = async () => {
        try {
            const response = await authClient.getSession();
            if (response && 'data' in response && response.data) {
                const { user, session } = response.data;
                setSession(session);
                setUser(user as User);
            } else {
                setSession(null);
                setUser(null);
            }
        } catch (error) {
            console.error('Error refreshing session:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refreshSession();
        // Since Neon Auth/Better Auth doesn't have a direct listener in the client yet,
        // we might need to poll or rely on explicit sign-in/sign-out calls.
    }, []);

    const signIn = async (email: string) => {
        // This is a simplified sign-in for demonstration.
        // In a real app, you'd use authClient.signIn.email or magic link.
        await refreshSession();
    };

    const signOut = async () => {
        await authClient.signOut();
        setSession(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, session, isLoading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
