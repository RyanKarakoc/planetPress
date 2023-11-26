import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import NavBar from './NavBar/NavBar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScreenLayout({ children }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Header />

      {/* <ScrollView>{children}</ScrollView> */}
      <View style={styles.mainContentContainer}>{children}</View>

      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContentContainer: {
    flex: 1, // grow into available space
  },
});
