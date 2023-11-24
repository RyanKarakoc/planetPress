import Header from "../components/common/Header.jsx";
import EventCard from "../components/common/EventCard.jsx";
import NavBar from "../components/common/NavBar/NavBar.jsx";
import { View, Text } from "react-native";

export default function Events() {
    return (
        <View>
            <Header />
            <Text>Events</Text>
            <EventCard />
            <NavBar />
        </View>
    );
};