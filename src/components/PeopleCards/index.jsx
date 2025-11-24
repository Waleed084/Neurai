import React from 'react';
import './PeopleCards.css';

import a0 from '../../assets/peoplecard/1.webp';
import a1 from '../../assets/peoplecard/2.webp';
import a2 from '../../assets/peoplecard/3.webp';
import a3 from '../../assets/peoplecard/4.webp';
import a4 from '../../assets/peoplecard/5.webp';

const customers = [
  {
    name: 'Nicole Ramos',
    title: 'Account Executive',
    company: 'TechNova',
    avatar: a0,
    excerpt:
      "Automated prospecting with Neurai—saving 15 hours per week per rep and boosting pipeline instantly.",
    metric: '15',
    metricLabel: 'hours saved/week',
  },
  {
    name: 'Diego Fernandez',
    title: 'Head Sales',
    company: 'BrightPath',
    avatar: a1,
    excerpt:
      "Saved 50 hours of manual lead routing each month with Neurai’s automated workflows.",
    metric: '50',
    metricLabel: 'hours saved/month',
  },
  {
    name: 'Anna Lee',
    title: 'BDR Leader',
    company: 'Cytera',
    avatar: a2,
    excerpt:
      "Increased connection rates by 36% while eliminating 20 hours of repetitive weekly tasks.",
    metric: '36%',
    metricLabel: 'connection rate',
  },
  {
    name: 'Raghav Malhotra',
    title: 'Head of Revenue Operations',
    company: 'IndiSync',
    avatar: a3,
    excerpt:
      "Replaced manual reporting with auto-generated insights, saving 18 hours every week.",
    metric: '18',
    metricLabel: 'hours saved/week',
  },
  {
    name: 'Sylvia Giuliani',
    title: 'Growth Ops Lead',
    company: 'CensusLab',
    avatar: a4,
    excerpt:
      "Automated follow-ups and task orchestration, saving her reps 12 hours each week.",
    metric: '12',
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
