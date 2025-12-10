// 2025 COERA LLC. All rights reserved.
// COERA Confidential
import React from 'react'
// import Navbar from '../../sections/Navbar';
// import Hero from '../../sections/Hero';
// import Footer from '../../sections/Footer';
import { colors } from '../../theme';
import Navbar from '../../sections/Navbar';
import Hero from '../../sections/Hero';
import ValueProps from '../../sections/ValueProps';
import TemplatesPreview from '../../sections/TemplatesPreview';
import Pricing from '../../sections/Pricing';
import FAQ from '../../sections/FAQ';
import FinalCta from '../../sections/FinalCta';
import Footer from '../../sections/Footer';

export default function Homepage() {
// src/App.jsx

// export default function App() {
  const page = {
    minHeight: '100vh',
    background: colors.pageBg,
    color: colors.text,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
    lineHeight: 1.45,
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={page}>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <TemplatesPreview />
        <Pricing />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
