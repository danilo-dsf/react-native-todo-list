import { StyleSheet } from 'react-native';

import { useThemeStore } from '@/src/stores';

export function useAppHeaderStyles() {
  const { themeConfig } = useThemeStore();

  return StyleSheet.create({
    container: { flexDirection: 'row', gap: 16, alignItems: 'center' },
    title: {
      flex: 1,
      color: themeConfig.title,
      fontWeight: 'bold',
      fontSize: 24,
    },
    addButton: {
      width: 32,
      height: 32,
      borderRadius: 999,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: themeConfig.secondary,
    },
    addButtonIcon: { color: themeConfig.buttonText, fontSize: 20 },
  });
}
