import React from 'react';
import { colors, layout, radii, shadows } from "../theme";

export default function Pricing() {
  const outer = {
    padding: "3rem 1.5rem",
  };

  const inner = {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
  };

  const heading = {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  };

  const subtitle = {
    fontSize: "0.95rem",
    opacity: 0.85,
    marginBottom: "1.8rem",
    maxWidth: "32rem",
  };

  const grid = {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  };

  const card = {
    background: colors.cardBg,
    borderRadius: radii.card,
    border: `1px solid ${colors.borderSubtle}`,
    boxShadow: shadows.soft,
    padding: "1.6rem 1.6rem",
    fontSize: "0.9rem",
  };

  const title = { fontWeight: 600, marginBottom: "0.3rem" };
  const price = { fontSize: "1.25rem", marginBottom: "0.6rem" };
  const desc = { opacity: 0.85, marginBottom: "0.7rem" };
  const list = { paddingLeft: "1.1rem", margin: 0, opacity: 0.9 };
  const li = { marginBottom: "0.25rem", textAlign: "left" };

  const plans = [
    {
      name: "Basic",
      price: "$1,500",
      desc: "Perfect for small brochure-style sites that don’t need constant changes.",
      features: [
        "4–5 page custom site",
        "Home, services, about, contact",
        "Mobile-friendly and SEO structured",
        "Launched to your hosting",
        "Monthly updates available",
      ],
      retainer: "$40/mo for small updates (optional)",
    },
    {
      name: "Standard",
      price: "$2,000–$2,500",
      desc: "For businesses that want a bit more flexibility after launch.",
      features: [
        "Extra pages or sections",
        "Gallery or portfolio layout",
        "Light content additions",
        "Priority build scheduling",
        "Includes 1–2 revisions/month",
      ],
      retainer: "$100/mo for updates & maintenance",
    },
    {
      name: "Premium",
      price: "$3,000+",
      desc: "For businesses that want strategy + a long-term update pipeline.",
      features: [
        "More pages and deeper structure",
        "Content and layout consulting",
        "SEO tuning and improvements",
        "Ongoing additions or redesigns",
        "Direct communication for updates",
      ],
      retainer: "$250/mo for ongoing updates & enhancements",
    },
  ];

  return (
    <section id="pricing" style={outer}>
      <div style={inner}>
        <h2 style={heading}>Simple, transparent pricing</h2>
        <div style={grid}>
          {plans.map((plan) => (
            <article key={plan.name} style={card}>
              <div style={title}>{plan.name}</div>
              <div style={price}>{plan.price}</div>
              <p style={desc}>{plan.desc}</p>
              <ul style={list}>
                {plan.features.map((f) => (
                  <li key={f} style={li}>
                    {f}
                  </li>
                ))}
              </ul>
              {plan.retainer && (<p style={{ marginTop: "0.7rem", opacity: 0.85 }}>
                <strong>Retainer:</strong> {plan.retainer}
              </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}