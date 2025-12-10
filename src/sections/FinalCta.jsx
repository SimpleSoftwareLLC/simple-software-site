import React from 'react';
import { colors, layout, radii } from "../theme";

export default function FinalCta() {
  const outer = {
    padding: "3rem 1.5rem 3.5rem",
  };

  const inner = {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    background: colors.brandBlue,
    borderRadius: radii.card,
    color: "white",
    padding: "2rem 2.1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    alignItems: "center",
  };

  const heading = {
    fontSize: "1.4rem",
    marginBottom: "0.2rem",
  };

  const text = {
    fontSize: "0.95rem",
    opacity: 0.95,
    maxWidth: "32rem",
    justifyContent: "center", 
  };

  const button = {
    marginTop: "0.6rem",
    padding: "0.8rem 1.6rem",
    borderRadius: radii.pill,
    border: "none",
    background: "#ffffff",
    color: colors.brandBlue,
    fontWeight: 600,
    fontSize: "0.9rem",
    cursor: "pointer",
    alignSelf: "flex-start",
  };

  return (
    <section id="contact" style={outer}>
      <div style={inner}>
        <h2 style={heading}>Ready for a site that actually fits your business?</h2>
        <p style={text}>Tell me a bit about your business and what you need. I&apos;ll follow up with a simple, no-pressure quote and a realistic timeline.</p>
        <a href="mailto:ssllcowner@gmail.com">
          <button style={button}>Email me about a project</button>
        </a>
      </div>
    </section>
  );
}