import Header from "../common/Header.jsx";
import ArticleCard from "../common/ArticleCard.jsx";
import NavBar from "../common/NavBar/NavBar.jsx";
import { View, Text } from "react-native";


export default function MyArticles() {
    return (
        <View>
            <Header />
            <Text>My Articles</Text>
            <ArticleCard />
            <NavBar />
        </View>
    );
};
