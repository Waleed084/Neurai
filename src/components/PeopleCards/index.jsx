import React from 'react';
import './PeopleCards.css';

import a0 from '../../assets/peoplecard/image.webp';
import a1 from '../../assets/peoplecard/image (1).webp';
import a2 from '../../assets/peoplecard/image (2).webp';
import a3 from '../../assets/peoplecard/image (3).webp';
import a4 from '../../assets/peoplecard/image (4).webp';

const customers = [
  {
    name: 'Nicole Ramos',
    title: 'Head of Sales',
    company: 'TechNova',
    avatar: a0,
    excerpt:
      "Nicole automated lead prospecting with Neurai, saving 15 hours per week per rep and boosting deals without adding headcount.",
    metric: '15h',
    metricLabel: 'hours saved/week',
  },
  {
    name: 'Diego Fernandez',
    title: 'Account Executive',
    company: 'BrightPath',
    avatar: a1,
    excerpt:
      "Diego reduced manual lead routing by 30 hours/month using Neurai’s automation.",
    metric: '30h',
    metricLabel: 'hours saved/month',
  },
  {
    name: 'Anna Lee',
    title: 'BDR Leader',
    company: 'Cytera',
    avatar: a2,
    excerpt:
      "Anna’s team increased connection rates by 36% while cutting 10 hours/week in repetitive tasks.",
    metric: '36%',
    metricLabel: 'connection rate',
  },
  {
    name: 'Mark Turner',
    title: 'VP of Revenue Ops',
    company: 'BuildSmart',
    avatar: a3,
    excerpt:
      "Mark cut manual reporting by 20 hours/week with Neurai dashboards.",
    metric: '20h',
    metricLabel: 'hours saved/week',
  },
  {
    name: 'Sylvia Giuliani',
    title: 'Growth Ops Lead',
    company: 'CensusLab',
    avatar: a4,
    excerpt:
      "Sylvia saved 12 hours/week per rep by automating follow-ups and task orchestration.",
    metric: '12h',
    metricLabel: 'hours saved/week',
  },
];

export default function PeopleCards() {
  return (
    <section className="people-section">
      <div className="people-inner container">
        {/* Header */}
        <div className="people-hero">
          <div className="people-hero-left">
            <h2 className="hero-title">Teams using Neurai save hours and close more deals</h2>
            <p className="hero-desc">
              Neurai helps sales and ops teams cut manual work and accelerate results.
            </p>
          </div>
        </div>

        {/* Customer cards */}
        <div className="people-grid">
          {customers.map((c, i) => (
            <article className={`person-card ${i === 0 ? 'featured' : ''}`} key={c.name} tabIndex={0}>
              <div className="card-media">
                <div className="avatar" aria-hidden>
                  <img src={c.avatar} alt={`${c.name} avatar`} className="avatar-img" />
                </div>
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <div className="company">{c.company}</div>
                </div>
                <h3 className="person-name">{c.name}</h3>
                <div className="person-title">{c.title}</div>
              </div>

              <div className="card-hover">
                <p className="hover-excerpt">{c.excerpt}</p>
                <div className="hover-metric">
                  <div className="metric-value">{c.metric}</div>
                  <div className="metric-label">{c.metricLabel}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
