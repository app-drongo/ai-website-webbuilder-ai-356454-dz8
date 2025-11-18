'use client';

import React, { useState } from 'react';
import { Check, Star, Zap, Users, Shield, Headphones } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  highlight?: string;
}

interface PricingConfig {
  title: string;
  subtitle: string;
  billingToggle: {
    monthly: string;
    yearly: string;
    yearlyDiscount: string;
  };
  tiers: PricingTier[];
  features: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const config: PricingConfig = {
    title: 'Choose Your Perfect Plan',
    subtitle:
      'Start with beautiful templates, customize with AI, and scale your business with the right plan for your needs.',
    billingToggle: {
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyDiscount: 'Save 20%',
    },
    tiers: [
      {
        name: 'Starter',
        price: isYearly ? 'Free' : 'Free',
        period: 'forever',
        description: 'Perfect for trying out our platform and building your first websites',
        features: [
          '3 websites per month',
          '20+ basic templates',
          'AI customization',
          'Community support',
          'WebBuilder AI watermark',
          'Basic analytics',
        ],
        cta: 'Start Building Free',
        highlight: 'Most Popular for Beginners',
      },
      {
        name: 'Pro',
        price: isYearly ? '$23' : '$29',
        period: isYearly ? '/month (billed yearly)' : '/month',
        description: 'Ideal for entrepreneurs and small businesses who need unlimited websites',
        features: [
          'Unlimited websites',
          '100+ premium templates',
          'Advanced AI customization',
          'Priority support',
          'Custom domains',
          'No watermark',
          'Advanced analytics',
          'SEO optimization tools',
        ],
        popular: true,
        cta: 'Start Pro Trial',
        highlight: 'Most Popular',
      },
      {
        name: 'Agency',
        price: isYearly ? '$79' : '$99',
        period: isYearly ? '/month (billed yearly)' : '/month',
        description: 'Perfect for agencies and teams managing multiple client websites',
        features: [
          'Everything in Pro',
          'White-label solution',
          'Team collaboration (10 seats)',
          'Custom templates',
          'API access',
          'Dedicated support',
          'Client management dashboard',
          'Advanced integrations',
        ],
        cta: 'Contact Sales',
        highlight: 'Best for Teams',
      },
    ],
    features: {
      title: 'Why Choose WebBuilder AI?',
      items: [
        {
          icon: 'star',
          title: 'Premium Templates',
          description:
            'Curated collection of modern, professional designs built with best practices',
        },
        {
          icon: 'zap',
          title: 'AI-Powered Customization',
          description: 'Intelligent customization that adapts templates to your brand and content',
        },
        {
          icon: 'shield',
          title: 'Enterprise Security',
          description: 'Bank-level security with SSL certificates and regular security updates',
        },
        {
          icon: 'headphones',
          title: 'Expert Support',
          description: 'Get help from our team of web development and design experts',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Can I change plans anytime?',
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
        },
        {
          question: 'What happens to my websites if I downgrade?',
          answer:
            "Your websites will remain live, but you'll lose access to premium features. You can always upgrade again to restore full functionality.",
        },
        {
          question: 'Do you offer refunds?',
          answer:
            "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment in full.",
        },
        {
          question: 'Can I use my own domain?',
          answer:
            'Yes, Pro and Agency plans include custom domain support. You can connect your existing domain or purchase a new one through our platform.',
        },
      ],
    },
    cta: {
      title: 'Ready to Build Your Website?',
      subtitle:
        'Join thousands of entrepreneurs and businesses using WebBuilder AI to create stunning websites with templates and AI.',
      button: 'Start Building Free',
    },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return <Star className="h-6 w-6" />;
      case 'zap':
        return <Zap className="h-6 w-6" />;
      case 'shield':
        return <Shield className="h-6 w-6" />;
      case 'headphones':
        return <Headphones className="h-6 w-6" />;
      default:
        return <Star className="h-6 w-6" />;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              <span data-editable="monthlyLabel">{config.billingToggle.monthly}</span>
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[checked]:bg-primary"
              data-checked={isYearly}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              <span data-editable="yearlyLabel">{config.billingToggle.yearly}</span>
            </span>
            {isYearly && (
              <span className="ml-2 inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                <span data-editable="yearlyDiscount">{config.billingToggle.yearlyDiscount}</span>
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {config.tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg ${
                tier.popular
                  ? 'border-primary ring-1 ring-primary scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    <span data-editable={`tier${index}Highlight`}>{tier.highlight}</span>
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  <span data-editable={`tier${index}Name`}>{tier.name}</span>
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    <span data-editable={`tier${index}Price`}>{tier.price}</span>
                  </span>
                  <span className="text-muted-foreground ml-1">
                    <span data-editable={`tier${index}Period`}>{tier.period}</span>
                  </span>
                </div>
                <p className="text-muted-foreground">
                  <span data-editable={`tier${index}Description`}>{tier.description}</span>
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      <span data-editable={`tier${index}Feature${featureIndex}`}>{feature}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  tier.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border'
                }`}
              >
                <span data-editable={`tier${index}Cta`}>{tier.cta}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span data-editable="featuresTitle">{config.features.title}</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.features.items.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  {getIcon(feature.icon)}
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  <span data-editable={`feature${index}Title`}>{feature.title}</span>
                </h4>
                <p className="text-muted-foreground text-sm">
                  <span data-editable={`feature${index}Description`}>{feature.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span data-editable="faqTitle">{config.faq.title}</span>
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {config.faq.items.map((item, index) => (
              <div key={index} className="border border-border rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-medium hover:bg-muted/50 transition-colors rounded-lg"
                >
                  <span data-editable={`faq${index}Question`}>{item.question}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">
                      <span data-editable={`faq${index}Answer`}>{item.answer}</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-muted/30 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            <span data-editable="ctaTitle">{config.cta.title}</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <span data-editable="ctaSubtitle">{config.cta.subtitle}</span>
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
            <span data-editable="ctaButton">{config.cta.button}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
