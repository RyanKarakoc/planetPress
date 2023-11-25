import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function LikedButton() {

    return (
        <View style={styles.container}>
            <Button icon="folder-heart-outline" />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
    },
});