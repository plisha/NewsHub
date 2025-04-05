import React from 'react';
import './FeaturedWorldNews.css';

const FeaturedWorldNews = ({ article }) => {
  return (
    <div className="featured-news">
      <div className="featured-image">
        <img src={article.imageUrl} alt={article.title} />
        <div className="featured-overlay">
          <span className="featured-badge">Featured</span>
          <span className="featured-category">{article.category}</span>
        </div>
      </div>
      <div className="featured-content">
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <div className="featured-meta">
          <div className="featured-tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="featured-tag">{tag}</span>
            ))}
          </div>
          <div className="featured-info">
            <span className="featured-author">By {article.author}</span>
            <span className="featured-date">{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorldNews; 