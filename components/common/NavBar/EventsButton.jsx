import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';
import { router } from 'expo-router';

export default function EventsButton() {

    const handleOnPress = () => {
        console.log('inside events handleOnPress')
        router.push({pathname: '/events'})
    };

    return (
        <>
            <Appbar.Action 
                icon="calendar" 
                color={'#274e13'} 
                size={40} 
                onPress={handleOnPress} 
            />
        </>
    );

};
