import MyArticles from '../components/my-articles-and-events/MyArticles';
import MyEvents from '../components/my-articles-and-events/MyEvents';
import ScreenLayout from '../components/common/ScreenLayout';

export default function MyArticlesAndEvents() {
  return (
    <ScreenLayout>
      {/* Make tab-switching functionality */}
      <MyArticles />
      <MyEvents />
    </ScreenLayout>
  );
}
