import EventCard from "../common/EventCard.jsx";
import { FlatList } from "react-native";
import { useGlobalState } from "../../providers/GlobalState.jsx";

export default function AllEvents() {
  const { allEvents } = useGlobalState();

  return (
    <FlatList
      data={allEvents}
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
  );
}
