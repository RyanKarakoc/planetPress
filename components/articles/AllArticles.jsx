import Header from "../common/Header.jsx";
import ArticleCard from "../common/ArticleCard.jsx";
import NavBar from "../common/NavBar/NavBar.jsx";
import { Text, View } from "react-native";
import { useGlobalState } from "../../providers/GlobalState.jsx";
import { ScrollView } from "react-native";

export default function AllArticles() {
  const { allArticles } = useGlobalState();

  return (
    <ScrollView>
      {allArticles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          headline={article.headline}
          preview={article.preview}
          img_url={article.img_url}
          url={article.url}
        />
      ))}

      <NavBar />
    </ScrollView>
  );
}
