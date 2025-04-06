import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from './NewsCard';
import { getAllNews } from '../data/newsData';
import './TopicNews.css';

const TopicNews = ({ newsData }) => {
  const { topic } = useParams();
  const allNews = getAllNews();
  
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

  // Get related news based on tags and categories
  const relatedNews = useMemo(() => {
    if (topicNews.length === 0) return [];
    
    // Get all unique tags from the current topic's articles
    const topicTags = new Set(
      topicNews.flatMap(article => article.tags || [])
    );
    
    // Find articles that share tags with the current topic
    return allNews
      .filter(article => {
        // Exclude current topic's articles
        if (article.category.toLowerCase() === topic.replace('-', ' ').toLowerCase()) {
          return false;
        }
        
        // Check if article shares any tags with the current topic
        return article.tags?.some(tag => topicTags.has(tag));
      })
      .slice(0, 4); // Limit to 4 related articles
  }, [topicNews, allNews, topic]);

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
        <>
          <div className="news-grid">
            {topicNews.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          
          {relatedNews.length > 0 && (
            <div className="related-news">
              <h2>Related News</h2>
              <div className="news-grid">
                {relatedNews.map(article => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TopicNews; 