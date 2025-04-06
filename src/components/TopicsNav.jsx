import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopicsNav.css';

const TopicsNav = () => {
  const location = useLocation();
  const topics = [
    { id: 'politics', name: 'Politics' },
    { id: 'sports', name: 'Sports' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'health', name: 'Health' },
    { id: 'science', name: 'Science' },
    { id: 'world', name: 'World News' }
  ];

  return (
    <nav className="topics-nav">
      <div className="topics-container">
        {topics.map(topic => (
          <Link
            key={topic.id}
            to={`/topic/${topic.id}`}
            className={`topic-link ${location.pathname === `/topic/${topic.id}` ? 'active' : ''}`}
          >
            {topic.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default TopicsNav; 