import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ title, breadcrumbs, showBackButton = false, onBackClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        {showBackButton && (
          <button className="back-button" onClick={onBackClick}>
            ←
          </button>
        )}
        <div className="header-info">
          <h1 className="page-title">{title}</h1>
          {breadcrumbs && (
            <nav className="breadcrumbs">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="breadcrumb-separator"></span>}
                  <Link to={crumb.path} className="breadcrumb-link">
                    {crumb.name}
                  </Link>
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
