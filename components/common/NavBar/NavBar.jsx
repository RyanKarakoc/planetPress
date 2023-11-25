import HomeButton from "./HomeButton";
import ArticlesButton from "./ArticlesButton";
import EventsButton from "./EventsButton";
import LikedButton from "./LikedButton";
import AccountButton from "./AccountButton";
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function NavBar() {
    
        return (
            <View style={styles.container}>
                <HomeButton />
                <ArticlesButton />
                <EventsButton />
                <LikedButton />
                <AccountButton />
            </View>
        );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#8fce00',
        border: 'solid',
        borderColor: '#274e13',
        borderTopColor: '#274e13',
    },
});

