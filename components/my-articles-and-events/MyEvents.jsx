import Header from "../common/Header.jsx";
import EventCard from "../common/EventCard.jsx";
import NavBar from "../common/NavBar/NavBar.jsx";


export default function MyEvents() {
    return (
        <div>
            <Header />
            <h1>My Events</h1>
            <EventCard />
            <NavBar />
        </div>
    );
};