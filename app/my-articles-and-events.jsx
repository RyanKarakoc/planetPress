import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar/NavBar";
import { View } from "react-native";
import MyArticles from "../components/my-articles-and-events/MyArticles";
import MyEvents from "../components/my-articles-and-events/MyEvents";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { useState } from "react";
import ScreenLayout from "../components/common/ScreenLayout";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function MyArticlesAndEvents() {
  const Articles = <MyArticles />;
  const Events = <MyEvents />;

  const [articlesOrEvents, setArticlesOrEvents] = useState(null);

  return (
    <ScreenLayout>
      <SegmentedButtons
        style={styles.buttons}
        value={articlesOrEvents}
        onValueChange={setArticlesOrEvents}
        buttons={[
          {
            value: Articles,
            label: "My Articles",
            icon: "newspaper",
          },
          {
            value: Events,
            label: "My Events",
            icon: "calendar",
          },
        ]}
      />
      {articlesOrEvents}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  buttons: {
    flexBasis: "center",
    width: screenWidth,
    marginTop: -2,
  },
});
