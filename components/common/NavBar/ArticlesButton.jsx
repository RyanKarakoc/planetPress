import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';


export default function ArticlesButton() {

    return (
        <View style={StyleSheet.container}>
            <Button icon="newspaper" />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
    },
});