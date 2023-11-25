import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { auth } from '../config/firebase';
import { Redirect } from 'expo-router';
import Header from '../components/common/Header';


export default function App() {

  console.log(auth); 
  if(!auth.currentUser){
    console.log('not logged in');
    return <Redirect href="/login" />;
  };

  return (
    // if user is logged in show home page, if not, redirect to login page.
    <View style={styles.container}>
      <Header />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// test