import * as React from "react";
import { Linking } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { saveEvent } from "../../utils/dbFunctions.js";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function EventsaveEventCard({ id, eventName, date, month, dayAndTime, location, img_url, url }) {

  const handleSeeFullEvent = () => {
    console.log("clicked see full Event");
    Linking.openURL(url);
  };

  const handleSaveEvent = () => {
    saveEvent(id);
    console.log("clicked save Event");
  };

  return (
    <Card>
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

        <Button
          onPress={handleSaveEvent}
          style={styles.button}
          icon="bell"
        />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: "#274e13",
    border: "solid",
    borderColor: "#274e13",
    borderTopColor: "#274e13",
  },
  eventName: {
    color: "#274e13",
    fontWeight: "bold",
  },
  when: {
    color: "#274e13",
  },
});
