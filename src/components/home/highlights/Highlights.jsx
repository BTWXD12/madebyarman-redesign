"use client";

import React, { useEffect, useRef } from "react";
import "./highlights.css";
import { highlightsAnimations, cardHoverEffects } from "./highlights.animations";

export default function Highlights() {
  const cardsRef = useRef([]);

  useEffect(() => {
    highlightsAnimations();
    cardHoverEffects();
  }, []);

  const highlights = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers with lightning-fast performance.",
      icon: "web-dev-icon",
      microCTA: "See Examples",
      color: "#E09F3E"
    },
    {
      id: 2,
      title: "AI Tools",
      description: "Custom AI utilities that speed workflows and surface insights without manual overhead.",
      icon: "ai-tools-icon",
      microCTA: "Explore Tools",
      color: "#E09F3E"
    },
    {
      id: 3,
      title: "Automation",
      description: "Streamline repetitive tasks with intelligent automation that scales with your business.",
      icon: "automation-icon",
      microCTA: "Learn More",
      color: "#E09F3E"
    },
    {
      id: 4,
      title: "Custom Solutions",
      description: "Tailored integrations and systems that solve your unique business challenges.",
      icon: "custom-solutions-icon",
      microCTA: "Get Started",
      color: "#E09F3E"
    }
  ];

  return (
    <section className="highlights-section">
      <div className="highlights-container">
        {/* Section Heading */}
        <div className="highlights-header">
          <h2 className="highlights-title">What I Do</h2>
          <p className="highlights-subtitle">
            Transforming ideas into powerful digital solutions that drive growth and innovation
          </p>
        </div>
        
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className="highlight-card"
              ref={(el) => (cardsRef.current[index] = el)}
              data-card-index={index}
              tabIndex={0}
              role="button"
              aria-label={`${highlight.title} - ${highlight.description}`}
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

              {/* Card Content */}
              <div className="card-content">
                <div className="card-icon-container">
                  <div className={`card-icon ${highlight.icon}`}>
                    {/* Web Dev Icon */}
                    {highlight.icon === "web-dev-icon" && (
                      <div className="web-dev-illustration">
                        <div className="browser-window">
                          <div className="browser-header">
                            <div className="browser-dots">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                          <div className="browser-content">
                            <div className="code-line"></div>
                            <div className="code-line"></div>
                            <div className="code-line"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* AI Tools Icon */}
                    {highlight.icon === "ai-tools-icon" && (
                      <div className="ai-tools-illustration">
                        <div className="ai-sphere">
                          <div className="sphere-core"></div>
                          <div className="sphere-rings">
                            <div className="ring ring-1"></div>
                            <div className="ring ring-2"></div>
                            <div className="ring ring-3"></div>
                          </div>
                          <div className="ai-nodes">
                            <div className="node node-1"></div>
                            <div className="node node-2"></div>
                            <div className="node node-3"></div>
                            <div className="node node-4"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Automation Icon */}
                    {highlight.icon === "automation-icon" && (
                      <div className="automation-illustration">
                        <div className="gear-system">
                          <div className="gear gear-1"></div>
                          <div className="gear gear-2"></div>
                          <div className="gear gear-3"></div>
                          <div className="pipeline">
                            <div className="pipe-segment"></div>
                            <div className="pipe-segment"></div>
                            <div className="pipe-segment"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Custom Solutions Icon */}
                    {highlight.icon === "custom-solutions-icon" && (
                      <div className="custom-solutions-illustration">
                        <div className="puzzle-system">
                          <div className="puzzle-piece piece-1"></div>
                          <div className="puzzle-piece piece-2"></div>
                          <div className="puzzle-piece piece-3"></div>
                          <div className="puzzle-piece piece-4"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card-text">
                  <h3 className="card-title">{highlight.title}</h3>
                  <p className="card-description">{highlight.description}</p>
                  <button className="card-micro-cta">
                    {highlight.microCTA}
                    <span className="cta-arrow">→</span>
                  </button>
                </div>
              </div>

              {/* Hover Effects Overlay */}
              <div className="card-hover-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 