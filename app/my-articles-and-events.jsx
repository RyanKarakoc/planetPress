import Header from "../components/common/Header";
import ArticleCard from "../components/common/ArticleCard";
import EventCard from "../components/common/EventCard";
import NavBar from "../components/common/NavBar/NavBar";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function MyArticlesAndEvents() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>My Articles and Events</Text>
      {/* Make tab-switching functionality */}
      <ArticleCard />
      <EventCard />
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
