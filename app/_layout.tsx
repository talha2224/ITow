import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register" options={{ headerShown: false }} />
        <Stack.Screen name="auth/otp" options={{ headerShown: false }} />
        <Stack.Screen name="auth/username" options={{ headerShown: false }} />
        <Stack.Screen name="auth/profile" options={{ headerShown: false }} />

        <Stack.Screen name="auth/driver/index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/driver/otp" options={{ headerShown: false }} />
        <Stack.Screen name="auth/driver/username" options={{ headerShown: false }} />
        <Stack.Screen name="auth/driver/profile" options={{ headerShown: false }} />


        <Stack.Screen name="home/index" options={{ headerShown: false }} />
        <Stack.Screen name="home/map" options={{ headerShown: false }} />
        <Stack.Screen name="home/request" options={{ headerShown: false }} />
        <Stack.Screen name="home/history" options={{ headerShown: false }} />
        <Stack.Screen name="home/service" options={{ headerShown: false }} />
        <Stack.Screen name="home/rerequest" options={{ headerShown: false }} />
        <Stack.Screen name="home/profile/index" options={{ headerShown: false }} />
        <Stack.Screen name="home/profile/otp" options={{ headerShown: false }} />
        <Stack.Screen name="home/profile/setting" options={{ headerShown: false }} />
        <Stack.Screen name="home/profile/about" options={{ headerShown: false }} />

        <Stack.Screen name="driver/index" options={{ headerShown: false }} />
        <Stack.Screen name="driver/create" options={{ headerShown: false }} />
        <Stack.Screen name="driver/notification" options={{ headerShown: false }} />
        <Stack.Screen name="driver/details" options={{ headerShown: false }} />
        <Stack.Screen name="driver/services" options={{ headerShown: false }} />
        <Stack.Screen name="driver/history" options={{ headerShown: false }} />

        <Stack.Screen name="driver/profile/index" options={{ headerShown: false }} />
        <Stack.Screen name="driver/profile/otp" options={{ headerShown: false }} />
        <Stack.Screen name="driver/profile/setting" options={{ headerShown: false }} />
        <Stack.Screen name="driver/profile/about" options={{ headerShown: false }} />
        <Stack.Screen name="driver/profile/earnings" options={{ headerShown: false }} />




        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
