import React from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from './NewsCard';
import './TopicNews.css';

const TopicNews = ({ newsData }) => {
  const { topic } = useParams();
  
  // Convert topic URL format to display format
  const formatTopicName = (topic) => {
    return topic
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Filter news by topic
  const topicNews = newsData.filter(article => 
    article.category.toLowerCase() === topic.replace('-', ' ').toLowerCase()
  );

  return (
    <div className="topic-news">
      <div className="topic-header">
        <h1>{formatTopicName(topic)}</h1>
        <span className="article-count">{topicNews.length} Articles</span>
      </div>

      {topicNews.length === 0 ? (
        <div className="no-news">
          <h2>No articles found for this topic</h2>
          <p>Please check back later for updates</p>
        </div>
      ) : (
        <div className="news-grid">
          {topicNews.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicNews; 