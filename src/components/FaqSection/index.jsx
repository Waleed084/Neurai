import React, { useState } from 'react';
import './FaqSection.css';

const FAQS = [
  {
    question: "What kinds of workflows can Neurai automate, and can you build custom flows for our business?",
    answer: "Neurai automates anything repeatable that involves data, messaging, or decision rules — from lead triage and auto-replies to invoice generation, follow-up sequences, approvals, and more. And yes, we build fully tailored workflows through a discovery → prototype → pilot → rollout process."
  },
  {
    question: "How does Neurai connect to our existing systems? Do we need to change any tools?",
    answer: "No tool changes required. Neurai integrates using APIs, webhooks, database connectors, CSV imports, or third-party services. We adapt to your existing stack, including legacy systems, so your workflows upgrade without disrupting your current tools."
  },
  {
    question: "How does Neurai protect our data and ensure compliance?",
    answer: "Security is built-in: encrypted data transport, encrypted storage, role-based access, audit logs, and strict credential handling. You retain full data ownership. Workflows are designed to meet GDPR and industry best-practice compliance, with optional private cloud or dedicated environments for regulated industries."
  },
  {
    question: "How long does implementation take and what will it cost?",
    answer: "Simple workflows launch in 1–2 weeks, while multi-step or integrated workflows take 3–12 weeks depending on complexity. Pricing is flexible: fixed-scope workflows, subscription models, or enterprise agreements with SLAs. We recommend starting with a small pilot to validate ROI before scaling."
  },
  {
    question: "What ROI can we expect from using Neurai?",
    answer: "Most clients see improvements within weeks: faster response times, reduced errors, reclaimed team hours, shorter billing cycles, and better conversion rates. We set measurable KPIs—like speed-to-contact, error reduction, and hours saved—and provide before/after reporting to make ROI clear."
  },
  {
    question: "What support and maintenance does Neurai provide after implementation?",
    answer: "We provide onboarding, training, documentation, ongoing monitoring, and support tiers with defined SLAs. Enterprise users get a dedicated success manager. We continuously optimize workflows and provide full data export and clean offboarding if ever needed."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section">
      <div className="faq-card">
        <div className="faq-left">
          <h3 className="faq-heading">
            Frequently asked
            <span className="faq-heading-sub">questions</span>
          </h3>
        </div>

        <div className="faq-right">
          <ul className="faq-list">
            {FAQS.map((item, i) => (
              <li
                key={i}
                id={i === 3 ? 'faq-q4' : undefined}
                className={`faq-item ${openIndex === i ? 'open' : ''}`}
              >
                <button
                  className="faq-btn"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-plus" aria-hidden>{openIndex === i ? '−' : '+'}</span>
                </button>

                <div
                  className="faq-answer"
                  style={{ display: openIndex === i ? 'block' : 'none' }}
                >
                  <p>{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
