'use client';

// This component is mostly vestigial for this template
// as contact is integrated into the Footer component's structure.
// However, including it as a placeholder as per the required files list.

import portfolioData from '@/data/portfolio.json';

export default function Contact() {
  return (
    <section id="contact" className="hidden">
      {/* Contact information is displayed in the Footer for this template */}
      <p>Email: {portfolioData.contact.email}</p>
    </section>
  );
}