import HomeButton from "./HomeButton";
import ArticlesButton from "./ArticlesButton";
import EventsButton from "./EventsButton";
import LikedButton from "./LikedButton";
import AccountButton from "./AccountButton";
import { View, Text } from 'react-native';

export default function NavBar() {
    
        return (
            <View>
                <Text>NavBar</Text>
                <HomeButton />
                <ArticlesButton />
                <EventsButton />
                <LikedButton />
                <AccountButton />
            </View>
        );
    
};

