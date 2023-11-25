import Header from "../components/common/Header.jsx";
import ArticleCard from "../components/common/ArticleCard.jsx";
import NavBar from "../components/common/NavBar/NavBar.jsx";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';


export default function Articles() {
    return (
        <View style={styles.container}>
            <Header />
            <Text>Articles</Text>
            <ArticleCard />
            <NavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });