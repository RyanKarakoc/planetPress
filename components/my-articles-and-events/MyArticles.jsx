import ArticleCard from "../common/ArticleCard.jsx";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { getSavedArticles } from "../../utils/dbFunctions.js";
import { FlatList } from "react-native";

export default function MyArticles() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getSavedArticles();
      setSavedArticles(articles);
    };
    fetchArticles();
  }, []);

  return (
    <View>
      <FlatList
        data={savedArticles}
        renderItem={({ item }) => (
          <ArticleCard
            key={item.id}
            id={item.id}
            headline={item.headline}
            preview={item.preview}
            img_url={item.img_url}
            url={item.url}
          />
        )}
      />
    </View>
  );
}
