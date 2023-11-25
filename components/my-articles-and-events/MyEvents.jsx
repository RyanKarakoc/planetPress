import Header from "../common/Header.jsx";
import EventCard from "../common/EventCard.jsx";
import NavBar from "../common/NavBar/NavBar.jsx";
import { Text, View } from "react-native";

export default function MyEvents() {
  return (
    <View>
      <Header />
      <Text>My Events</Text>
      <EventCard />
      <NavBar />
    </View>
  );
}
