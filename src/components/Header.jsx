import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update the theme when it changes
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const formatTime = () => {
    return currentTime.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const topics = [
    { id: 'home', name: 'Trending News', path: '/' },
    { id: 'politics', name: 'Politics', path: '/topic/politics' },
    { id: 'sports', name: 'Sports', path: '/topic/sports' },
    { id: 'agriculture', name: 'Agriculture', path: '/topic/agriculture' },
    { id: 'education', name: 'Education', path: '/topic/education' },
    { id: 'health-care', name: 'Health Care', path: '/topic/health-care' },
    { id: 'indian-news', name: 'Indian News', path: '/topic/indian-news' },
    { id: 'world', name: 'World', path: '/topic/world' },
    { id: 'cricket-news', name: 'Cricket News', path: '/topic/cricket-news' },
    { id: 'business', name: 'Business', path: '/topic/business' },
    { id: 'entertainment', name: 'Entertainment', path: '/topic/entertainment' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="header-top">
        <div className="logo" onClick={() => navigate('/')}>
          <h1>NEWSHUB</h1>
        </div>
        
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="header-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <div className="current-time">
            {formatTime()}
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <ul>
          {topics.map((topic) => (
            <li 
              key={topic.id}
              className={location.pathname === topic.path ? 'active' : ''}
            >
              <button onClick={() => navigate(topic.path)}>
                {topic.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 