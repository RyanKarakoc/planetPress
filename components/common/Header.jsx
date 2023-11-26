import { usePathname } from 'expo-router';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

import getScreenTitle from '../../utils/getScreenTitle';

export default function Header() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`🌍 ${getScreenTitle(pathname)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#274e13',
  },
  title: {
    maxWidth: 250,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 3,
    borderColor: '#274e13',
    borderRadius: 8,
    backgroundColor: '#8fce00',
    color: '#274e13',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
