import React from 'react';
import { layout } from "../theme";

export default function FAQ() {
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
    fontSize: "1.4rem",
    marginBottom: "0.5rem",
  };

  const subtitle = {
    fontSize: "0.95rem",
    opacity: 0.85,
    marginBottom: "1.5rem",
    maxWidth: "32rem",
  };

  const grid = {
    display: "grid",
    gap: "1.2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    fontSize: "0.9rem",
  };

  const q = { fontWeight: 600, marginBottom: "0.3rem" };
  const a = { opacity: 0.85 };

  const faqs = [
    {
      q: "Do I own everything?",
      a: "Yes. You own your domain, hosting, and the final compiled website that goes live. I don’t provide full source code or the internal component library, but you fully own the deployed result.",
    },
    {
      q: "What if I want another developer to update it later?",
      a: "No problem—any developer can work with the compiled site, but they won’t have access to my internal component library. If they want deeper changes, they can rebuild or update the pieces they need.",
    },
    {
      q: "Do you offer monthly updates?",
      a: "Yes. I offer simple retainer plans for ongoing updates. Depending on your plan, I can update content, add small sections, adjust wording, update images, or help expand the site over time.",
    },
    {
      q: "Can I request changes after launch?",
      a: "Absolutely. You can either stick with a monthly update plan or request one-time updates whenever you need them.",
    },
  ];

  return (
    <section style={outer}>
      <div style={inner}>
        <h2 style={heading}>Questions that usually come up</h2>
        <p style={subtitle}>
          If you're wondering about timelines, ownership, or tech stack,
          here are straight answers to the things most people ask.
        </p>
        <div style={grid}>
          {faqs.map((item) => (
            <div key={item.q}>
              <div style={q}>{item.q}</div>
              <p style={a}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}