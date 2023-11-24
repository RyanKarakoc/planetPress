import Header from "../common/Header.jsx";
import ArticleCard from "../common/ArticleCard.jsx";
import NavBar from "../common/NavBar/NavBar.jsx";


export default function MyArticles() {
    return (
        <div>
            <Header />
            <h1>My Articles</h1>
            <ArticleCard />
            <NavBar />
        </div>
    );
};