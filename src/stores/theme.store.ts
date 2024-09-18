import { create } from 'zustand';

import { Theme, ThemeConfig, ThemeConfigType } from '../config';

type ThemeStoreType = {
  theme: Theme;
  themeConfig: ThemeConfigType;
  setTheme: (theme: Theme) => Promise<void>;
};

export const useThemeStore = create<ThemeStoreType>((set) => ({
  theme: Theme.DARK,
  themeConfig: ThemeConfig.dark,
  setTheme: async (theme) => {
    set({ theme, themeConfig: ThemeConfig[theme] });
  },
}));
