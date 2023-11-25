import { View, Text, Pressable } from 'react-native';
import { Appbar } from 'react-native-paper';
import { router } from 'expo-router';


export default function ArticlesButton() {

    const handleOnPress = () => {
        console.log('inside handleOnPress')
        router.push({pathname: '/articles'})
    };

    return (
        <>
            <Appbar.Action 
                icon="newspaper" 
                color={'#274e13'} 
                size={40} 
                onPress={handleOnPress} 
            />
        </>        
    );

};

