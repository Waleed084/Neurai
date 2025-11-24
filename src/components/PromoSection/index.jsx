import React from 'react';
import './PromoSection.css';

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-card">
        <div className="promo-content">
          <h2 className="promo-title">
            Automate your workflows. Accelerate your business. Powered by Neurai.
          </h2>

          <p className="promo-desc">
            Neurai turns your repetitive tasks into fully automated workflows — from lead 
            categorization and instant replies to invoice generation and smart follow-ups. 
            Work faster, make fewer mistakes, and let your operations run themselves.
          </p>

          <div className="promo-cta">
            <button className="promo-btn promo-btn-primary">Explore Workflows</button>
            <button className="promo-btn promo-btn-outline">Try Neurai Free</button>
          </div>
        </div>

        <div className="promo-image" aria-hidden="true">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
            alt="AI automation dashboard"
          />

          {/* SVG overlay draws the white divider lines */}
          <svg className="promo-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polyline 
              points="18,0 36,50 18,100"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeOpacity="0.95"
              strokeLinecap="round"
            />
            <line 
              x1="36" 
              y1="50" 
              x2="100" 
              y2="50" 
              stroke="#ffffff" 
              strokeWidth="1.2" 
              strokeOpacity="0.8" 
              strokeLinecap="round" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
