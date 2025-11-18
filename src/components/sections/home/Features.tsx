import React from 'react';
import { Check, Zap, Shield, Code, Globe, Palette } from 'lucide-react';

interface FeatureConfig {
  title: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    highlights: string[];
  }>;
}

const defaultConfig: FeatureConfig = {
  title: 'Everything You Need to Build Professional Websites',
  description:
    'Our platform combines beautiful templates with powerful AI customization to deliver production-ready websites with modern technology and best practices built-in.',
  features: [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Beautiful Templates',
      description:
        'Curated collection of modern, professional designs crafted by expert designers for every industry and use case.',
      highlights: [
        '100+ premium templates',
        'Industry-specific designs',
        'Mobile-first responsive',
        'Modern UI components',
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'AI Customization',
      description:
        'Intelligent AI automatically adapts templates to your brand, content, and preferences in minutes, not hours.',
      highlights: [
        'Smart content generation',
        'Brand color adaptation',
        'Layout optimization',
        'SEO content creation',
      ],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Modern Tech Stack',
      description:
        'Built with the latest technologies including Next.js 15, React 19, TypeScript, and Tailwind CSS for optimal performance.',
      highlights: [
        'Next.js 15 & React 19',
        'TypeScript included',
        'Tailwind CSS 4',
        'shadcn/ui components',
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Instant Deployment',
      description:
        'Automatic deployment to GitHub and Vercel with custom domains, SSL certificates, and global CDN distribution.',
      highlights: [
        'One-click deployment',
        'Custom domain support',
        'SSL certificates included',
        'Global CDN delivery',
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Production Ready',
      description:
        'Clean, optimized, and maintainable code that follows industry best practices and is ready for production use.',
      highlights: [
        'Clean, typed code',
        'SEO optimized',
        'Accessibility compliant',
        'Performance optimized',
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Real-time Editing',
      description:
        'Visual editor with real-time preview lets you customize colors, content, and layouts without touching code.',
      highlights: [
        'Visual drag & drop',
        'Real-time preview',
        'Color customization',
        'Content management',
      ],
    },
  ],
};

export default function Features() {
  const config = defaultConfig;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {config.features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  <span data-editable={`feature${index}Title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`feature${index}Description`}>{feature.description}</span>
                </p>

                {/* Highlights */}
                <ul className="space-y-2 pt-2">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span data-editable={`feature${index}Highlight${highlightIndex}`}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              <span data-editable="ctaTitle">Ready to Build Your Professional Website?</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              <span data-editable="ctaDescription">
                Join thousands of entrepreneurs and businesses who've launched their websites with
                our templates and AI customization.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                <span data-editable="primaryCta">Browse Templates</span>
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors duration-200">
                <span data-editable="secondaryCta">Start Building Free</span>
              </button>
            </div>
          </div>
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
