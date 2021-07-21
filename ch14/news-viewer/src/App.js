import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './page/NewsPage';

const App = () => {
  // 1) useState로 카테고리를 관리하는 방법
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );

  // 2) URL 파라미터를 통해 category 값을 관리하는 방법
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
