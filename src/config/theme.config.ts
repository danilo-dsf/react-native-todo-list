export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ThemeConfigType = {
  primary: string;
  secondary: string;
  background: string;
  backgroundOffset: string;
  title: string;
  text: string;
  buttonText: string;
};

export const ThemeConfig: Record<Theme, ThemeConfigType> = {
  dark: {
    primary: '#27ae60',
    secondary: '#16a085',
    background: '#2c3e50',
    backgroundOffset: '#34495e',
    title: '#ecf0f1',
    text: '#bdc3c7',
    buttonText: '#ffffff',
  },
  light: {
    primary: '#27ae60',
    secondary: '#16a085',
    background: '#ecf0f1',
    backgroundOffset: '#bdc3c7',
    title: '#2c3e50',
    text: '#34495e',
    buttonText: '#ffffff',
  },
};
