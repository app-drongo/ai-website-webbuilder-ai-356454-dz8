'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Zap, Users, CheckCircle } from 'lucide-react';

export default function Cta() {
  const [isHovered, setIsHovered] = useState(false);

  const config = {
    title: 'Start with a Template, Launch with AI',
    subtitle: 'Join 10,000+ users building faster with our templates and AI',
    description:
      'Choose from our curated library of professional templates, describe your vision, and watch our AI customize everything to match your needs perfectly. From concept to deployment in minutes, not weeks.',
    primaryCta: "Browse Templates - It's Free",
    secondaryCta: 'Watch Demo',
    primaryHref: '/templates',
    secondaryHref: '/demo',
    trustBadge: 'No credit card required',
    features: [
      '100+ Professional Templates',
      'AI-Powered Customization',
      'Instant GitHub Deployment',
      'Modern Tech Stack',
    ],
    stats: [
      { value: '10,000+', label: 'Active Users' },
      { value: '100+', label: 'Templates' },
      { value: '50,000+', label: 'Sites Created' },
      { value: '99.9%', label: 'Uptime' },
    ],
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary" data-editable="trustBadge">
              {config.trustBadge}
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            <span data-editable="title">{config.title}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-primary font-semibold mb-6 animate-fade-in-up delay-200">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
            <span data-editable="description">{config.description}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up delay-500">
            <button
              onClick={() => (window.location.href = config.primaryHref)}
              data-editable-href="primaryHref"
              data-href={config.primaryHref}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 min-w-[280px]"
            >
              <div className="flex items-center justify-center gap-2">
                <Zap
                  className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}
                />
                <span data-editable="primaryCta">{config.primaryCta}</span>
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>

            <button
              onClick={() => (window.location.href = config.secondaryHref)}
              data-editable-href="secondaryHref"
              data-href={config.secondaryHref}
              className="group px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-secondary/80 hover:scale-105 border border-border min-w-[200px]"
            >
              <div className="flex items-center justify-center gap-2">
                <span data-editable="secondaryCta">{config.secondaryCta}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up delay-700">
          {config.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span
                className="text-sm font-medium text-foreground"
                data-editable={`feature${index}`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl bg-card border border-border animate-fade-in-up delay-1000">
          {config.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl lg:text-4xl font-bold text-primary mb-2"
                data-editable={`statValue${index}`}
              >
                {stat.value}
              </div>
              <div
                className="text-sm text-muted-foreground font-medium"
                data-editable={`statLabel${index}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-center animate-fade-in-up delay-1200">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="text-sm">Trusted by 10,000+ users</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-4 h-4" />
            <span className="text-sm">Deploy in under 60 seconds</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">No credit card required</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }

        .delay-500 {
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }

        .delay-700 {
          animation-delay: 0.7s;
          animation-fill-mode: both;
        }

        .delay-1000 {
          animation-delay: 1s;
          animation-fill-mode: both;
        }

        .delay-1200 {
          animation-delay: 1.2s;
          animation-fill-mode: both;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            rgba(var(--foreground), 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}
