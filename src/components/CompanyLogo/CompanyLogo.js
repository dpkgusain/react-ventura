import React from 'react';
import './CompanyLogo.css';

const CompanyLogo = ({ logo, logoColor, size = 'medium' }) => {
  return (
    <div 
      className={`company-logo company-logo--${size}`}
      style={{ backgroundColor: logoColor }}
    >
      <span className="company-logo__text">{logo}</span>
    </div>
  );
};

export default CompanyLogo;
