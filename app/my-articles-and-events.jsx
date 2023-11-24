import Header from "../components/common/Header";
import ArticleCard from "../components/common/ArticleCard";
import EventCard from "../components/common/EventCard";
import NavBar from "../components/common/NavBar/NavBar";


export default function MyArticlesAndEvents() {
    return (
        <div>
            <Header />
            <h1>My Articles and Events</h1>
            {/* Make tab-switching functionality */}
            <ArticleCard />
            <EventCard />
            <NavBar />
        </div>
    );
};