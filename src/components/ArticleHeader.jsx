import React from 'react';
import './ArticleHeader.css';

const ArticleHeader = ({ category, date, author }) => {
  return (
    <div className="article-header-container">
      <div className="article-meta-info">
        <div className="left-section">
          <span className={`category-badge ${category.toLowerCase()}`}>
            {category}
          </span>
          <span className="date-divider">•</span>
          <span className="article-date">{date}</span>
        </div>
        
        <div className="author-section">
          <div className="author-avatar">
            {author.image ? (
              <img src={author.image} alt={author.name} />
            ) : (
              <span className="author-initials">
                {author.name.split(' ').map(n => n[0]).join('')}
              </span>
            )}
          </div>
          <div className="author-info">
            <span className="by-line">By</span>
            <span className="author-name">{author.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader; 