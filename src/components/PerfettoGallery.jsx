import React, { useState } from 'react';
import './PerfettoGallery.css';

const PerfettoGallery = ({ article }) => {
  const [selectedColor, setSelectedColor] = useState('Royal Blue');
  const [selectedView, setSelectedView] = useState('Front View');

  return (
    <div className="perfetto-gallery">
      <div className="gallery-header">
        <h2>BNC Perfetto Gallery</h2>
        <p>Available in {article.colors.length} Premium Colors</p>
      </div>

      <div className="color-selector">
        {article.colors.map(color => (
          <button
            key={color}
            className={`color-btn ${selectedColor === color ? 'active' : ''}`}
            onClick={() => setSelectedColor(color)}
            style={{
              backgroundColor: color.toLowerCase().replace(' ', '-')
            }}
          >
            {color}
          </button>
        ))}
      </div>

      <div className="view-selector">
        {article.gallery.map(item => (
          <button
            key={item.view}
            className={`view-btn ${selectedView === item.view ? 'active' : ''}`}
            onClick={() => setSelectedView(item.view)}
          >
            {item.view}
          </button>
        ))}
      </div>

      <div className="image-display">
        <img 
          src={article.imageUrl} 
          alt={`BNC Perfetto in ${selectedColor} - ${selectedView}`}
          className="gallery-image"
        />
        <div className="image-caption">
          {article.gallery.find(item => item.view === selectedView)?.description}
        </div>
      </div>

      <div className="features-list">
        <h3>Key Features</h3>
        <ul>
          {article.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PerfettoGallery; 