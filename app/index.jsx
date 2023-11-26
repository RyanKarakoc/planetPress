import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { auth } from "../config/firebase";
import { useRouter } from "expo-router";
import { Button } from "react-native-paper";
import { useEffect } from "react";
import AllArticles from "../components/articles/AllArticles";
import { useGlobalState } from "../providers/GlobalState";
import ArticleCard from "../components/common/ArticleCard";
import EventCard from "../components/common/EventCard";
import ScreenLayout from '../components/common/ScreenLayout';

// Only used while we don't have access to legit event data
import { events } from "../dummy-data";


export default function App() {
  const route = useRouter();
  const { allArticles } = useGlobalState();
  // const { allEvents } = useGlobalState();
  const featuredItems = [...allArticles.slice(0, 5), ...events.slice(0, 5)];

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        route.push({ pathname: '/login' });
      }
    });
    return subscribe;
  }, []);

  return (
    // if user is logged in show home page, if not, redirect to login page.
    <ScreenLayout>
      <Text>
        Logged in as: {auth.currentUser ? auth.currentUser.email : null}
      </Text>
      <Text style={styles.header}>Featured Articles & Events</Text>
      <FlatList
        styles={styles.flatListContainer}
        data={featuredItems}
        renderItem={({ item }) => {
          if (item.headline) {
            return (
              <ArticleCard
                key={item.id}
                id={item.id}
                headline={item.headline}
                preview={item.preview}
                img_url={item.img_url}
                url={item.url}
              />
            );
          } else {
            return (
              <EventCard
                key={item.id}
                id={item.id}
                eventName={item.eventName}
                date={item.date}
                month={item.month}
                dayAndTime={item.dayAndTime}
                location={item.location}
                img_url={item.img_url}
                url={item.url}
              />
            );
          }
        }}
      />
      <StatusBar style="auto" />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
    marginTop: 3,
  },
  flatListContainer: {
    marginTop: 10,
  },
});
