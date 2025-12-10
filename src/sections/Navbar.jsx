// src/sections/Navbar.jsx
import React from "react";
import { colors, layout } from "../theme";

export default function Navbar() {
  const navbar = {
    position: "sticky",
    top: 0,
    zIndex: 20,
    backdropFilter: "blur(10px)",
    background: "rgba(246,248,252,0.96)",
    borderBottom: `1px solid ${colors.borderSubtle}`,
  };

  const inner = {
    maxWidth: layout.maxWidth,
    margin: "0 auto",
    padding: "0.85rem 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1.5rem",
  };

  const logo = {
    fontWeight: 700,
    letterSpacing: "0.04em",
    fontSize: "0.95rem",
    color: colors.brandBlue,
  };

  const navLinks = {
    display: "flex",
    gap: "1.3rem",
    fontSize: "0.9rem",
    opacity: 0.9,
    flexWrap: "wrap",
  };

  return (
    <header style={navbar}>
      <div style={inner}>
        <div style={logo}>SIMPLE SOFTWARE LLC</div>
        <nav style={navLinks}>
          <a href="#home" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </a>
          <a
            href="#templates"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Templates
          </a>
          <a
            href="#pricing"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Pricing
          </a>
          <a
            href="#contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
