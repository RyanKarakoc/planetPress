import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function AccountButton() {

    return (
        <View style={styles.container}>
            <Button icon="account-cowboy-hat" />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
    },
});