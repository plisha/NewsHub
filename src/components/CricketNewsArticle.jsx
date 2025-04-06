import React from 'react';
import './CricketNewsArticle.css';

const CricketNewsArticle = ({ article }) => {
  return (
    <div className="cricket-article">
      <div className="cricket-article-header">
        <div className="header-content">
          <div className="category-date">
            <span className="sports-badge">Sports</span>
            <span className="article-date">April 6, 2025</span>
          </div>
          <h1 className="article-title">India Wins Cricket World Cup Match</h1>
          <div className="article-meta">
            <div className="author-info">
              <img 
                src="https://placekitten.com/50/50" 
                alt="Harsha Bhogle" 
                className="author-avatar"
              />
              <div className="author-details">
                <span className="author-name">By Harsha Bhogle</span>
                <span className="author-role">Cricket Commentator</span>
              </div>
            </div>
            <div className="share-buttons">
              <button className="share-btn twitter">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              <button className="share-btn facebook">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cricket-article-content">
        <div className="main-image-container">
          <img 
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1167&auto=format&fit=crop" 
            alt="Cricket Ball on Field" 
            className="main-image"
          />
          <div className="image-overlay">
            <span className="image-caption">Team India's Victory Moment at World Cup</span>
          </div>
        </div>

        <div className="match-highlights">
          <h2>Match Highlights</h2>
          <div className="score-card">
            <div className="team india">
              <span className="team-name">India</span>
              <span className="score">325/4</span>
              <span className="overs">(50 overs)</span>
            </div>
            <div className="versus">VS</div>
            <div className="team opponent">
              <span className="team-name">Australia</span>
              <span className="score">285/8</span>
              <span className="overs">(50 overs)</span>
            </div>
          </div>
        </div>

        <div className="article-text">
          <p className="lead">
            Team India secures spectacular victory in crucial World Cup match with outstanding 
            performance, demonstrating exceptional skill and teamwork throughout the game.
          </p>
          
          <div className="key-stats">
            <div className="stat-item">
              <span className="stat-label">Man of the Match</span>
              <span className="stat-value">Virat Kohli</span>
              <span className="stat-detail">112 runs (98 balls)</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Best Bowler</span>
              <span className="stat-value">Jasprit Bumrah</span>
              <span className="stat-detail">4/35 (10 overs)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketNewsArticle; 