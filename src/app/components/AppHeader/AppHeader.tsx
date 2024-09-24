import { Text, TouchableOpacity, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import { Theme } from '@/src/config';
import { useThemeStore } from '@/src/stores';

import { useAppHeaderStyles } from './AppHeader.styles';

export function AppHeader() {
  const styles = useAppHeaderStyles();

  const { theme, toggleTheme } = useThemeStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TO DO LIST</Text>

      <TouchableOpacity style={styles.addButton} onPress={toggleTheme}>
        <Feather
          style={styles.addButtonIcon}
          name={theme === Theme.DARK ? 'sun' : 'moon'}
          size={24}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton}>
        <Feather style={styles.addButtonIcon} name="plus" size={24} />
      </TouchableOpacity>
    </View>
  );
}
