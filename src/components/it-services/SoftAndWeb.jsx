'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projects, categories } from '@/data/softandweb-data';

const SoftAndWeb = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCat, setHoveredCat] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="position-relative py-5" style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <style jsx>{`
        .animated-bg {
          background: linear-gradient(135deg, #1e3c72, #2a5298, #1e3c72);
          background-size: 600% 600%;
          animation: gradientShift 15s ease infinite;
          pointer-events: none;
        }

        .floating-symbol {
          font-size: 3rem;
          opacity: 0.06;
          animation: float 12s ease-in-out infinite alternate;
          pointer-events: none;
          user-select: none;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%   { transform: translateY(0px) rotate(0deg) scale(1); }
          50%  { transform: translateY(-10px) rotate(10deg) scale(1.05); }
          100% { transform: translateY(0px) rotate(-8deg) scale(1); }
        }

        /* Card animation */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-duration: 0.6s;
          animation-fill-mode: both;
          animation-timing-function: ease-out;
        }
      `}</style>

      {/* Background */}
      <div className="animated-bg position-absolute top-0 start-0 w-100 h-100 z-n1">
        {/* Floating Symbols in background */}
        <span className="floating-symbol" style={{ top: '15%', left: '10%', position: 'absolute' }}>{'</>'}</span>
        <span className="floating-symbol" style={{ top: '40%', left: '75%', position: 'absolute' }}>⚙️</span>
        <span className="floating-symbol" style={{ top: '70%', left: '30%', position: 'absolute' }}>💻</span>
        <span className="floating-symbol" style={{ top: '25%', left: '85%', position: 'absolute' }}>🌐</span>
        <span className="floating-symbol" style={{ top: '60%', left: '50%', position: 'absolute' }}>🛠️</span>
      </div>

      {/* Left side floating symbols */}
      <div
        className="position-absolute top-0 bottom-0 start-0 d-flex flex-column justify-content-around px-3"
        style={{ width: '60px', pointerEvents: 'none', zIndex: 0 }}
      >
        <span className="floating-symbol" style={{ opacity: 0.3 }}>⚙️</span>
        <span className="floating-symbol" style={{ opacity: 0.3 }}>💻</span>
        <span className="floating-symbol" style={{ opacity: 0.3 }}>{'</>'}</span>
      </div>

      {/* Right side floating symbols */}
      <div
        className="position-absolute top-0 bottom-0 end-0 d-flex flex-column justify-content-around px-3"
        style={{ width: '60px', pointerEvents: 'none', zIndex: 0 }}
      >
        <span className="floating-symbol" style={{ opacity: 0.3 }}>🌐</span>
        <span className="floating-symbol" style={{ opacity: 0.3 }}>🛠️</span>
        <span className="floating-symbol" style={{ opacity: 0.3 }}>⚡</span>
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-white">My Portfolio</h2>
          <p className="lead text-light">
            Here's a glimpse of projects I've proudly built using modern tools and stacks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              onMouseEnter={() => setHoveredCat(cat)}
              onMouseLeave={() => setHoveredCat(null)}
              className={`btn px-4 py-2 rounded-pill fw-semibold ${
                activeCategory === cat
                  ? 'btn-dark text-white'
                  : 'btn-outline-light'
              }`}
              style={{
                boxShadow:
                  activeCategory === cat ? '0 4px 12px rgba(0,0,0,0.2)' : '',
                transition: 'all 0.3s ease-in-out',
                color:
                  activeCategory === cat
                    ? 'white'
                    : hoveredCat === cat
                    ? '#000'
                    : 'white',
                backgroundColor:
                  activeCategory === cat
                    ? ''
                    : hoveredCat === cat
                    ? '#fff'
                    : '',
                borderColor:
                  activeCategory === cat
                    ? ''
                    : hoveredCat === cat
                    ? '#fff'
                    : '',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div key={activeCategory} className="row g-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="col-12 col-md-6 col-lg-4 animate-fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="card-img-top object-fit-cover"
                  style={{ height: '200px' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <div className="mt-auto">
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="badge bg-light text-dark border border-dark rounded-pill px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-danger w-100 rounded-pill"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h4 className="text-white fw-semibold mb-3">Like what you see?</h4>
          <a
            href="/contact"
            className="btn btn-warning rounded-pill px-5 py-3 fw-bold"
          >
            Let’s Work Together →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SoftAndWeb;
