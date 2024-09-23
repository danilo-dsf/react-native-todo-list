import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

import { Theme, ThemeConfig, ThemeConfigType } from '../config';

type ThemeStoreType = {
  theme: Theme;
  themeConfig: ThemeConfigType;
  toggleTheme: () => Promise<void>;
  loadTheme: () => Promise<void>;
};

export const useThemeStore = create<ThemeStoreType>((set, get) => ({
  theme: Theme.DARK,
  themeConfig: ThemeConfig.dark,
  toggleTheme: async () => {
    if (get().theme === Theme.DARK) {
      set({ theme: Theme.LIGHT, themeConfig: ThemeConfig.light });
      await AsyncStorage.setItem('@todo-list:theme', Theme.LIGHT);
    } else {
      set({ theme: Theme.DARK, themeConfig: ThemeConfig.dark });
      await AsyncStorage.setItem('@todo-list:theme', Theme.DARK);
    }
  },
  loadTheme: async () => {
    const theme = await AsyncStorage.getItem('@todo-list:theme');

    if (theme) {
      set({ theme: theme as Theme, themeConfig: ThemeConfig[theme as Theme] });
    }
  },
}));
