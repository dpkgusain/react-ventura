import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CompanyLogo from '../../components/CompanyLogo/CompanyLogo';
import { ipoList } from '../../data/ipoData';
import './IPOListPage.css';

const IPOListPage = () => {
  const navigate = useNavigate();

  const handleCompanyClick = (ipoId) => {
    navigate(`/ipo/${ipoId}`);
  };

  return (
    <div className="ipo-list-page">
      <Header 
        title="1. IPO list page"
        // breadcrumbs={[
        //   { name: 'Home', path: '/' },
        //   { name: 'Market watch', path: '/' }
        // ]}
      />
      
      <div className="container">
        <div className="ipo-table">
          <div className="ipo-table__header">
            <div className="ipo-table__header-cell">Company / Issue date</div>
            <div className="ipo-table__header-cell">Issue size</div>
            <div className="ipo-table__header-cell">Price range</div>
            <div className="ipo-table__header-cell">Min invest/qty</div>
          </div>
          
          {ipoList.map((ipo) => (
            <div 
              key={ipo.id} 
              className="ipo-table__row"
              onClick={() => handleCompanyClick(ipo.id)}
            >
              <div className="ipo-table__cell ipo-table__cell--company">
                <div className="company-info">
                  <CompanyLogo 
                    logo={ipo.logo} 
                    logoColor={ipo.logoColor} 
                    // size="small"
                    isImage={ipo.isImage}
                  />
                  <div className="company-details">
                    <div className="company-name">{ipo.company}</div>
                    <div className="issue-date">{ipo.issueDate}</div>
                  </div>
                </div>
              </div>
              
              <div className="ipo-table__cell">
                <div className="ipo-value">{ipo.issueSize}</div>
              </div>
              
              <div className="ipo-table__cell">
                <div className="ipo-value">{ipo.priceRange}</div>
              </div>
              
              <div className="ipo-table__cell ipo-table__cell--investment">
                <div className="investment-info">
                  <div className="investment-amount">{ipo.minInvestment}</div>
                  <div className="investment-details">{ipo.sharesLots}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPOListPage;
