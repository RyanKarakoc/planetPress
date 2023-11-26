import { Button, TextInput } from 'react-native-paper';
import Header from '../components/login/Header';
import { StyleSheet, View } from 'react-native';
import { login, signUp } from '../utils/authFunctions';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { auth } from '../config/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('inside useEffect');
        router.push({ pathname: '/' });
      }
    });
    return unsubscribe;
  }, []);

  const togglePasswordVisibility = () => setSecure((prevSecure) => !prevSecure);
  const passwordVisibilityIcon = secure ? (
    <TextInput.Icon
      icon="eye"
      color="#274e13"
      onPress={togglePasswordVisibility}
    />
  ) : (
    <TextInput.Icon
      icon="eye-off"
      color="#274e13"
      onPress={togglePasswordVisibility}
    />
  );

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.loginFormContainer}>
        <TextInput
          style={[styles.formInput, styles.emailInput]}
          activeUnderlineColor="#274e13"
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={[styles.formInput, styles.passwordInput]}
          activeUnderlineColor="#274e13"
          label="Password"
          secureTextEntry={secure}
          right={passwordVisibilityIcon}
          value={password}
          onChangeText={(pass) => setPassword(pass)}
        />

        <View style={styles.buttonsContainer}>
          <Button
            style={styles.loginBtn}
            mode="contained"
            buttonColor="#77ac00"
            onPress={() => login(email, password)}
          >
            Login
          </Button>
          <Button
            style={styles.signUpBtn}
            mode="outlined"
            buttonColor="#ceefbd"
            textColor="#274e13"
            onPress={() => signUp(email, password)}
          >
            SignUp
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loginFormContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },

  formInput: {
    // shared between email & password inputs
    width: '80%',
    backgroundColor: '#f6fcf3',
    borderColor: 'red',
  },
  emailInput: {},
  passwordInput: {},

  buttonsContainer: {
    width: '80%',
    gap: 10,
    marginTop: 20,
  },
  loginBtn: {},
  signUpBtn: {
    borderColor: '#274e13',
  },
});
