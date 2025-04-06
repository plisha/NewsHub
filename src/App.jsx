import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TopicPage from './pages/TopicPage'
import SearchResults from './components/SearchResults'
import Advertisement from './components/Advertisement'
import { getAllNews } from './data/newsData'
import ChatBot from './components/ChatBot'
import './App.css'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const allNews = getAllNews()
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    const results = allNews.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.summary.toLowerCase().includes(query.toLowerCase()) ||
      article.category.toLowerCase().includes(query.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )
    
    setSearchResults(results)
  }

  useEffect(() => {
    // Update theme color meta tag
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.content = isDark ? '#1a1a1a' : '#ffffff';
    }

    // Update document theme
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

    // Update body background and text color
    document.body.style.backgroundColor = isDark ? '#1a1a1a' : '#ffffff';
    document.body.style.color = isDark ? '#ffffff' : '#1a1a1a';

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />
        <div className="main-layout">
          <main className="main-content">
            <Routes>
              <Route 
                path="/search" 
                element={
                  <SearchResults 
                    results={searchResults}
                    query={new URLSearchParams(window.location.search).get('q')}
                  />
                } 
              />
              <Route path="/topic/:topicId" element={<TopicPage />} />
              <Route path="/" element={<TopicPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <ChatBot />
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </Router>
  )
}

export default App 