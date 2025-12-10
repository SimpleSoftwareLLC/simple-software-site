import React from 'react';
import { colors, layout, radii, shadows } from "../theme";

export default function TemplatesPreview() {
  const outer = {
    padding: "3rem 1.5rem",
    background: colors.sectionAltBg,
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
    fontSize: "1.4rem",
    marginBottom: "0.5rem",
  };

  const subtitle = {
    fontSize: "0.95rem",
    opacity: 0.85,
    marginBottom: "1.8rem",
    maxWidth: "34rem",
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
    padding: "1.3rem 1.4rem",
    fontSize: "0.9rem",
  };

  const title = {
    fontWeight: 600,
    marginBottom: "0.4rem",
  };

  const text = {
    opacity: 0.85,
    marginBottom: "0.7rem",
  };

  const pill = {
    display: "inline-block",
    padding: "0.2rem 0.6rem",
    borderRadius: radii.pill,
    background: "#e5edff",
    fontSize: "0.75rem",
    marginBottom: "0.4rem",
  };

  return (
    <section id="templates" style={outer}>
      <div style={inner}>
        <h2 style={heading}>Template & component library preview</h2>
        <p style={subtitle}>
          I&apos;m building an internal library of navbars, hero layouts,
          services sections, and footers. Your site ends up feeling custom,
          but is faster to build and easier to expand.
        </p>
        <div style={grid}>
          <article style={card}>
            <div style={pill}>Navigation</div>
            <div style={title}>Navbar layouts</div>
            <p style={text}>
              A few different navbar styles—minimal, underlined, centered—
              all responsive and ready to plug into your brand.
            </p>
            <p style={{ fontSize: "0.8rem", opacity: 0.75 }}>
              Sample previews coming soon.
            </p>
          </article>
          <article style={card}>
            <div style={pill}>Hero sections</div>
            <div style={title}>Above-the-fold options</div>
            <p style={text}>
              Split layout, centered hero, or image-backed hero—each one
              designed to clearly communicate who you are and what you do.
            </p>
          </article>
          <article style={card}>
            <div style={pill}>Content</div>
            <div style={title}>Services & about layouts</div>
            <p style={text}>
              Reusable blocks for services, about, FAQs, and contact so
              the whole site feels cohesive instead of pieced together.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}