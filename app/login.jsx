import Header from "../components/common/Header";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { auth, googleProvider} from "../config/firebase";
import { signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { StyleSheet } from 'react-native';


export default function Login(){

    console.log(googleProvider);
    console.log(signInWithRedirect);
    useEffect(() => {
        signInWithRedirect(auth, googleProvider);
        getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    
      }, []);


    return(
        <View style={styles.container}>
            <Header />
            <Text>Login</Text>
            {/* // google login */}
          
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