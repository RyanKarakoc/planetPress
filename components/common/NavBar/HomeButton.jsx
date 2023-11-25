import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function HomeButton() {

    return (
        <View style={styles.container}>
            <Button style={styles.button} icon="home" />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        
    },
    button: {
      
    }
});