'use client';

import portfolioData from '@/data/portfolio.json';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {portfolioData.skills.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                {/* Replaced img_frame_410.svg with a simple div as asset not provided */}
                <div className="w-full h-full bg-template-border-light rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                  {category.name[0]}
                </div>
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{category.name}</h3>
                <p className="skill-description">{category.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}