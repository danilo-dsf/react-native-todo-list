import { Text, View } from 'react-native';

export default function AppRoot() {
  return (
    <View
      style={{
        backgroundColor: 'lightgreen',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Hello world!</Text>
    </View>
  );
}
