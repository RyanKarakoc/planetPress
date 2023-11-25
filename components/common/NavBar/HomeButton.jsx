import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';
import { router } from 'expo-router';

export default function HomeButton() {
    const handleOnPress = () => {
        console.log('inside homeButton handleOnPress')
        router.push({pathname: '/'})
    };

    return (
        <>
            <Appbar.Action 
                icon="home" 
                color={'#274e13'} 
                size={40} 
                onPress={handleOnPress} 
            />
        </>   
    );
};


