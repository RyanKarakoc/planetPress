import Header from "../components/common/Header.jsx";
import EventCard from "../components/common/EventCard.jsx";
import NavBar from "../components/common/NavBar/NavBar.jsx";

export default function Events() {
    return (
        <div>
            <Header />
            <h1>Events</h1>
            <EventCard />
            <NavBar />
        </div>
    );
};