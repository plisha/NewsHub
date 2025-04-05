import React from 'react';
import { businessNews } from '../data/businessNews';
import NewsCard from '../components/NewsCard';
import './TopicPage.css';

const BusinessNews = () => {
  return (
    <div className="topic-page">
      <h2>Business News</h2>
      <div className="news-grid">
        {businessNews.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default BusinessNews; 