'use client';

import portfolioData from '@/data/portfolio.json';

export default function Projects() {
  return (
    <section id="works" className="works-section">
      <div className="works-content">
        <h2 className="works-title">My Works</h2>
        <div role="list">
          {portfolioData.projects.map((project, index) => (
            <article className="project-item" role="listitem" key={index}>
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-keywords">
                  {project.tech.map((tech, techIndex) => (
                    <span className="keyword" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Removed project images as assets not provided and generic placeholders don't fit template well */}
              <div className="project-image bg-gray-200 h-48 md:h-64 lg:h-80 flex items-center justify-center text-gray-500">
                Project Image Placeholder
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}