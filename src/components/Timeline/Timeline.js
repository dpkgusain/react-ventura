import React from 'react';
import './Timeline.css';

const Timeline = ({ items, isVertical = false }) => {
  return (
    <div className={`timeline timeline--${isVertical ? 'vertical' : 'horizontal'}`}>
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className={`timeline-item__indicator ${item.completed ? 'timeline-item__indicator--completed' : ''}`}>
            {item.completed && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
            )}
          </div>
          <div className="timeline-item__content">
            <div className="timeline-item__stage">{item.stage}</div>
            <div className="timeline-item__date">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
