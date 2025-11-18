'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  section: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/', section: 'hero' },
  { label: 'Products', href: '/', section: 'product-showcase' },
  { label: 'Process', href: '/', section: 'process' },
  { label: 'Features', href: '/', section: 'features' },
  { label: 'Pricing', href: '/', section: 'pricing' },
  { label: 'Benefits', href: '/', section: 'benefits' },
  { label: 'Testimonials', href: '/', section: 'testimonials' },
  { label: 'Statistics', href: '/', section: 'stats' },
  { label: 'Get Started', href: '/', section: 'cta' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.section);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setIsOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
              onClick={e => {
                e.preventDefault();
                handleNavClick('hero');
              }}
            >
              <span data-editable="logoText">WebBuilder AI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigationItems.map(item => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.section
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-foreground hover:text-primary hover:bg-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('cta')}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span data-editable="ctaButtonText">Start Building Free</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          {navigationItems.map(item => (
            <button
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                activeSection === item.section
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:text-primary hover:bg-accent'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-4 pb-2">
            <button
              onClick={() => handleNavClick('cta')}
              className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg text-base font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm"
            >
              <span data-editable="mobileCTAButtonText">Start Building Free</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
