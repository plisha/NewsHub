import React from 'react';
import NewsCard from './NewsCard';
import './SearchResults.css';

const SearchResults = ({ results, query }) => {
  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <div className="no-results">
          <p>No results found for "{query}"</p>
          <p>Try different keywords or browse our topics</p>
        </div>
      ) : (
        <div className="results-grid">
          {results.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults; 