import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar/NavBar";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { logout } from "../utils/authFunctions";
import { Button } from "react-native-paper";

export default function Account() {
  return (
    <View style={styles.container}>
      <Header />
      <Button mode="contained" style={styles.button} onPress={() => logout()}>
        Logout
      </Button>
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
  button: {
    backgroundColor: "#274e13",
  },
});
