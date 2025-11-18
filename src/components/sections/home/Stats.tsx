import React from 'react';
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';

interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  trend?: string;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      id: 'users',
      value: '10,000+',
      label: 'Active Users',
      description: 'Entrepreneurs and businesses building with our templates',
      icon: <Users className="w-8 h-8" />,
      trend: '+127% this month',
    },
    {
      id: 'templates',
      value: '100+',
      label: 'Premium Templates',
      description: 'Professionally designed templates across all industries',
      icon: <Globe className="w-8 h-8" />,
      trend: 'New templates weekly',
    },
    {
      id: 'websites',
      value: '25,000+',
      label: 'Websites Created',
      description: 'Professional websites launched using our platform',
      icon: <TrendingUp className="w-8 h-8" />,
      trend: '+89% growth rate',
    },
    {
      id: 'deployment',
      value: '< 5 min',
      label: 'Average Deploy Time',
      description: 'From template selection to live website deployment',
      icon: <Zap className="w-8 h-8" />,
      trend: '99.9% success rate',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span data-editable="statsTitle">Trusted by Thousands of Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="statsDescription">
              Join the growing community of entrepreneurs and businesses who've transformed their
              online presence with our AI-powered template system.
            </span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <div className="text-primary">{stat.icon}</div>
              </div>

              {/* Value */}
              <div className="mb-2">
                <span
                  className="text-3xl md:text-4xl font-bold text-foreground"
                  data-editable={`stat${stat.id}Value`}
                >
                  {stat.value}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                <span data-editable={`stat${stat.id}Label`}>{stat.label}</span>
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-3">
                <span data-editable={`stat${stat.id}Description`}>{stat.description}</span>
              </p>

              {/* Trend */}
              {stat.trend && (
                <div className="flex items-center text-xs text-primary font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  <span data-editable={`stat${stat.id}Trend`}>{stat.trend}</span>
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span data-editable="ctaTitle">Ready to Join Our Success Stories?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              <span data-editable="ctaDescription">
                Start with a professional template and let our AI customize it perfectly for your
                business. Join thousands of successful websites already built on our platform.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200">
                <span data-editable="primaryCtaText">Browse Templates</span>
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors duration-200">
                <span data-editable="secondaryCtaText">Start Building Free</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-8 border-t border-border">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span data-editable="trustIndicator1">No credit card required</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span data-editable="trustIndicator2">Free templates included</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span data-editable="trustIndicator3">Deploy in minutes</span>
              </div>
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
