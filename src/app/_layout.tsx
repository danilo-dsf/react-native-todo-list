import { useEffect } from 'react';

import { Stack } from 'expo-router/stack';

import { Theme } from '../config';
import { useThemeStore } from '../stores';

export default function Layout() {
  const { theme, themeConfig, loadTheme } = useThemeStore();

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarColor: themeConfig.primary,
        statusBarStyle: theme === Theme.DARK ? 'light' : 'dark',
      }}
    />
  );
}
