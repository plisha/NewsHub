import React from 'react';
import { entertainmentNews } from '../data/entertainmentNews';
import NewsCard from '../components/NewsCard';
import './TopicPage.css';

const EntertainmentNews = () => {
  return (
    <div className="topic-page">
      <h2>Entertainment News</h2>
      <div className="news-grid">
        {entertainmentNews.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default EntertainmentNews; 