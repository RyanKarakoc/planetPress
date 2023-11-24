import Header from '../common/Header.jsx'; 
import EventCard from '../common/EventCard.jsx';
import NavBar from '../common/NavBar/NavBar.jsx';


export default function AllArticles() {

    return (
        <div>
            <Header />
            <h1>AllEvents</h1>
            <EventCard /> 
            <NavBar />
        </div>
    );

};