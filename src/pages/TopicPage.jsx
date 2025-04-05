import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import './TopicPage.css';

// Import all news data
import { politicsNews } from '../data/politicsNews';
import { sportsNews } from '../data/sportsNews';
import { agricultureNews } from '../data/agricultureNews';
import { educationNews } from '../data/educationNews';
import { healthcareNews } from '../data/healthcareNews';
import { indianNews } from '../data/indianNews';
import { worldNews } from '../data/worldNews';
import { cricketNews } from '../data/cricketNews';
import { businessNews } from '../data/businessNews';
import { entertainmentNews } from '../data/entertainmentNews';

const TopicPage = () => {
  const { topicId } = useParams();
  const [displayedNews, setDisplayedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let newsToDisplay = [];

    switch(topicId) {
      case 'politics':
        newsToDisplay = politicsNews;
        break;
      case 'sports':
        newsToDisplay = sportsNews;
        break;
      case 'agriculture':
        newsToDisplay = agricultureNews;
        break;
      case 'education':
        newsToDisplay = educationNews;
        break;
      case 'health-care':
        newsToDisplay = healthcareNews;
        break;
      case 'indian-news':
        newsToDisplay = indianNews;
        break;
      case 'world':
        newsToDisplay = worldNews;
        break;
      case 'cricket-news':
        newsToDisplay = cricketNews;
        break;
      case 'business':
        newsToDisplay = businessNews;
        break;
      case 'entertainment':
        newsToDisplay = entertainmentNews;
        break;
      default:
        // For homepage, show mix of all news
        newsToDisplay = [
          ...politicsNews.slice(0, 2),
          ...worldNews.slice(0, 2),
          ...businessNews.slice(0, 2),
          ...entertainmentNews.slice(0, 2),
          ...sportsNews.slice(0, 2)
        ].sort(() => Math.random() - 0.5);
    }

    setDisplayedNews(newsToDisplay);
    setLoading(false);
  }, [topicId]);

  const getTopicTitle = () => {
    if (!topicId) return 'Latest News';
    return topicId.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="topic-page">
      <div className="topic-header">
        <h1 className="topic-title">{getTopicTitle()}</h1>
        <p className="topic-count">{displayedNews.length} Articles</p>
      </div>

      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <>
          {displayedNews.length === 0 ? (
            <div className="no-news">
              <p>No articles found for this topic.</p>
            </div>
          ) : (
            <div className="news-grid">
              {displayedNews.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TopicPage; 