"use client";

import React, { useEffect, useRef } from "react";
import "./featured-tools.css";
import { featuredToolsAnimations, toolCardHoverEffects } from "./featured-tools.animations";

export default function FeaturedTools() {
  const cardsRef = useRef([]);

  useEffect(() => {
    featuredToolsAnimations();
    toolCardHoverEffects();
  }, []);

  const featuredTools = [
    {
      id: 1,
      name: "AutoForm Generator",
      tagline: "Generate optimized forms in seconds with smart validation presets.",
      status: "New",
      visualType: "form-generator",
      primaryCTA: "Try Now",
      secondaryCTA: "Source",
      secondaryLink: "https://github.com/codexarman/autoform-generator",
      demoLink: "/tools/autoform-generator"
    },
    {
      id: 2,
      name: "AI Summary Hub",
      tagline: "Summarize long text with one click and customizable depth.",
      status: "Beta",
      visualType: "ai-summary",
      primaryCTA: "Live Demo",
      secondaryCTA: "Source",
      secondaryLink: "https://github.com/codexarman/ai-summary-hub",
      demoLink: "/tools/ai-summary-hub"
    },
    {
      id: 3,
      name: "Deploy Script Helper",
      tagline: "Automate deployment workflows with intelligent error handling.",
      status: "Free",
      visualType: "deploy-script",
      primaryCTA: "View Tool",
      secondaryCTA: "Source",
      secondaryLink: "https://github.com/codexarman/deploy-script-helper",
      demoLink: "/tools/deploy-script-helper"
    }
  ];

  return (
    <section className="featured-tools-section">
      <div className="featured-tools-container">
        {/* Section Heading */}
        <div className="featured-tools-header">
          <h2 className="featured-tools-title">Featured Tools</h2>
          <p className="featured-tools-subtitle">
            Handcrafted utilities that streamline your development workflow
          </p>
        </div>
        
        <div className="featured-tools-grid">
          {featuredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="tool-card"
              ref={(el) => (cardsRef.current[index] = el)}
              data-card-index={index}
              tabIndex={0}
              role="button"
              aria-label={`${tool.name} - ${tool.tagline}`}
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
                <div className="card-header">
                  <h3 className="tool-title">{tool.name}</h3>
                  {tool.status && (
                    <div className={`status-badge ${tool.status.toLowerCase()}`}>
                      {tool.status}
                    </div>
                  )}
                </div>

                <div className="visual-preview">
                  {/* Form Generator Visual */}
                  {tool.visualType === "form-generator" && (
                    <div className="form-generator-preview">
                      <div className="form-container">
                        <div className="form-field">
                          <div className="field-label"></div>
                          <div className="field-input"></div>
                        </div>
                        <div className="form-field">
                          <div className="field-label"></div>
                          <div className="field-input"></div>
                        </div>
                        <div className="form-field">
                          <div className="field-label"></div>
                          <div className="field-input"></div>
                        </div>
                        <div className="submit-button"></div>
                      </div>
                    </div>
                  )}

                  {/* AI Summary Visual */}
                  {tool.visualType === "ai-summary" && (
                    <div className="ai-summary-preview">
                      <div className="text-blocks">
                        <div className="text-block block-1"></div>
                        <div className="text-block block-2"></div>
                        <div className="text-block block-3"></div>
                      </div>
                      <div className="summary-arrow">→</div>
                      <div className="summary-output"></div>
                    </div>
                  )}

                  {/* Deploy Script Visual */}
                  {tool.visualType === "deploy-script" && (
                    <div className="deploy-script-preview">
                      <div className="terminal-window">
                        <div className="terminal-header">
                          <div className="terminal-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <div className="terminal-content">
                          <div className="command-line">
                            <span className="prompt">$</span>
                            <span className="command">deploy</span>
                          </div>
                          <div className="output-line">✓ Building...</div>
                          <div className="output-line">✓ Deploying...</div>
                          <div className="output-line success">✓ Success!</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Code Snippet Visual */}
                  {tool.visualType === "code-snippet" && (
                    <div className="code-snippet-preview">
                      <div className="snippet-container">
                        <div className="snippet-header">
                          <div className="snippet-tabs">
                            <div className="tab active"></div>
                            <div className="tab"></div>
                          </div>
                        </div>
                        <div className="snippet-content">
                          <div className="code-line"></div>
                          <div className="code-line"></div>
                          <div className="code-line"></div>
                          <div className="code-line"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="card-text">
                  <p className="tool-tagline">{tool.tagline}</p>
                  
                  <div className="card-actions">
                    <button 
                      className="primary-cta"
                      onClick={() => window.open(tool.demoLink, '_blank')}
                    >
                      {tool.primaryCTA}
                      <span className="cta-arrow">→</span>
                    </button>
                    <a 
                      href={tool.secondaryLink}
                      className="secondary-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tool.secondaryCTA}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Effects Overlay */}
              <div className="card-hover-overlay"></div>
            </div>
          ))}
        </div>

        {/* View All Tools CTA */}
        <div className="view-all-tools">
          <a href="/tools" className="view-all-button">
            View All Tools
            <span className="view-all-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
} 