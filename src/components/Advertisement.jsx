import React from 'react';
import './Advertisement.css';

const Advertisement = ({ position }) => {
  return (
    <div className={`advertisement ${position}`}>
      <div className="ad-sticky">
        <div className="ad-unit">
          <span className="ad-label">Advertisement</span>
          <div className="ad-content">
            {position === 'left' ? (
              <img src="https://picsum.photos/160/600?random=1" alt="Advertisement" />
            ) : (
              <img src="https://picsum.photos/160/600?random=2" alt="Advertisement" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement; 