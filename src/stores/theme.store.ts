import { create } from 'zustand';

import { Theme, ThemeConfig, ThemeConfigType } from '../config';

type ThemeStoreType = {
  theme: Theme;
  themeConfig: ThemeConfigType;
  toggleTheme: () => Promise<void>;
};

export const useThemeStore = create<ThemeStoreType>((set, get) => ({
  theme: Theme.DARK,
  themeConfig: ThemeConfig.dark,
  toggleTheme: async () => {
    if (get().theme === Theme.DARK) {
      set({ theme: Theme.LIGHT, themeConfig: ThemeConfig.light });
    } else {
      set({ theme: Theme.DARK, themeConfig: ThemeConfig.dark });
    }
  },
}));
