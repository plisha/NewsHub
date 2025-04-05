import React from 'react';
import './NewsFilter.css';

const NewsFilter = ({ onFilterChange }) => {
  return (
    <div className="news-filter">
      <select onChange={(e) => onFilterChange('region', e.target.value)}>
        <option value="">All Regions</option>
        <option value="Global">Global</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Middle East">Middle East</option>
      </select>

      <select onChange={(e) => onFilterChange('sort', e.target.value)}>
        <option value="latest">Latest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default NewsFilter; 