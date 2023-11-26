import { Button, TextInput } from "react-native-paper";
import Header from "../components/common/Header";
import { StyleSheet, View } from "react-native";
import { login, signUp } from "../utils/authFunctions";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { auth } from "../config/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [secure, setSecure] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("inside useEffect");
        router.push({ pathname: "/" });
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Password"
        secureTextEntry={secure}
        right={<TextInput.Icon icon="eye" onPress={() => setSecure(!secure)} />}
        value={pass}
        onChangeText={(pass) => setPass(pass)}
      />
      <Button onPress={() => signUp(email, pass)}>SignUp</Button>
      <Button onPress={() => login(email, pass)}>Login</Button>
      {/* // google login */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
