import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { Stack } from 'expo-router/stack';
import * as SplashScreen from 'expo-splash-screen';

import { Theme } from '../config';
import { useThemeStore } from '../stores';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const { theme, themeConfig, loadTheme } = useThemeStore();

  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadTheme();
      } catch (error) {
        console.warn(error);
      } finally {
        setIsAppReady(true);
      }
    }

    prepare();
  }, [loadTheme]);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarColor: themeConfig.primary,
          statusBarStyle: theme === Theme.DARK ? 'light' : 'dark',
        }}
      />
    </View>
  );
}
