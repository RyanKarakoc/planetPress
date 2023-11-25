import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar/NavBar";
import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';


export default function Account(){
    return(
        <View style={styles.container}>
            <Header />
            <Text>Account/sign out</Text>
            <NavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });