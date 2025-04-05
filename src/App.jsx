import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TopicPage from './pages/TopicPage'
import SearchResults from './components/SearchResults'
import Advertisement from './components/Advertisement'
import { getAllNews } from './data/newsData'
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState([])
  const allNews = getAllNews()

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

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />
        <div className="main-layout">
          <aside className="ad-space left">
            <Advertisement position="left" />
          </aside>
          
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
          
          <aside className="ad-space right">
            <Advertisement position="right" />
          </aside>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App 