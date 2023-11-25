import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';
import { router } from 'expo-router';

export default function AccountButton() {

    const handleOnPress = () => {
        console.log('inside handleOnPress')
        router.push({pathname: '/account'})
    };

    return (
       <>
            <Appbar.Action 
                icon="account-cowboy-hat" 
                color={'#274e13'} 
                size={40} 
                onPress={handleOnPress} 
            />
       </>
    );

};


