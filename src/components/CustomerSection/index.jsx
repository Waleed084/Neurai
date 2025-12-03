import React from 'react';
import './CustomerSection.css';

const NEURAI_SERVICES = [
  'Workflow Automation',
  'Intelligent Suggestions',
  'Process Optimization',
  'Task Orchestration',
  'Smart Dashboards'
];

export const CustomerSection = ({ statsRef }) => {
  return (
    <div className="customer-block">

      {/* Neurai services */}
      <div className="customers-logos">
        {NEURAI_SERVICES.map((service) => (
          <span key={service} className="logo-pill">{service}</span>
        ))}
      </div>

      {/* Neurai value statement */}
      <div className="testimonial-row">
        <div className="testimonial-quote">
          <blockquote>
            "Neurai turns complex workflows into one-click automations — reducing manual work by up to 60%."
          </blockquote>
        </div>
        <div className="testimonial-meta">
          <div className="meta-inner">
            <div className="meta-name">Neurai Performance Statement</div>
            <div className="meta-role">AI-Driven Automation Engine</div>
          </div>
        </div>
      </div>

      {/* Neurai KPI stats */}
      <div className="stats-cards" ref={statsRef}>
        <article className="stat-card">
          <div className="stat-note">Workflows automated end-to-end</div>
          <div className="stat-value">60%</div>
        </article>
        <article className="stat-card">
          <div className="stat-note">Faster execution compared to manual work</div>
          <div className="stat-value">5x</div>
        </article>
        <article className="stat-card">
          <div className="stat-note">Reduction in repetitive tasks</div>
          <div className="stat-value">40%</div>
        </article>
      </div>

    </div>
  );
};
