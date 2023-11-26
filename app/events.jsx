import Header from "../components/common/Header.jsx";
import EventCard from "../components/common/EventCard.jsx";
import NavBar from "../components/common/NavBar/NavBar.jsx";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import AllEvents from "../components/events/AllEvents.jsx";

export default function Events() {
  return (
    <View style={styles.container}>
      <Header />
      <AllEvents/>
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
    paddingTop: 95,
  },
});
