import Header from '../common/Header.jsx'; 
import ArticleCard from '../common/ArticleCard.jsx';
import NavBar from '../common/NavBar/NavBar.jsx';
import { View, Text } from 'react-native';


export default function AllArticles() {

    return (
        <View>
            <Header />
            <Text>AllArticles</Text>
            <ArticleCard /> 
            <NavBar />
        </View>
    );

};