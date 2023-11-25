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
        <HomeButton style={styles.button} />
        <ArticlesButton style={styles.button} />
        <EventsButton style={styles.button} />
        <LikedButton style={styles.button} />
        <AccountButton style={styles.button} />

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


