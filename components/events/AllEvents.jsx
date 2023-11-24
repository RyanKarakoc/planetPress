import Header from '../common/Header.jsx'; 
import EventCard from '../common/EventCard.jsx';
import NavBar from '../common/NavBar/NavBar.jsx';
import { View, Text } from 'react-native';


export default function AllArticles() {

    return (
        <View>
            <Header />
            <Text>AllEvents</Text>
            <EventCard /> 
            <NavBar />
        </View>
    );

};