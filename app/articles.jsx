import Header from "../components/common/Header.jsx";
import ArticleCard from "../components/common/ArticleCard.jsx";
import NavBar from "../components/common/NavBar/NavBar.jsx";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useGlobalState } from "../providers/GlobalState.jsx";

export default function Articles() {
  const { allArticles, setAllArticles } = useGlobalState();

  return (
    <View style={styles.container}>
      <Header />
      <Text>Articles</Text>
      <ArticleCard />
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
});
