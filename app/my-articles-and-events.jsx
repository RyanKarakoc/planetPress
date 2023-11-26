import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar/NavBar";
import { View } from "react-native";
import { StyleSheet } from 'react-native';
import MyArticles from "../components/my-articles-and-events/MyArticles";
import MyEvents from "../components/my-articles-and-events/MyEvents";


export default function MyArticlesAndEvents() {
    return (
        <View style={styles.container}>
            <Header />
            {/* Make tab-switching functionality */}
            <MyArticles />
            <MyEvents />
            <NavBar />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 95,
  },
});
