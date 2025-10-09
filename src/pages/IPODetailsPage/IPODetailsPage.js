import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CompanyLogo from '../../components/CompanyLogo/CompanyLogo';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import Timeline from '../../components/Timeline/Timeline';
import { ipoDetails } from '../../data/ipoData';
import './IPODetailsPage.css';

const IPODetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ipo, setIpo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ipoData = ipoDetails[id];
    if (ipoData) {
      setIpo(ipoData);
    }

    // Check if mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleDownload = () => {
    console.log('Download clicked');
    // Implement download functionality
  };

  const handleApply = () => {
    console.log('Apply clicked');
    // Implement apply functionality
  };

  if (!ipo) {
    return (
      <div className="ipo-details-page">
        <Header 
          title="IPO Details"
          showBackButton={true}
          onBackClick={handleBackClick}
        />
        <div className="container">
          <div className="error-message">IPO not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="ipo-details-page">
      <Header 
        title="2. IPO details page"
        // breadcrumbs={[
        //   { name: 'Home', path: '/' },
        //   { name: 'Market watch', path: '/' }
        // ]}
        showBackButton={true}
        onBackClick={handleBackClick}
      />
      
      <div className="container">
        {/* Company Header */}
        <div className="company-header">
          <div className="company-header__info">
            <CompanyLogo 
              logo={ipo.logo} 
              logoColor={ipo.logoColor} 
              size="large"
              isImage={ipo.isImage}
            />
            <div className="company-header__details">
              <h1 className="company-name">{ipo.company}</h1>
              <p className="company-full-name">{ipo.companyFullName}</p>
            </div>
          </div>
          <ActionButtons 
            onDownload={handleDownload}
            onApply={handleApply}
          />
        </div>

        {/* IPO Details Card */}
        <div className="ipo-details-card card">
          <h2 className="card-title">IPO details</h2>
          <div className="ipo-details-grid">
            <div className="ipo-detail-item">
              <span className="ipo-detail-label">Issue size</span>
              <span className="ipo-detail-value">{ipo.issueSize}</span>
            </div>
            <div className="ipo-detail-item">
              <span className="ipo-detail-label">Price range</span>
              <span className="ipo-detail-value">{ipo.priceRange}</span>
            </div>
            <div className="ipo-detail-item">
              <span className="ipo-detail-label">Minimum amount</span>
              <span className="ipo-detail-value">{ipo.minimumAmount}</span>
            </div>
            <div className="ipo-detail-item">
              <span className="ipo-detail-label">Lot size</span>
              <span className="ipo-detail-value">{ipo.lotSize}</span>
            </div>
            <div className="ipo-detail-item">
              <span className="ipo-detail-label">Issue dates</span>
              <span className="ipo-detail-value">{ipo.issueDates}</span>
            </div>
            <div className="ipo-detail-item">
              <span className="ipo-detail-label">Listed on</span>
              <span className="ipo-detail-value">{ipo.listedOn}</span>
            </div>
            <div className="ipo-detail-item">
              <span className="ipo-detail-label">Listed price</span>
              <span className="ipo-detail-value">{ipo.listedPrice}</span>
            </div>
            <div className="ipo-detail-item">
              <span className="ipo-detail-label">Listing gains</span>
              <span className="ipo-detail-value">{ipo.listingGains}{"("}<span className="ipo-detail-value-color">{ipo.listingGainsPercentage}</span>{")"}</span>
            </div>
          </div>
        </div>

        {/* IPO Timeline Card */}
        <div className="ipo-timeline-card card">
          <h2 className="card-title">IPO timeline</h2>
          <Timeline 
            items={ipo.timeline} 
            isVertical={isMobile}
          />
        </div>

        {/* About Company Card */}
        <div className="about-company-card card">
          <h2 className="card-title">About the company</h2>
          <div className="about-content">
            <p className="about-text">{ipo.about}</p>
            {isMobile && (
              <button className="read-more-btn">Read more</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPODetailsPage;
