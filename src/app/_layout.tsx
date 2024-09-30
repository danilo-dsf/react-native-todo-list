import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { Stack } from 'expo-router/stack';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { useThemeStore } from '../stores';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const { themeConfig, loadTheme } = useThemeStore();

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
      <StatusBar
        backgroundColor={themeConfig.background}
        style={themeConfig.statusBarStyle}
      />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}
