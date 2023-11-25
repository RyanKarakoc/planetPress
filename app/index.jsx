import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "../config/firebase";
import { Redirect, useRouter } from "expo-router";
import Login from "./login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  console.log("index");
  if (!auth.currentUser) {
    return <Redirect href="./login" />;
  }

  return (
    <View style={styles.container}>
      <Text>Open up index.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
