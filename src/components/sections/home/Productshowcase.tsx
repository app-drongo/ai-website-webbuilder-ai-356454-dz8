'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Check, ArrowRight } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  category: string;
  image: string;
  features: string[];
  rating: number;
  reviews: number;
  price: string;
}

interface ProductShowcaseConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  featuredTemplate: Template;
  templates: Template[];
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  features: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
}

const defaultConfig: ProductShowcaseConfig = {
  sectionTitle: 'Premium Templates That Convert',
  sectionSubtitle:
    'Choose from our curated collection of high-converting templates, each designed by professionals and optimized for your industry.',
  featuredTemplate: {
    id: 'saas-pro',
    name: 'SaaS Pro Dashboard',
    category: 'SaaS',
    image: '/api/placeholder/600/400',
    features: ['Dark Mode', 'Analytics Dashboard', 'User Management', 'API Integration'],
    rating: 4.9,
    reviews: 127,
    price: 'Premium',
  },
  templates: [
    {
      id: 'ecommerce-modern',
      name: 'Modern E-commerce',
      category: 'E-commerce',
      image: '/api/placeholder/300/200',
      features: ['Shopping Cart', 'Payment Integration', 'Inventory Management'],
      rating: 4.8,
      reviews: 89,
      price: 'Premium',
    },
    {
      id: 'agency-creative',
      name: 'Creative Agency',
      category: 'Agency',
      image: '/api/placeholder/300/200',
      features: ['Portfolio Gallery', 'Contact Forms', 'Team Showcase'],
      rating: 4.7,
      reviews: 156,
      price: 'Free',
    },
    {
      id: 'restaurant-deluxe',
      name: 'Restaurant Deluxe',
      category: 'Restaurant',
      image: '/api/placeholder/300/200',
      features: ['Menu Display', 'Reservations', 'Location Map'],
      rating: 4.9,
      reviews: 203,
      price: 'Premium',
    },
  ],
  ctaText: 'Use This Template',
  ctaHref: '#templates',
  secondaryCtaText: 'Preview Live Demo',
  secondaryCtaHref: '#demo',
  features: [
    'Responsive Design',
    'SEO Optimized',
    'Fast Loading',
    'Modern UI Components',
    'Dark Mode Support',
    'Accessibility Ready',
  ],
  testimonial: {
    text: 'This template saved us weeks of development time. The AI customization made it perfectly match our brand in minutes.',
    author: 'Sarah Chen',
    role: 'Founder',
    company: 'TechStart Inc',
    avatar: '/api/placeholder/60/60',
  },
};

export default function Productshowcase() {
  const [config] = useState<ProductShowcaseConfig>(defaultConfig);
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextTemplate = () => {
    setCurrentTemplateIndex(prev => (prev === config.templates.length - 1 ? 0 : prev + 1));
  };

  const prevTemplate = () => {
    setCurrentTemplateIndex(prev => (prev === 0 ? config.templates.length - 1 : prev - 1));
  };

  const handlePlayDemo = () => {
    setIsPlaying(true);
    // Simulate video play
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section className="py-24 bg-background" id="product-showcase">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Main Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Featured Template Preview */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl bg-card border shadow-2xl">
              <div className="aspect-[4/3] relative">
                <img
                  src={config.featuredTemplate.image}
                  alt={config.featuredTemplate.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={handlePlayDemo}
                    className="bg-primary text-primary-foreground rounded-full p-6 shadow-lg hover:scale-110 transition-transform duration-200"
                    data-editable-href="secondaryCtaHref"
                    data-href={config.secondaryCtaHref}
                  >
                    {isPlaying ? (
                      <div className="w-8 h-8 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </button>
                </div>

                {/* Template Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {config.featuredTemplate.category}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {config.featuredTemplate.price}
                  </span>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {config.featuredTemplate.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(config.featuredTemplate.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({config.featuredTemplate.reviews})
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {config.featuredTemplate.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button
                    className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
                    data-editable-href="ctaHref"
                    data-href={config.ctaHref}
                  >
                    <span data-editable="ctaText">{config.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handlePlayDemo}
                    className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    data-editable-href="secondaryCtaHref"
                    data-href={config.secondaryCtaHref}
                  >
                    <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Features List */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Every Template Includes:</h3>
              <div className="grid grid-cols-1 gap-4">
                {config.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-card border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <img
                  src={config.testimonial.avatar}
                  alt={config.testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-foreground mb-3 italic">
                    "<span data-editable="testimonialText">{config.testimonial.text}</span>"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      <span data-editable="testimonialAuthor">{config.testimonial.author}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span data-editable="testimonialRole">{config.testimonial.role}</span> at{' '}
                      <span data-editable="testimonialCompany">{config.testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Template Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">More Templates</h3>
            <div className="flex gap-2">
              <button
                onClick={prevTemplate}
                className="p-2 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTemplate}
                className="p-2 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {config.templates.map((template, index) => (
              <div
                key={template.id}
                className={`bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
                  index === currentTemplateIndex ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-medium">
                      {template.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        template.price === 'Free'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {template.price}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{template.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-muted-foreground">{template.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-1 mb-3">
                    {template.features.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-primary" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
