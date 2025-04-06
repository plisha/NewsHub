import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArticleDetail.css';

const ArticleDetail = ({ articles, onClose }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return <div className="article-not-found">Article not found</div>;
  }

  return (
    <div className="article-modal-overlay" onClick={onClose}>
      <div className="article-modal" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-button" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <div className="article-detail">
          <button 
            className="back-button" 
            onClick={() => navigate(-1)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Back to News
          </button>
          
          <div className="article-header">
            <h1>{article.title}</h1>
            <div className="article-meta">
              <span className="date">{article.date}</span>
              <span className="author">By {article.author}</span>
              <span className={`sentiment ${article.sentiment.toLowerCase()}`}>
                {article.sentiment}
              </span>
            </div>
          </div>

          <div className="article-image">
            <img src={article.imageUrl} alt={article.title} />
            <p className="image-caption">{article.imageCaption}</p>
          </div>

          <div className="article-content">
            <div className="article-summary">
              <h3>Summary</h3>
              <p>{article.summary}</p>
            </div>

            <div className="article-full-content">
              <h3>Full Story</h3>
              <p>{article.fullContent}</p>
            </div>

            <div className="article-impact">
              <h3>Impact Analysis</h3>
              <div className="affected-parties">
                <h4>Affected Parties:</h4>
                <ul>
                  {article.affectedParties.map((party, index) => (
                    <li key={index}>{party}</li>
                  ))}
                </ul>
              </div>
              
              <div className="key-points">
                <h4>Key Points:</h4>
                <ul>
                  {article.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {article.relatedArticles && (
              <div className="related-articles">
                <h3>Related Articles</h3>
                <ul>
                  {article.relatedArticles.map((related, index) => (
                    <li key={index}>
                      <a href={`/article/${related.id}`}>{related.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail; 