import { Button, TextInput } from "react-native-paper";
import Header from "../components/common/Header";
import { StyleSheet, View, Text } from "react-native";
import { login, signUp } from "../utils/authFunctions";
import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { auth } from "../config/firebase";

export default function Login() {
  console.log("login");
  console.log(auth.currentUser);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("inside useEffect");
        return <Redirect href="./index" />;
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <Header />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        value={pass}
        onChangeText={(pass) => setPass(pass)}
      />
      <Button onPress={() => signUp(auth, email, pass)}>SignUp</Button>
      <Button onPress={() => login(auth, email, pass)}>Login</Button>
      {/* // google login */}
    </View>
  );
}
