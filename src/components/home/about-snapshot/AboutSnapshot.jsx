"use client";

import React, { useEffect, useRef } from "react";
import "./about-snapshot.css";
import { aboutSnapshotAnimations } from "./about-snapshot.animations";

export default function AboutSnapshot() {
  const containerRef = useRef(null);
  const avatarRef = useRef(null);
  const textRef = useRef(null);
  const tagsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    aboutSnapshotAnimations();
  }, []);

  const skills = [
    "Web Dev",
    "AI Tools", 
    "Automation",
    "Python",
    "Custom Integration"
  ];

  return (
    <section className="about-snapshot-section">
      <div className="about-snapshot-container">
        {/* Section Heading */}
        <div className="about-snapshot-header">
          <h2 className="about-snapshot-title">About Me</h2>
          <p className="about-snapshot-subtitle">
            A quick introduction to who I am and what I do
          </p>
        </div>
        
        <div 
          className="about-snapshot-card"
          ref={containerRef}
        >
          {/* 3D Layered Background */}
          <div className="snapshot-3d-layers">
            <div className="layer-background"></div>
            <div className="layer-shapes">
              <div className="shape-1"></div>
              <div className="shape-2"></div>
              <div className="shape-3"></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="snapshot-content">
            {/* Left Column - Text Content */}
            <div className="snapshot-text-column" ref={textRef}>
              <h2 className="snapshot-headline">
                I'm Arman. Maker of Web & AI Tools.
              </h2>
              
              <p className="snapshot-intro">
                I build custom web experiences and AI-powered tools that help ideas scale. 
                From clean code to smart automation, I turn technical complexity into usable solutions.
              </p>

              {/* Skills Tags */}
              <div className="skills-tags" ref={tagsRef}>
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="skill-tag"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA Link */}
              <a 
                href="/about" 
                className="snapshot-cta"
                ref={ctaRef}
                aria-label="Read more about Arman"
              >
                Read More
                <span className="cta-arrow">→</span>
              </a>
            </div>

            {/* Right Column - 3D Avatar */}
            <div className="snapshot-avatar-column">
              <div className="avatar-container" ref={avatarRef}>
                {/* 3D Avatar */}
                <div className="avatar-3d">
                  <div className="avatar-head">
                    <div className="avatar-face">
                      <div className="avatar-eyes">
                        <div className="eye left-eye"></div>
                        <div className="eye right-eye"></div>
                      </div>
                      <div className="avatar-mouth"></div>
                    </div>
                  </div>
                  
                  {/* Code Particles */}
                  <div className="code-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                    <div className="particle particle-5"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="avatar-glow"></div>
                </div>

                {/* Connecting Line */}
                <div className="avatar-connector"></div>
              </div>
            </div>
          </div>

          {/* Hover Effects Overlay */}
          <div className="snapshot-hover-overlay"></div>
        </div>
      </div>
    </section>
  );
} 