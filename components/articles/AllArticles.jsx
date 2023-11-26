import ArticleCard from '../common/ArticleCard.jsx';
import { FlatList } from 'react-native';
import { useGlobalState } from '../../providers/GlobalState.jsx';

export default function AllArticles() {
  const { allArticles } = useGlobalState();

  return (
    <FlatList
      data={allArticles}
      renderItem={({ item }) => (
        <ArticleCard
          key={item.id}
          id={item.id}
          headline={item.headline}
          preview={item.preview}
          img_url={item.img_url}
          url={item.url}
        />
      )}
    />
  );
}
