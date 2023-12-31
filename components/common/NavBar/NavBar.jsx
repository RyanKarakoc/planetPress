import HomeButton from './HomeButton';
import ArticlesButton from './ArticlesButton';
import EventsButton from './EventsButton';
import LikedButton from './LikedButton';
import AccountButton from './AccountButton';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function NavBar() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Appbar style={styles.bottom} safeAreaInsets={{ bottom }}>
      <HomeButton style={styles.button} />
      <ArticlesButton style={styles.button} />
      <EventsButton style={styles.button} />
      <LikedButton style={styles.button} />
      <AccountButton style={styles.button} />
    </Appbar>
  );
}

const styles = StyleSheet.create({
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8fce00',
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: '#274e13',
    backgroundColor: '#8fce00',
  },
  button: {
    backgroundColor: '#8fce00',
    border: 'solid',
    borderColor: '#274e13',
    borderTopColor: '#274e13',
  },
});
