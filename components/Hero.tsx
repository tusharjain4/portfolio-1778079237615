'use client';

import portfolioData from '@/data/portfolio.json';

export default function Hero() {
  const firstName = portfolioData.name.split(' ')[0];
  const roleParts = portfolioData.role.split(' ');

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text-container">
            <h2 className="hero-hello">Hello</h2>
            <p className="hero-im">I&apos;m</p>
          </div>
          <p className="scroll-text">Scroll to explore</p>
          {/* Removed img_rectangle_1.png as asset not provided */}
          <div className="hero-image bg-gray-200 h-60 md:h-80 lg:h-96 flex items-center justify-center text-gray-500">
            [Hero Image Placeholder]
          </div>
        </div>
        <div className="hero-right">
          <div className="title-stack">
            <div className="title-bg-top"></div>
            <div className="title-text-container">
              <p className="title-product">{roleParts[0]}</p>
              <div className="title-designer-section">
                <p className="title-designer">{roleParts.slice(1).join(' ')}</p>
                <p className="title-nikita">{firstName}</p>
              </div>
            </div>
            <div className="title-bg-bottom"></div>
          </div>
          <p className="hero-description">{portfolioData.tagline}</p>
        </div>
      </div>
    </section>
  );
}