import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "../config/firebase";
import { useRouter } from "expo-router";
import { Button } from "react-native-paper";
import { logout } from "../utils/authFunctions";
import { useEffect } from "react";

export default function App() {
  const route = useRouter();

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        route.push({ pathname: "/login" });
      }
    });
    return subscribe;
  }, []);

  return (
    // if user is logged in show home page, if not, redirect to login page.
    <View style={styles.container}>
      <Header />
      <Text>Open up index.js to start working on your app!</Text>
      <Text>
        Logged in as: {auth.currentUser ? auth.currentUser.email : null}
      </Text>
      <Button onPress={() => logout()}>Logout</Button>
      <StatusBar style="auto" />
      <NavBar />
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
