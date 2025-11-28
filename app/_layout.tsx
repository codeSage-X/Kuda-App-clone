import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@shopify/restyle'
import theme from '@theme/themes';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'land',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    BasierRegular: require('../assets/fonts/BasierRegular.otf'),
    BasierMedium: require('../assets/fonts/BasierMedium.otf'),
    BasierSemiBold: require('../assets/fonts/BasierSemiBold.otf'),
    BasierBold: require('../assets/fonts/BasierBold.otf'),
    // ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
       <ThemeProvider theme={theme}>
        <TamaguiProvider config={config}>
          <Stack screenOptions={{ headerShown: false }} />
        </TamaguiProvider>
       </ThemeProvider>
    </QueryClientProvider>
  );
}
