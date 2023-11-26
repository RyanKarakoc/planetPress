import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar/NavBar";
import { View } from "react-native";
import MyArticles from "../components/my-articles-and-events/MyArticles";
import MyEvents from "../components/my-articles-and-events/MyEvents";
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { useState } from 'react';
import ScreenLayout from '../components/common/ScreenLayout';


export default function MyArticlesAndEvents() {

  const Articles = <MyArticles/>;
  const Events = <MyEvents/>;

  const [articlesOrEvents, setArticlesOrEvents] = React.useState(null);

    return (
      
      <ScreenLayout>
          <SafeAreaView style={styles.container}>
            <SegmentedButtons
              style={styles.buttons}
              value={articlesOrEvents}
              onValueChange={setArticlesOrEvents}
              buttons={[
                {
                  value: Articles,
                  label: 'My Articles',
                  icon: 'newspaper',
                },
                {
                  value: Events,
                  label: 'My Events',
                  icon: 'calendar',
                },
              ]}
            />
      </SafeAreaView>
      
        {articlesOrEvents}
       
     
      </ScreenLayout>
      
    
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",  
  },
  buttons: {
    
    
  },  

});
