import Header from "../components/common/Header.jsx";
import ArticleCard from "../components/common/ArticleCard.jsx";
import NavBar from "../components/common/NavBar/NavBar.jsx";

export default function Articles() {
    return (
        <div>
            <Header />
            <h1>Articles</h1>
            <ArticleCard />
            <NavBar />
        </div>
    );
};