import HomeButton from "./HomeButton";
import ArticlesButton from "./ArticlesButton";
import EventsButton from "./EventsButton";
import LikedButton from "./LikedButton";
import AccountButton from "./AccountButton";
import { View } from 'react-native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;


export default function NavBar() {
    
    const { bottom } = useSafeAreaInsets();
    const theme = useTheme();
  
    return (
      <Appbar
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
            backgroundColor: '#8fce00',
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        <Appbar.Action icon="home" style={styles.button} onPress={() => {}} />
        <Appbar.Action icon="newspaper" style={styles.button} onPress={() => {}} />
        <Appbar.Action icon="calendar" style={styles.button} onPress={() => {}} />
        <Appbar.Action icon="folder-heart-outline" style={styles.button} onPress={() => {}} />
        <Appbar.Action icon="account-cowboy-hat" style={styles.button} onPress={() => {}} />

      </Appbar>
    );
    
};

const styles = StyleSheet.create({
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      backgroundColor: '#8fce00',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    button: {
        backgroundColor: '#8fce00',
        border: 'solid',
        borderColor: '#274e13',
        borderTopColor: '#274e13',
    
    }
  });

// export default function NavBar() {
    
//     return (
//         <View style={styles.container}>
//             <HomeButton />
//             <ArticlesButton />
//             <EventsButton />
//             <LikedButton />
//             <AccountButton />
//         </View>
//     );

// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         backgroundColor: '#8fce00',
//         border: 'solid',
//         borderColor: '#274e13',
//         borderTopColor: '#274e13',
//     },
// });

