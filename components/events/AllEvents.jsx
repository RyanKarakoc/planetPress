
import EventCard from "../common/EventCard.jsx";
import NavBar from "../common/NavBar/NavBar.jsx";
import { FlatList } from "react-native";
// import { useGlobalState } from "../../providers/GlobalState.jsx";
import { useEffect, useState } from "react";

import { events } from "../../dummy-data/index.js"

export default function AllEvents() {

  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setSavedEvents(events);
      console.log(savedEvents);
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
      <NavBar />
    </>
  );
}

