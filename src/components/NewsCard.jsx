import './NewsCard.css';
import ArticleModal from './ArticleModal';
import React, { useState, useEffect } from 'react';

const NewsCard = ({ article }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile state when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get appropriate fallback image based on category
  const getFallbackImage = (category) => {
    // Convert to lowercase and remove spaces for comparison
    const cat = (category || '').toLowerCase().replace(/\s+/g, '');
    
    switch(cat) {
      case 'sports':
        return 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop';
      case 'cricket':
        return 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1167&auto=format&fit=crop';
      case 'indiannews':
        return 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1476&auto=format&fit=crop';
      case 'world':
        return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop';
      case 'business':
        return 'https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=1528&auto=format&fit=crop';
      case 'entertainment':
        return 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=1471&auto=format&fit=crop';
      case 'politics':
        return 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1470&auto=format&fit=crop';
      default:
        return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1470&auto=format&fit=crop';
    }
  };

  // Function to calculate time ago
  const getTimeAgo = (dateString) => {
    try {
      const now = new Date();
      const articleDate = new Date(dateString);
      
      if (isNaN(articleDate.getTime())) {
        return "Recent";
      }
      
      const diffInMinutes = Math.floor((now - articleDate) / (1000 * 60));
      
      if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`;
      } else if (diffInMinutes < 1440) {
        const hours = Math.floor(diffInMinutes / 60);
        return `${hours} hours ago`;
      } else {
        const days = Math.floor(diffInMinutes / 1440);
        return `${days} days ago`;
      }
    } catch (error) {
      console.error('Error calculating time:', error);
      return "Recent";
    }
  };

  // Handle missing article data
  if (!article) {
    return <div className="news-card error-card">Article data missing</div>;
  }

  // Check if this is cricket news
  const isCricket = article.category === "Cricket";
  
  return (
    <>
      <div className={`news-card ${isCricket ? 'cricket-news' : ''}`}>
        <div className="news-card-image">
          <img 
            src={article.imageUrl || getFallbackImage(article.category)} 
            alt={article.title || 'News article'}
            onError={(e) => {
              if (!imageError) {
                setImageError(true);
                e.target.src = getFallbackImage(article.category);
              }
            }}
          />
          <div className="news-card-overlay">
            <button 
              className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </button>
            {article.category && <span className="category-badge">{article.category}</span>}
          </div>
          {article.date && <span className="time-badge">{getTimeAgo(article.date)}</span>}
        </div>
        <div className="news-card-content">
          <h3>{article.title || 'Untitled Article'}</h3>
          <p>{article.summary || 'No summary available'}</p>
          
          <div className="news-meta">
            {article.tags && article.tags.length > 0 && (
              <div className="tags">
                {article.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            )}
            {article.author && (
              <div className="author-info">
                <span className="author">By {article.author}</span>
              </div>
            )}
            <span className="article-count">{article.tags ? article.tags.length : 0} Tags</span>
          </div>
          
          {article.affectedRegions && article.affectedRegions.states && (
            <div className="affected-regions">
              <span className="region-label">Regions:</span>
              {article.affectedRegions.states.map((region, index) => (
                <span key={index} className="region-tag">{region}</span>
              ))}
            </div>
          )}
          
          <button 
            className="read-more-btn"
            onClick={() => setShowModal(true)}
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {showModal && (
        <ArticleModal 
          article={article} 
          onClose={() => setShowModal(false)}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export default NewsCard; 