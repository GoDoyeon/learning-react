import React from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    // 카테고리 적용
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=22ff47f773bd4db9b21428aa8f6185e1`,
    );
  }, [category]); // category 값이 바뀔 때마다 뉴스를 불러와야 하기 때문에 useEffect의 의존 배열에 category 넣어 줌s

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock> 대기중...</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }
  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }
  // articles 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={articles.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
