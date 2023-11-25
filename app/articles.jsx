import Header from "../components/common/Header.jsx";
import ArticleCard from "../components/common/ArticleCard.jsx";
import NavBar from "../components/common/NavBar/NavBar.jsx";
import { Text, View } from "react-native";


export default function Articles() {
  return (
    <View>
      <Header />
      <Text>Articles</Text>
      <ArticleCard />
      <NavBar />
    </View>
  );
}
