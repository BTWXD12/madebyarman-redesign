"use client";

import React, { useEffect, useRef } from "react";
import "./featured-projects.css";
import { featuredProjectsAnimations, projectCardHoverEffects } from "./featured-projects.animations";

export default function FeaturedProjects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    featuredProjectsAnimations();
    projectCardHoverEffects();
  }, []);

  const featuredProjects = [
    {
      id: 1,
      name: "SmartInvoice AI",
      description: "Automates invoice generation with AI-powered data extraction and intelligent formatting.",
      techStack: ["Next.js", "Python", "Tailwind", "OpenAI"],
      thumbnail: "/projects/smartinvoice-preview.jpg",
      demoLink: "https://smartinvoice-ai.vercel.app",
      caseStudyLink: "/projects/smartinvoice-ai",
      status: "Live",
      visualType: "dashboard"
    },
    {
      id: 2,
      name: "CodexArman Portfolio",
      description: "Modern developer portfolio showcasing full-stack projects with interactive 3D elements.",
      techStack: ["React", "Three.js", "Framer Motion", "Vercel"],
      thumbnail: "/projects/portfolio-preview.jpg",
      demoLink: "https://codexarman.com",
      caseStudyLink: "/projects/portfolio",
      status: "Featured",
      visualType: "portfolio"
    },
    {
      id: 3,
      name: "E-Commerce Analytics",
      description: "Real-time analytics dashboard for e-commerce businesses with predictive insights.",
      techStack: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js"],
      thumbnail: "/projects/analytics-preview.jpg",
      demoLink: "https://analytics-demo.vercel.app",
      caseStudyLink: "/projects/ecommerce-analytics",
      status: "Demo",
      visualType: "analytics"
    }
  ];

  return (
    <section className="featured-projects-section">
      <div className="featured-projects-container">
        {/* Section Heading */}
        <div className="featured-projects-header">
          <h2 className="featured-projects-title">Featured Projects</h2>
          <p className="featured-projects-subtitle">
            Showcasing my strongest work that demonstrates technical expertise and creative problem-solving
          </p>
        </div>
        
        <div className="featured-projects-grid">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              ref={(el) => (cardsRef.current[index] = el)}
              data-card-index={index}
              tabIndex={0}
              role="button"
              aria-label={`${project.name} - ${project.description}`}
            >
              {/* 3D Layered Background */}
              <div className="card-3d-layers">
                <div className="layer-background"></div>
                <div className="layer-shapes">
                  <div className="shape-1"></div>
                  <div className="shape-2"></div>
                  <div className="shape-3"></div>
                </div>
              </div>

              {/* Project Thumbnail */}
              <div className="project-thumbnail">
                <div className="thumbnail-container">
                  {/* Placeholder for project image */}
                  <div className={`project-preview ${project.visualType}`}>
                    {project.visualType === "dashboard" && (
                      <div className="dashboard-preview">
                        <div className="dashboard-header">
                          <div className="header-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <div className="dashboard-content">
                          <div className="chart-area">
                            <div className="chart-bar"></div>
                            <div className="chart-bar"></div>
                            <div className="chart-bar"></div>
                            <div className="chart-bar"></div>
                          </div>
                          <div className="metrics-grid">
                            <div className="metric-card"></div>
                            <div className="metric-card"></div>
                            <div className="metric-card"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.visualType === "portfolio" && (
                      <div className="portfolio-preview">
                        <div className="portfolio-header">
                          <div className="nav-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <div className="portfolio-content">
                          <div className="hero-section">
                            <div className="hero-text"></div>
                            <div className="hero-text"></div>
                          </div>
                          <div className="project-grid">
                            <div className="project-tile"></div>
                            <div className="project-tile"></div>
                            <div className="project-tile"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.visualType === "analytics" && (
                      <div className="analytics-preview">
                        <div className="analytics-header">
                          <div className="header-tabs">
                            <div className="tab active"></div>
                            <div className="tab"></div>
                            <div className="tab"></div>
                          </div>
                        </div>
                        <div className="analytics-content">
                          <div className="data-visualization">
                            <div className="chart-line"></div>
                            <div className="chart-line"></div>
                            <div className="chart-line"></div>
                          </div>
                          <div className="stats-panel">
                            <div className="stat-item"></div>
                            <div className="stat-item"></div>
                            <div className="stat-item"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="thumbnail-overlay">
                  <div className="overlay-content">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="tech-stack">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="project-actions">
                      <a 
                        href={project.caseStudyLink}
                        className="view-project-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project
                        <span className="btn-arrow">→</span>
                      </a>
                      <a 
                        href={project.demoLink}
                        className="live-demo-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                        <span className="external-icon">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="card-header">
                  <h3 className="project-title">{project.name}</h3>
                  {project.status && (
                    <div className={`status-badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </div>
                  )}
                </div>

                <div className="card-text">
                  <p className="project-tagline">{project.description}</p>
                  
                  <div className="tech-tags">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="card-actions">
                    <a 
                      href={project.caseStudyLink}
                      className="primary-cta"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project
                      <span className="cta-arrow">→</span>
                    </a>
                    <a 
                      href={project.demoLink}
                      className="secondary-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                      <span className="external-icon">↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Effects Overlay */}
              <div className="card-hover-overlay"></div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="view-all-projects">
          <a href="/projects" className="view-all-button">
            View All Projects
            <span className="view-all-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
} 