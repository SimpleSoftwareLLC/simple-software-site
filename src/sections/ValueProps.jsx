
import React from 'react';
import { colors, layout, radii, shadows } from "../theme";

export default function ValueProps() {
  const outer = {
    padding: "3rem 1.5rem",
  };

  const inner = {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const heading = {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  };

  const subtitle = {
    fontSize: "0.98rem",
    opacity: 0.85,
    marginBottom: "1.8rem",
    maxWidth: "34rem",
    textAlign: "center",
  };

  const grid = {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  };

  const card = {
    background: colors.cardBg,
    borderRadius: radii.card,
    border: `1px solid ${colors.borderSubtle}`,
    boxShadow: shadows.soft,
    padding: "1.4rem 1.5rem",
    fontSize: "0.9rem",
  };

  const title = {
    fontWeight: 600,
    marginBottom: "0.4rem",
  };

  const text = {
    opacity: 0.85,
  };

  const items = [
    {
      title: "Clean, consistent design",
      text: "Your site is built from a polished component system—no random spacing, no mismatched sections, just a cohesive look.",
    },
    {
      title: "No platform lock-in",
      text: "You keep your domain, hosting, and site. No builder subscriptions or getting stuck in a template you can’t escape.",
    },
    {
      title: "SEO and performance minded",
      text: "Semantic HTML, modern builds, and Lighthouse-friendly structure baked in from day one.",
    },
  ];

  return (
    <section style={outer}>
      <div style={inner}>
        <h2 style={heading}>What you get when we work together</h2>
        <p style={subtitle}>
          Simple Software is intentionally small and focused: fast, clean
          sites for businesses that just want something that works and
          looks professional.
        </p>
        <div style={grid}>
          {items.map((item) => (
            <article key={item.title} style={card}>
              <div style={title}>{item.title}</div>
              <p style={text}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}