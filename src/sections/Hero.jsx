import React from 'react';
import { colors, layout, radii, shadows } from "../theme";

export default function Hero() {
  const outer = {
    padding: "3.5rem 1.5rem 3rem",
  };

  const inner = {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
    gap: "2.4rem",
    alignItems: "center",
  };

  const left = {
    maxWidth: "40rem",
  };

  const eyebrow = {
    display: "inline-block",
    padding: "0.28rem 0.75rem",
    borderRadius: radii.pill,
    border: `1px solid ${colors.borderSubtle}`,
    fontSize: "0.78rem",
    marginBottom: "1rem",
    background: "#ffffff",
  };

  const title = {
    fontSize: "2.5rem",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    lineHeight: 1.1,
    marginBottom: "1rem",
  };

  const text = {
    fontSize: "1.05rem",
    opacity: 0.9,
    marginBottom: "1.8rem",
  };

  const buttons = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  };

  const primary = {
    padding: "0.8rem 1.6rem",
    borderRadius: radii.pill,
    border: "none",
    fontSize: "0.95rem",
    fontWeight: 600,
    cursor: "pointer",
    background: colors.brandBlue,
    color: "white",
  };

  const secondary = {
    padding: "0.8rem 1.6rem",
    borderRadius: radii.pill,
    border: `1px solid ${colors.borderSubtle}`,
    background: "#ffffff",
    fontSize: "0.95rem",
    cursor: "pointer",
  };

  const right = {
    padding: "1.4rem 1.3rem",
    borderRadius: radii.card,
    background: "#ffffff",
    border: `1px solid ${colors.borderSubtle}`,
    boxShadow: shadows.soft,
    fontSize: "0.9rem",
  };

  const rightTitle = {
    fontWeight: 600,
    marginBottom: "0.4rem",
  };

  const rightText = {
    opacity: 0.85,
    marginBottom: "0.8rem",
  };

  const rightRow = {
    display: "flex",
    gap: "1.2rem",
    fontSize: "0.8rem",
    opacity: 0.85,
  };

  return (
    <section id="home" style={outer}>
      <div style={inner}>
        <div style={left}>
          <div style={eyebrow}>Custom sites · No Wix templates</div>
          <h1 style={title}>Fast, clean websites your business truly owns.</h1>
          <p style={text}>
            I build small, focused React sites for real businesses—fast,
            SEO-friendly, and not locked into bloated website builders.
            You get something that feels custom, but is backed by a reusable
            component system.
          </p>
          <div style={buttons}>
            <a href="mailto:ssllcowner@gmail.com">
              <button style={primary}>Get a free quote</button>
            </a>
            <a href="#templates">
              <button style={secondary}>Browse templates</button>
            </a>
          </div>
        </div>
        <aside style={right}>
          <div style={rightTitle}>Built like a product, not a patchwork.</div>
          <p style={rightText}>
            Under the hood, I use an internal component library—navbars,
            hero sections, service layouts—that keeps spacing, typography,
            SEO, and responsiveness consistent across every site.
          </p>
          <div style={rightRow}>
            <div>
              <strong>Performance</strong>
              <br />
              Static builds, modern stack.
            </div>
            <div>
              <strong>Ownership</strong>
              <br />
              Your domain, your hosting, your site.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
