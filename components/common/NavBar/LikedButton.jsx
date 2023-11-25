import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';
import { router } from 'expo-router';

export default function LikedButton() {

    const handleOnPress = () => {
        console.log('inside handleOnPress')
        router.push({pathname: '/my-articles-and-events'})
    };

    return (
        <>
            <Appbar.Action 
                icon="folder-heart-outline"
                color={'#274e13'} 
                size={40} 
                onPress={handleOnPress} 
            />
        </>
    );

};

