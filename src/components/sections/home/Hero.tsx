'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, Zap, Code, Palette } from 'lucide-react';

interface HeroConfig {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
  videoThumbnail: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

const defaultConfig: HeroConfig = {
  headline: 'Build Professional Websites from Beautiful Templates with AI',
  subheadline:
    'Choose from our curated library of modern templates, describe your vision, and our AI customizes everything - content, design, and functionality - to match your needs perfectly.',
  primaryCta: 'Browse Templates',
  secondaryCta: 'Start Building Free',
  primaryCtaHref: '#templates',
  secondaryCtaHref: '#pricing',
  videoThumbnail: '/api/placeholder/600/400',
  features: [
    {
      icon: 'palette',
      title: '100+ Templates',
      description: 'Professional designs for every industry',
    },
    {
      icon: 'sparkles',
      title: 'AI Customization',
      description: 'Automatically adapts to your brand',
    },
    {
      icon: 'zap',
      title: 'Instant Deploy',
      description: 'Live in minutes, not hours',
    },
    {
      icon: 'code',
      title: 'Production Ready',
      description: 'Clean, optimized code',
    },
  ],
};

const iconMap = {
  palette: Palette,
  sparkles: Sparkles,
  zap: Zap,
  code: Code,
};

export default function Hero() {
  const [config] = useState<HeroConfig>(defaultConfig);
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCtaClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span data-editable="badge">AI-Powered Website Builder</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span
                  data-editable="headline"
                  className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
                >
                  {config.headline}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subheadline">{config.subheadline}</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleCtaClick(config.primaryCtaHref)}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
              >
                <span data-editable="primaryCta">{config.primaryCta}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 px-8 py-6 text-lg font-semibold rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                onClick={() => handleCtaClick(config.secondaryCtaHref)}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <span data-editable="secondaryCta">{config.secondaryCta}</span>
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {config.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:bg-card hover:border-border ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-sm" data-editable={`feature${index}Title`}>
                        {feature.title}
                      </h3>
                      <p
                        className="text-xs text-muted-foreground"
                        data-editable={`feature${index}Description`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                {!showVideo ? (
                  <div className="relative group cursor-pointer" onClick={() => setShowVideo(true)}>
                    <img
                      src={config.videoThumbnail}
                      alt="WebBuilder AI Demo"
                      className="w-full h-auto aspect-video object-cover"
                      data-editable="videoThumbnail"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                        <p className="text-sm font-medium">Watch: Template + AI in Action</p>
                        <p className="text-xs text-muted-foreground">
                          See how AI customizes templates instantly
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <Play className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">Demo video would play here</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-bounce">
                <span data-editable="floatingBadge">AI Powered</span>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium" data-editable="statusText">
                    Live Preview
                  </span>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -z-10 top-8 left-8 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -z-10 bottom-8 right-8 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-sm text-muted-foreground mb-6">
            <span data-editable="trustText">Trusted by 10,000+ users worldwide</span>
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-xs font-medium">Next.js 15</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="text-xs font-medium">React 19</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="text-xs font-medium">Tailwind CSS</div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="text-xs font-medium">TypeScript</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
