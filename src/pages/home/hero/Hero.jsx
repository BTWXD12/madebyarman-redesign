"use client";

import React, { useEffect } from "react";
import "./hero.css";
import { heroFadeIn, buttonHoverEffects } from "./hero.animations";

export default function Hero() {
  useEffect(() => {
    heroFadeIn();
    buttonHoverEffects();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column - Text Content */}
        <div className="hero-content">
          <div className="hero-intro">
            <span className="intro-text">Hi, I&apos;m Arman</span>
          </div>
          
          <h1 className="hero-headline">
            Building the Future of Web, AI & Automation
          </h1>
          
          <p className="hero-subheadline">
            I craft high-performance websites, AI-powered tools, and automation solutions 
            to help businesses grow and innovate.
          </p>
          
          <div className="hero-cta">
            <button className="cta-primary">
              View My Work
            </button>
            <button className="cta-secondary">
              Explore Tools
            </button>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="hero-visual">
          <div className="tech-illustration">
            <div className="code-particles"></div>
            <div className="ai-elements"></div>
            <div className="web-components"></div>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="hero-bg-gradient"></div>
      <div className="hero-grid-overlay"></div>
    </section>
  );
} 