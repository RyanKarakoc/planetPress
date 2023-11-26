import * as React from "react";
import { Linking } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { saveArticle } from "../../utils/dbFunctions.js";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function ArticleCard({ id, headline, preview, img_url, url }) {

  const handleReadFullArticle = () => {
    console.log("clicked read full article");
    Linking.openURL(url);
  };

  const handleSaveArticle = () => {
    saveArticle(id);
    console.log("clicked save article");
  };

  return (
    <Card style={styles.container}>
      <Card.Content >
        <Text style={styles.headline} variant="titleLarge">
          {headline}
        </Text>
        <Text style={styles.preview} variant="bodyMedium">
          {preview}
        </Text>
      </Card.Content>
      <Card.Cover source={{ uri: `${img_url}` }} />
      <Card.Actions style={styles.bottom}>
        <Button
          textColor="white"
          style={styles.button}
          onPress={handleReadFullArticle}
        >
          Read full article
        </Button>

        <Button
          onPress={handleSaveArticle}
          style={styles.button}
          icon="heart"
        />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#8fce00",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  shadowProp: {
   
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      
  },
  button: {
    backgroundColor: "#274e13",
    border: "solid",
    borderColor: "#274e13",
    borderTopColor: "#274e13",
    height: 25,
    width: '5px !important',
  },
  headline: {
    color: "#274e13",
    fontWeight: "bold",
  },
  preview: {
    color: "#274e13",
  },
});
