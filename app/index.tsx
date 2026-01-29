import { Redirect } from 'expo-router';
import { Platform } from 'react-native';

/**
 * Root index component
 * On mobile, it redirects to the main app (home tab)
 * On web, it's overridden by index.web.tsx (the landing page)
 */
export default function Index() {
    // This will only run on mobile or if index.web.tsx is missing
    return <Redirect href="/home" />;
}
