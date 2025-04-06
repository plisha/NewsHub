import React, { useState } from 'react';
import './ArticleModal.css';

const ArticleModal = ({ article, onClose, isMobile }) => {
  const [imageError, setImageError] = useState(false);

  // Prevent closing when clicking inside the modal
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getFallbackImage = (category) => {
    // Same fallback image function as in NewsCard
    const cat = (category || '').toLowerCase().replace(/\s+/g, '');
    
    const fallbackImages = {
      world: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop',
      politics: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1470&auto=format&fit=crop',
      business: 'https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=1528&auto=format&fit=crop',
      technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop',
      entertainment: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=1471&auto=format&fit=crop',
      sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop',
      science: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1470&auto=format&fit=crop',
      health: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&auto=format&fit=crop'
    };

    return fallbackImages[cat] || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1470&auto=format&fit=crop';
  };

  return (
    <div className="article-modal-overlay" onClick={onClose}>
      <div className={`article-modal ${isMobile ? 'mobile' : ''}`} onClick={handleModalClick}>
        <button className="close-button" onClick={onClose} aria-label="Close article">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">{article.title}</h2>
        </div>

        <div className="article-content">
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-date">{formatDate(article.date)}</span>
            <span className="article-author">By {article.author}</span>
          </div>

          <div className="article-image-container">
            <img 
              src={article.imageUrl || getFallbackImage(article.category)}
              alt={article.title}
              onError={(e) => {
                if (!imageError) {
                  setImageError(true);
                  e.target.src = getFallbackImage(article.category);
                }
              }}
              className="article-image"
            />
            {article.imageCaption && (
              <div className="image-caption">{article.imageCaption}</div>
            )}
          </div>

          <div className="article-summary">
            {article.summary}
          </div>

          <div className="article-full-content">
            {article.content && article.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="article-tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleModal; 