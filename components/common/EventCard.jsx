import * as React from "react";
import { Linking } from "react-native";
import { Avatar, Button, Card, Text, IconButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import { saveEvent } from "../../utils/dbFunctions.js";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function EventCard({
  id,
  eventName,
  date,
  month,
  dayAndTime,
  location,
  img_url,
  url,
}) {
  const handleSeeFullEvent = () => {
    console.log("clicked see full Event");
    Linking.openURL(url);
  };

  const handleSaveEvent = () => {
    saveEvent(id);
    console.log("clicked save Event");
  };

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text style={styles.eventName} variant="titleLarge">
          {eventName}
        </Text>
        <Text style={styles.when} variant="bodyMedium">
          {date} {month} {dayAndTime}
        </Text>
      </Card.Content>
      <Card.Cover source={{ uri: `${img_url}` }} />
      <Card.Actions style={styles.bottom}>
        <Button
          textColor="white"
          style={styles.button}
          onPress={handleSeeFullEvent}
        >
          See full event
        </Button>
        <IconButton onPress={handleSaveEvent} style={styles.icon} icon="bell" />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#8fce00",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    backgroundColor: "#274e13",
    border: "solid",
    height: 40,
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    margin: 0,
  },
  eventName: {
    color: "#274e13",
    fontWeight: "bold",
  },
  when: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

// TODO: Fix bell icon color