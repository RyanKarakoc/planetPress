import Header from "../common/Header.jsx";
import EventCard from "../common/EventCard.jsx";
import NavBar from "../common/NavBar/NavBar.jsx";
import { Text, View } from "react-native";

export default function AllEvents() {
  return (
    <View>
      <Header />
      <Text>AllEvents</Text>
      <EventCard />
      <NavBar />
    </View>
  );
}
