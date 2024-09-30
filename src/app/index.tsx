import { Platform, View } from 'react-native';

import { useThemeStore } from '../stores';
import { AppHeader } from './components';

export default function AppRoot() {
  const { themeConfig } = useThemeStore();

  return (
    <View
      style={{
        backgroundColor: themeConfig.background,
        flex: 1,
        padding: 32,
        paddingTop: Platform.OS === 'ios' ? 64 : 0,
      }}
    >
      <AppHeader />
    </View>
  );
}
