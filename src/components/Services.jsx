import React, { useState } from 'react';

const Services = () => {
  // State to manage which card is expanded
  const [expanded, setExpanded] = useState(null);

  // Toggle function to expand/collapse a card
  const toggleCard = (index) => {
    setExpanded(expanded === index ? null : index); // Collapse if it's already expanded
  };

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 data-aos="fade-up">Our Services</h2>

        {/* Domestic / Indian Services Section */}
        <h3 data-aos="fade-up" data-aos-delay="100">Domestic / Indian Services</h3>
        <div className="feature-grid">
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <i className="fa-solid fa-file-contract"></i>
            <h4>Audit & Assurance Services</h4>
            {expanded === 0 ? (
              <>
                <div className="service-details">
                  <ul>
                    <li>Statutory Audit</li>
                    <li>Internal Audit</li>
                    <li>Tax Audit</li>
                    <li>Forensic Audit</li>
                    <li>Management Audit</li>
                    <li>Operational Audit</li>
                    <li>Concurrent Audit</li>
                    <li>Compliance Audit</li>
                    <li>Due Diligence Audits</li>
                    <li>Stock Audit</li>
                  </ul>
                </div>
                <button onClick={() => toggleCard(0)} className="expand-collapse-btn">Click here to collapse</button>
              </>
            ) : (
              <button onClick={() => toggleCard(0)} className="expand-collapse-btn">Click here to expand</button>
            )}
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <i className="fa-solid fa-money-bill-wave"></i>
            <h4>Taxation Services</h4>
            {expanded === 1 ? (
              <>
                <div className="service-details">
                  <ul>
                    <li>Income Tax Advisory and Compliance</li>
                    <li>GST (Goods and Services Tax) Services</li>
                    <li>Tax Representation and Litigation</li>
                    <li>Tax Planning and Structuring</li>
                    <li>Customs and Excise Advisory</li>
                  </ul>
                </div>
                <button onClick={() => toggleCard(1)} className="expand-collapse-btn">Click here to collapse</button>
              </>
            ) : (
              <button onClick={() => toggleCard(1)} className="expand-collapse-btn">Click here to expand</button>
            )}
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <i className="fa-solid fa-briefcase"></i>
            <h4>Company Secretarial Services</h4>
            {expanded === 2 ? (
              <>
                <div className="service-details">
                  <ul>
                    <li>Incorporation of Companies</li>
                    <li>Corporate Governance</li>
                    <li>Filing Annual Returns</li>
                    <li>Directorship and Compliance Advisory</li>
                    <li>Legal Drafting</li>
                    <li>Filing of Forms and Compliance with Regulatory Authorities</li>
                  </ul>
                </div>
                <button onClick={() => toggleCard(2)} className="expand-collapse-btn">Click here to collapse</button>
              </>
            ) : (
              <button onClick={() => toggleCard(2)} className="expand-collapse-btn">Click here to expand</button>
            )}
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
            <i className="fa-solid fa-gavel"></i>
            <h4>Legal and Regulatory Services</h4>
            {expanded === 3 ? (
              <>
                <div className="service-details">
                  <ul>
                    <li>Litigation Support</li>
                    <li>Legal Compliance</li>
                  </ul>
                </div>
                <button onClick={() => toggleCard(3)} className="expand-collapse-btn">Click here to collapse</button>
              </>
            ) : (
              <button onClick={() => toggleCard(3)} className="expand-collapse-btn">Click here to expand</button>
            )}
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
            <i className="fa-solid fa-certificate"></i>
            <h4>Certifications</h4>
            {expanded === 4 ? (
              <>
                <div className="service-details">
                  <ul>
                    <li>Karnataka RERA</li>
                    <li>Form 15CA 15CB</li>
                    <li>Grants/ Fund utilization</li>
                    <li>FEMA certifications</li>
                    <li>Net worth certifications / End use certifications / Turnover certifications</li>
                    <li>Any Other certifications required as per Law/ authorities</li>
                  </ul>
                </div>
                <button onClick={() => toggleCard(4)} className="expand-collapse-btn">Click here to collapse</button>
              </>
            ) : (
              <button onClick={() => toggleCard(4)} className="expand-collapse-btn">Click here to expand</button>
            )}
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
            <i className="fa-solid fa-comments-dollar"></i>
            <h4>Other Services</h4>
            {expanded === 5 ? (
              <>
                <div className="service-details">
                  <ul>
                    <li>NRI (Non-Resident Indian) Taxation Services</li>
                    <li>Succession Planning and Estate Management</li>
                    <li>RERA (Real Estate Regulatory Authority) Compliance</li>
                  </ul>
                </div>
                <button onClick={() => toggleCard(5)} className="expand-collapse-btn">Click here to collapse</button>
              </>
            ) : (
              <button onClick={() => toggleCard(5)} className="expand-collapse-btn">Click here to expand</button>
            )}
          </div>
        </div>

        {/* Global Services Section */}
        <h3 data-aos="fade-up" data-aos-delay="700">Global Services</h3>
        <div className="feature-grid">
          <div className="feature-card" data-aos="fade-up" data-aos-delay="800">
            <i className="fa-solid fa-globe"></i>
            <h4>Business and Financial Advisory</h4>
            {expanded === 6 ? (
              <>
                <div className="service-details">
                  <ul>
                    <li>Financial Planning</li>
                    <li>Business Valuation</li>
                    <li>Startup Advisory</li>
                    <li>Project Financing</li>
                  </ul>
                </div>
                <button onClick={() => toggleCard(6)} className="expand-collapse-btn">Click here to collapse</button>
              </>
            ) : (
              <button onClick={() => toggleCard(6)} className="expand-collapse-btn">Click here to expand</button>
            )}
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="900">
            <i className="fa-solid fa-shield-alt"></i>
            <h4>Risk Management Services</h4>
            {expanded === 7 ? (
              <>
                <div className="service-details">
                  <ul>
                    <li>Internal Controls Review</li>
                    <li>Enterprise Risk Management</li>
                    <li>Fraud Risk Management</li>
                    <li>Compliance Risk Management</li>
                  </ul>
                </div>
                <button onClick={() => toggleCard(7)} className="expand-collapse-btn">Click here to collapse</button>
              </>
            ) : (
              <button onClick={() => toggleCard(7)} className="expand-collapse-btn">Click here to expand</button>
            )}
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="1000">
            <i className="fa-solid fa-book"></i>
            <h4>Bookkeeping and Accounting</h4>
            {expanded === 8 ? (
              <>
                <div className="service-details">
                  <ul>
                    <li>Bookkeeping & Accounting Services</li>
                    <li>Financial Statement Preparation</li>
                    <li>Consolidation of Accounts</li>
                  </ul>
                </div>
                <button onClick={() => toggleCard(8)} className="expand-collapse-btn">Click here to collapse</button>
              </>
            ) : (
              <button onClick={() => toggleCard(8)} className="expand-collapse-btn">Click here to expand</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
