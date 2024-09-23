import { Text, TouchableOpacity, View } from 'react-native';

import { useThemeStore } from '../stores';

export default function AppRoot() {
  const { themeConfig, toggleTheme } = useThemeStore();

  return (
    <View
      style={{
        backgroundColor: themeConfig.background,
        flex: 1,
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
      }}
    >
      <Text
        style={{ color: themeConfig.title, fontWeight: 'bold', fontSize: 20 }}
      >
        Hello world!
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: themeConfig.primary,
          padding: 8,
          width: '100%',
          borderRadius: 8,
        }}
        onPress={toggleTheme}
      >
        <Text
          style={{
            color: themeConfig.buttonText,
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center',
          }}
        >
          Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
}
