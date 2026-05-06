'use client';

import portfolioData from '@/data/portfolio.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-top">
          <p className="footer-copyright">© {currentYear} All rights reserved</p>
          <button
            className="footer-email"
            onClick={() => window.location.href = `mailto:${portfolioData.contact.email}`}
          >
            {portfolioData.contact.email}
          </button>
        </div>
        {/* Removed img_squares.svg as asset not provided */}
        <div className="footer-pattern bg-gray-200 h-24 mt-4 flex items-center justify-center text-gray-500">
          Decorative Pattern Placeholder
        </div>
      </div>
    </footer>
  );
}