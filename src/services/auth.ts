import { createAuthClient } from "@neondatabase/auth";

// The Neon Auth URL should be configured in your Neon project's Auth settings.
// For mobile/native, we typically use the Neon Auth URL directly.
const NEON_AUTH_URL = process.env.EXPO_PUBLIC_NEON_AUTH_URL || "";

if (!NEON_AUTH_URL) {
    console.warn("EXPO_PUBLIC_NEON_AUTH_URL is not defined. Authentication will not work.");
}

export const authClient = createAuthClient(NEON_AUTH_URL);

/**
 * Helper to check if a user is authenticated
 */
export const isAuthenticated = async (): Promise<boolean> => {
    try {
        const session = await authClient.getSession();
        return !!session;
    } catch (error) {
        console.error("Error checking auth status:", error);
        return false;
    }
};

/**
 * Get current user session
 */
export const getSession = async () => {
    return await authClient.getSession();
};
