import { useEffect, useState } from "react";
import EventCard from "../common/EventCard.jsx";
import { View, Text, FlatList } from "react-native";
import { getSavedEvents } from "../../utils/dbFunctions.js";

export default function MyEvents() {
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getSavedEvents();
      setSavedEvents(events);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <FlatList
        data={savedEvents}
        renderItem={({ item }) => (
          <EventCard
            key={item.id}
            id={item.id}
            eventName={item.eventName}
            date={item.date}
            month={item.month}
            dayAndTime={item.dayAndTime}
            location={item.location}
            img_url={item.img_url}
            url={item.url}
          />
        )}
      />
    </>
  );
}
