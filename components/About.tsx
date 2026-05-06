'use client';

import portfolioData from '@/data/portfolio.json';

export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="works-section"> {/* Reusing works-section for About text */}
        <div className="works-content">
          <h2 className="works-title">About Me</h2>
          <p className="hero-description">{portfolioData.about}</p>
        </div>
      </section>

      {/* Journey Section (using template's journey style for highlights) */}
      <section id="journey" className="journey-section">
        <div className="journey-content">
          <h2 className="journey-title">My Journey</h2>
          <div className="journey-list" role="list">
            {/* Current Role / Latest Highlight */}
            {portfolioData.currentRole && (
              <article className="journey-item" role="listitem">
                <div className="journey-header">
                  {/* Replaced img_icon_building_2.svg with a simple div */}
                  <div className="journey-icon bg-gray-200 text-sm font-bold flex items-center justify-center">
                    C
                  </div>
                  <div className="journey-info">
                    <h3 className="journey-institution">Current Role</h3>
                    <p className="journey-period">{portfolioData.currentRole}</p>
                  </div>
                </div>
                <div className="journey-details">
                  {/* Replaced img_line_container.svg with a styled div */}
                  <div className="journey-line bg-gray-300 w-0.5 h-16 md:h-20 lg:h-24 mx-auto flex-shrink-0"></div>
                  <p className="journey-description">
                    Leading development efforts at InnoFarms.AI, focusing on real-time systems and scalable applications.
                  </p>
                </div>
              </article>
            )}

            {/* Other Highlights */}
            {portfolioData.highlights.map((highlight, index) => (
              <article key={index} className="journey-item" role="listitem">
                <div className="journey-header">
                  {/* Replaced img_icon_building_2.svg with a simple div */}
                  <div className="journey-icon bg-gray-200 text-sm font-bold flex items-center justify-center">
                    H
                  </div>
                  <div className="journey-info">
                    <h3 className="journey-institution">Achievement</h3>
                    <p className="journey-period">Highlight {index + 1}</p>
                  </div>
                </div>
                <div className="journey-details">
                  {/* Replaced img_line_container.svg with a styled div */}
                  <div className="journey-line bg-gray-300 w-0.5 h-16 md:h-20 lg:h-24 mx-auto flex-shrink-0"></div>
                  <p className="journey-description">{highlight}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}