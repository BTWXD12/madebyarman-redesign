"use client";

import React, { useEffect, useRef } from "react";
import "./testimonials.css";
import { testimonialsAnimations } from "./testimonials.animations";

export default function Testimonials() {
  const testimonialsRef = useRef([]);

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      testimonialsAnimations();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "Arman&apos;s AI integration cut our processing time by 70% in just one week.",
      author: {
        name: "Sarah Thompson",
        role: "Product Manager",
        company: "TechFlow"
      }
    },
    {
      id: 2,
      quote: "His automation solutions scaled perfectly with our growth. Technical expertise unmatched.",
      author: {
        name: "Marcus Chen",
        role: "CTO",
        company: "InnovateLab"
      }
    },
    {
      id: 3,
      quote: "Delivered ahead of schedule with exceptional attention to detail. Game-changer.",
      author: {
        name: "Alex Rivera",
        role: "Engineering Lead",
        company: "DataFlow"
      }
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Heading */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">Client Testimonials</h2>
          <p className="testimonials-subtitle">
            Real feedback from clients who&apos;ve experienced the quality and professionalism of my work
          </p>
        </div>
        
        {/* Glassmorphism Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-glass"
              ref={(el) => (testimonialsRef.current[index] = el)}
              data-testimonial-index={index}
            >
                             {/* Decorative Background Elements */}
               <div className="glass-decoration">
                 <div className="decoration-line line-1"></div>
                 <div className="decoration-line line-2"></div>
                 <div className="decoration-particle particle-1"></div>
                 <div className="decoration-particle particle-2"></div>
                 <div className="decoration-particle particle-3"></div>
               </div>

              {/* Testimonial Content */}
              <blockquote className="quote">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="author">
                <span 
                  className="avatar" 
                  aria-label={`${testimonial.author.name} avatar`}
                >
                  {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                </span>
                <span className="info">
                  {testimonial.author.name} — {testimonial.author.role}
                </span>
              </div>

              {/* Glass Hover Overlay */}
              <div className="glass-overlay"></div>
            </div>
          ))}
        </div>

        {/* See All CTA */}
        <div className="testimonials-cta">
          <a href="/testimonials" className="see-all-link">
            See All Testimonials
            <span className="link-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
} 