import React from 'react';
import './CompanyLogo.css';

const CompanyLogo = ({ logo, logoColor, size = 'medium', isImage }) => {
  return (
    <div 
      className={`company-logo company-logo--${size}`}
      style={{ backgroundColor: logoColor }}
    >
      {isImage ? (
        <img src={logo} alt="company logo" className="company-logo__img" />
      ) : (
        <span className="company-logo__text">{logo}</span>
      )}
    </div>
  );
};


export default CompanyLogo;
