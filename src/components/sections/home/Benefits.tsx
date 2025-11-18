import React from 'react';
import { Check, Shield, Zap, Globe, Code, Palette } from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function Benefits() {
  const config = {
    sectionTitle: 'Why Choose WebBuilder AI?',
    sectionSubtitle: 'Everything you need to build professional websites faster than ever before',
    benefits: [
      {
        icon: <Palette className="w-8 h-8" />,
        title: 'Beautiful Templates',
        description: 'Start with professionally designed templates crafted by expert designers',
        features: [
          '100+ premium templates',
          'Modern, responsive designs',
          'Industry-specific layouts',
          'Regular template updates',
        ],
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: 'AI-Powered Customization',
        description: 'Our AI understands your vision and customizes everything automatically',
        features: [
          'Intelligent content generation',
          'Brand-aware color schemes',
          'Smart layout optimization',
          'Contextual design decisions',
        ],
      },
      {
        icon: <Code className="w-8 h-8" />,
        title: 'Production-Ready Code',
        description: 'Clean, optimized, and maintainable code that follows best practices',
        features: [
          'TypeScript & Next.js 15',
          'Tailwind CSS & shadcn/ui',
          'SEO optimized structure',
          'Performance optimized',
        ],
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: 'Instant Deployment',
        description: 'Deploy your website instantly to GitHub and Vercel with one click',
        features: [
          'Automatic GitHub integration',
          'Vercel deployment ready',
          'Custom domain support',
          'SSL certificates included',
        ],
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: 'Enterprise Security',
        description: 'Built with security best practices and enterprise-grade reliability',
        features: [
          'Secure code generation',
          'GDPR compliant',
          'Regular security updates',
          'Data encryption',
        ],
      },
      {
        icon: <Check className="w-8 h-8" />,
        title: 'Always Up-to-Date',
        description: 'Stay current with the latest web technologies and design trends',
        features: [
          'Latest framework versions',
          'Modern design patterns',
          'Accessibility compliant',
          'Mobile-first approach',
        ],
      },
    ] as BenefitItem[],
    ctaTitle: 'Ready to Build Something Amazing?',
    ctaDescription: 'Join thousands of developers and businesses who trust WebBuilder AI',
    ctaButtonText: 'Start Building Free',
    ctaHref: '#get-started',
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {config.benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <div className="text-primary">{benefit.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                <span data-editable={`benefit${index}Title`}>{benefit.title}</span>
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                <span data-editable={`benefit${index}Description`}>{benefit.description}</span>
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <span data-editable={`benefit${index}Feature${featureIndex}`}>{feature}</span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            <span data-editable="ctaTitle">{config.ctaTitle}</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            <span data-editable="ctaDescription">{config.ctaDescription}</span>
          </p>
          <button
            onClick={() => {
              const element = document.querySelector(config.ctaHref);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span data-editable="ctaButtonText">{config.ctaButtonText}</span>
          </button>
        </div>
      </div>

      {/* Animation Styles */}
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
