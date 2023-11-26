import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlanetPress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 20,
    position: "absolute",
    top: 0,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: "#274e13",
    borderRadius: 8,
    backgroundColor: "#8fce00",
    color: "#274e13",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
