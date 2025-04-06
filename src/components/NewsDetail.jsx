import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsDetail.css';

const NewsDetail = ({ article, onClose }) => {
  const navigate = useNavigate();
  
  if (!article) {
    return <div className="article-not-found">Article not found</div>;
  }

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="news-detail">
      <div className="news-detail-container">
        {/* Back Button */}
        <button className="back-button" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to News
        </button>

        {/* Top Meta Information */}
        <div className="news-meta-top">
          <div className="category-time">
            <span className="category-badge">{article.category}</span>
            <span className="time-badge">{formatDate(article.date)}</span>
          </div>
          {article.location && (
            <div className="location-info">
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {article.location}
            </div>
          )}
        </div>

        {/* Article Header */}
        <div className="news-detail-header">
          <h1>{article.title}</h1>
          {article.subtitle && <p className="subtitle">{article.subtitle}</p>}
        </div>

        {/* Author Section */}
        <div className="author-section">
          <div className="author-info">
            <div className="author-avatar">
              {article.authorImage ? (
                <img src={article.authorImage} alt={article.author} />
              ) : (
                <div className="author-initials">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="author-details">
              <span className="author-name">{article.author}</span>
              {article.authorRole && (
                <span className="author-role">{article.authorRole}</span>
              )}
            </div>
          </div>
          <span className="last-updated">
            Last updated: {formatDate(article.lastUpdated || article.date)}
          </span>
        </div>

        {/* Featured Image */}
        <div className="news-detail-image">
          <img src={article.imageUrl} alt={article.title} />
          {article.imageCaption && (
            <div className="image-caption">
              <span>{article.imageCaption}</span>
              {article.imageCredit && (
                <span className="image-credit">Photo: {article.imageCredit}</span>
              )}
            </div>
          )}
        </div>

        {/* Quick Facts */}
        {article.keyPoints && (
          <div className="quick-facts">
            <h3>Key Points</h3>
            <ul>
              {article.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content */}
        <div className="news-detail-content">
          {/* Summary */}
          <div className="article-summary">
            <p>{article.summary}</p>
          </div>

          {/* Full Content */}
          <div className="article-full-content">
            {article.content && article.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Impact Analysis */}
          {article.impact && (
            <div className="impact-analysis">
              <h3>Impact Analysis</h3>
              <p>{article.impact}</p>
            </div>
          )}

          {/* Affected Regions */}
          {article.affectedRegions && (
            <div className="affected-regions">
              <h3>Affected Regions</h3>
              <div className="regions-grid">
                {article.affectedRegions.map((region, index) => (
                  <div key={index} className="region-card">
                    <span className="region-name">{region.name}</span>
                    {region.impact && (
                      <span className="region-detail">{region.impact}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Sources */}
          {article.sources && article.sources.length > 0 && (
            <div className="sources">
              <h3>Sources</h3>
              <ul className="sources-list">
                {article.sources.map((source, index) => (
                  <li key={index}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Related Articles */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div className="related-articles">
            <h3>Related Articles</h3>
            <div className="related-articles-grid">
              {article.relatedArticles.map((related, index) => (
                <div 
                  key={index} 
                  className="related-article-card"
                  onClick={() => navigate(`/article/${related.id}`)}
                >
                  <img src={related.imageUrl} alt={related.title} />
                  <div className="related-article-content">
                    <h4>{related.title}</h4>
                    <span className="related-article-date">
                      {formatDate(related.date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail; 