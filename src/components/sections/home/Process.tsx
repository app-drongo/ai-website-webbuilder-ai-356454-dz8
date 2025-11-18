import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Zap, Globe, Code } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  visual: string;
}

export default function Process() {
  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Choose Your Template',
      description:
        'Browse our curated library of 100+ professional templates designed for every industry and use case.',
      icon: <Globe className="w-8 h-8" />,
      features: [
        '100+ professional templates',
        'Industry-specific designs',
        'Mobile-responsive layouts',
        'Modern UI components',
      ],
      visual: 'template-selection',
    },
    {
      number: '02',
      title: 'AI Customization',
      description:
        'Describe your business, content, and preferences. Our AI automatically customizes everything to match your brand.',
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        'Smart content generation',
        'Brand color adaptation',
        'Layout optimization',
        'SEO-friendly structure',
      ],
      visual: 'ai-customization',
    },
    {
      number: '03',
      title: 'Deploy Instantly',
      description:
        'Review your customized website and deploy instantly to GitHub and Vercel with production-ready code.',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'One-click deployment',
        'GitHub integration',
        'Vercel hosting',
        'Production-ready code',
      ],
      visual: 'instant-deployment',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4" />
            <span data-editable="processLabel">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span data-editable="processTitle">From Template to Live Website</span>
            <br />
            <span data-editable="processTitleSecond" className="text-primary">
              in 3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="processDescription">
              Our streamlined process combines the power of professional templates with AI
              customization to deliver your perfect website in minutes, not weeks.
            </span>
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl">
                    {step.icon}
                  </div>
                  <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    <span data-editable={`step${step.number}Title`}>{step.title}</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span data-editable={`step${step.number}Description`}>{step.description}</span>
                  </p>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        <span data-editable={`step${step.number}Feature${featureIndex + 1}`}>
                          {feature}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step CTA */}
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group">
                    <span data-editable={`step${step.number}Cta`}>
                      {index === 0
                        ? 'Browse Templates'
                        : index === 1
                          ? 'Try AI Customization'
                          : 'See Live Demo'}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 relative">
                <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
                  {/* Visual Content Based on Step */}
                  {index === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="font-semibold text-foreground">Template Library</h4>
                        <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          100+ Templates
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {['SaaS', 'E-commerce', 'Portfolio', 'Agency'].map(category => (
                          <div
                            key={category}
                            className="bg-muted rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer"
                          >
                            <div className="w-full h-20 bg-primary/10 rounded mb-3"></div>
                            <div className="text-sm font-medium text-foreground">{category}</div>
                            <div className="text-xs text-muted-foreground">12 templates</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">AI Customization</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-muted rounded-lg p-4">
                          <div className="text-sm text-muted-foreground mb-2">
                            Business Description
                          </div>
                          <div className="text-sm text-foreground">
                            "Modern SaaS platform for project management..."
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-sm">AI is customizing your template...</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-primary/10 rounded p-2 text-xs text-center">
                            Colors
                          </div>
                          <div className="bg-primary/10 rounded p-2 text-xs text-center">
                            Content
                          </div>
                          <div className="bg-primary/10 rounded p-2 text-xs text-center">
                            Layout
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">Ready to Deploy</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between bg-muted rounded-lg p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                              <Code className="w-4 h-4 text-background" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">
                                GitHub Repository
                              </div>
                              <div className="text-xs text-muted-foreground">Clean, typed code</div>
                            </div>
                          </div>
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex items-center justify-between bg-muted rounded-lg p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                              <Globe className="w-4 h-4 text-background" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">
                                Vercel Deployment
                              </div>
                              <div className="text-xs text-muted-foreground">Live in seconds</div>
                            </div>
                          </div>
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full"></div>
                </div>

                {/* Connection Line to Next Step */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-px h-24 bg-border"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-16 border-t border-border">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span data-editable="processCtaTitle">Ready to Build Your Website?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <span data-editable="processCtaDescription">
                Join thousands of users who've built professional websites in minutes. Start with a
                template, customize with AI, deploy instantly.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                <span data-editable="processCtaPrimary">Browse Templates</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
                <Sparkles className="w-5 h-5" />
                <span data-editable="processCtaSecondary">Try AI Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
