import HomeButton from "./HomeButton";
import ArticlesButton from "./ArticlesButton";
import EventsButton from "./EventsButton";
import LikedButton from "./LikedButton";
import AccountButton from "./AccountButton";

export default function NavBar() {
    
        return (
            <div>
                <h1>NavBar</h1>
                <HomeButton />
                <ArticlesButton />
                <EventsButton />
                <LikedButton />
                <AccountButton />
            </div>
        );
    
};

