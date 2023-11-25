import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function EventsButton() {

    return (
        <View>
            <Button icon="calendar" />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
    },
});