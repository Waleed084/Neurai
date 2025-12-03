import React from 'react';
import './FeaturesSection.css';

export const FeaturesSection = ({ featuresRef }) => {
  return (
    <div className="features-section">

      {/* Section Title */}
      <h2>Automation that transforms how teams work</h2>
      <p className="features-subtitle">
        Neurai builds intelligent automation systems that help businesses eliminate repetitive tasks, 
        streamline operations, and scale with precision.
      </p>

      {/* Feature Cards */}
      <div className="features-grid" ref={featuresRef}>

        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            {/* Workflow: nodes + arrows (flow) */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
              <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="6" height="6" rx="1.2" fill="rgba(255,255,255,0.06)"/>
                <rect x="16" y="3" width="6" height="6" rx="1.2" fill="rgba(255,255,255,0.06)"/>
                <rect x="9.5" y="14" width="5" height="5" rx="1.2" fill="rgba(255,255,255,0.06)"/>
                <path d="M8 6.5h8" />
                <path d="M12 9v4.5" />
                <path d="M12 14.5l2 1.5" />
              </g>
            </svg>
          </div>
          <h3>Workflow Automation</h3>
          <p>
            Automate end-to-end processes — from data collection to task execution —
            and reduce manual workload by up to 60%.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            {/* Routing: target + branching arrows */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
              <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="2" fill="rgba(255,255,255,0.06)" />
                <circle cx="18" cy="6" r="2" fill="rgba(255,255,255,0.06)" />
                <circle cx="12" cy="16" r="2" fill="rgba(255,255,255,0.06)" />
                <path d="M7.5 7.5L11 14" />
                <path d="M16.5 7.5L13 14" />
                <path d="M7 6h10" />
              </g>
            </svg>
          </div>
          <h3>Intelligent Routing</h3>
          <p>
            Automatically assign, prioritize, and route tasks so nothing falls through the cracks
            and your team executes work instantly.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            {/* Insights: chart + sparkline */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
              <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="10" width="3" height="8" rx="0.6" fill="rgba(255,255,255,0.08)" />
                <rect x="9" y="6" width="3" height="12" rx="0.6" fill="rgba(255,255,255,0.08)" />
                <rect x="15" y="3" width="3" height="15" rx="0.6" fill="rgba(255,255,255,0.08)" />
                <path d="M4 9.5c2 2 3 2 5 0 2-2 3-2 5 0" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </g>
            </svg>
          </div>
          <h3>AI-Powered Insights</h3>
          <p>
            Understand bottlenecks, uncover hidden inefficiencies, and get recommendations on how
            to optimize every step of your workflow.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            {/* Integrations: clean chain-link icon to represent connections */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
              <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 14.5a4 4 0 0 1 0-5.66l2-2a4 4 0 0 1 5.66 5.66l-1.5 1.5" />
                <path d="M14.5 9.5a4 4 0 0 1 0 5.66l-2 2a4 4 0 0 1-5.66-5.66l1.5-1.5" />
                <rect x="6.5" y="3.5" width="3" height="3" rx="0.6" fill="rgba(255,255,255,0.04)" />
                <rect x="14.5" y="17.5" width="3" height="3" rx="0.6" fill="rgba(255,255,255,0.04)" />
              </g>
            </svg>
          </div>
          <h3>Custom Integrations</h3>
          <p>
            Connect your tools and unify your ecosystem — CRMs, databases, analytics, and internal systems —
            customized entirely for your business.
          </p>
        </div>

      </div>

    </div>
  );
};
