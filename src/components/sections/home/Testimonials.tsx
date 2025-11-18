"use client"
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  testimonials: {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
  }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  ctaHref: string;
}

const defaultConfig: TestimonialConfig = {
  sectionTitle: 'Loved by Thousands of Users',
  sectionSubtitle: 'See what our customers say about building with templates and AI',
  testimonials: [
    {
      id: '1',
      quote:
        'Started with a beautiful template, and the AI made it uniquely ours in minutes. The customization was spot-on - it understood our brand perfectly and adapted everything from colors to content. Our website looks like it was designed by a professional agency.',
      author: 'Sarah Chen',
      role: 'Founder',
      company: 'TechStart Solutions',
      avatar: '/api/placeholder/64/64',
      rating: 5,
    },
    {
      id: '2',
      quote:
        'The template quality is outstanding - modern, responsive, and built with clean code. What impressed me most was how the AI took our basic description and transformed the template into something that perfectly matched our vision. Saved us weeks of development time.',
      author: 'Marcus Rodriguez',
      role: 'Creative Director',
      company: 'Digital Craft Agency',
      avatar: '/api/placeholder/64/64',
      rating: 5,
    },
    {
      id: '3',
      quote:
        'As a developer, I was skeptical about AI-generated websites. But the code quality is excellent - TypeScript, modern React patterns, and best practices throughout. The templates provide a solid foundation, and the AI customization actually enhances rather than compromises the code.',
      author: 'Emily Watson',
      role: 'Senior Developer',
      company: 'BuildFast Co',
      avatar: '/api/placeholder/64/64',
      rating: 5,
    },
  ],
  ctaTitle: 'Ready to Build Your Perfect Website?',
  ctaSubtitle: 'Join thousands of satisfied customers who chose templates + AI',
  ctaButtonText: "Browse Templates - It's Free",
  ctaHref: '#templates',
};

export default function Testimonials() {
  const config = defaultConfig;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {config.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                  <Quote className="w-5 h-5" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6 mt-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                <span data-editable={`testimonial-${testimonial.id}-quote`}>
                  "{testimonial.quote}"
                </span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.author} avatar`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-border"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    <span data-editable={`testimonial-${testimonial.id}-author`}>
                      {testimonial.author}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`testimonial-${testimonial.id}-role`}>
                      {testimonial.role}
                    </span>
                    {' at '}
                    <span data-editable={`testimonial-${testimonial.id}-company`}>
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-muted/50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            <span data-editable="ctaTitle">{config.ctaTitle}</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            <span data-editable="ctaSubtitle">{config.ctaSubtitle}</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(5)}</div>
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>10,000+ happy customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>No credit card required</span>
            </div>
          </div>

          <button
            onClick={() => {
              const element = document.querySelector(config.ctaHref);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span data-editable="ctaButtonText">{config.ctaButtonText}</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
