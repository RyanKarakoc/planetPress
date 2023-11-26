import { StyleSheet } from 'react-native';
import { logout } from '../utils/authFunctions';
import { Button } from 'react-native-paper';
import ScreenLayout from '../components/common/ScreenLayout';

export default function Account() {
  return (
    <ScreenLayout>
      <Button mode="contained" style={styles.button} onPress={() => logout()}>
        Logout
      </Button>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    backgroundColor: '#274e13',
  },
});
