import React from 'react'
import { colors, layout } from "../theme";

export default function Footer() {
  const outer = {
    marginTop: "1rem",
    background: "#f3f4f6",
    color: colors.text,
    padding: "1.6rem 1.5rem",
    borderTop: `1px solid ${colors.borderSubtle}`,
    fontSize: "0.85rem",
  };

  const inner = {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    opacity: 0.85,
  };

  return (
    <footer style={outer}>
      <div style={inner}>
        <span>© {new Date().getFullYear()} Simple Software LLC</span>
        <span>Built by a real human, not a template.</span>
      </div>
    </footer>
  );
}
