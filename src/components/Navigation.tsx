'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const sections = ['about', 'talks', 'decks', 'articles'] as const;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains('dark');
      setIsDarkMode(darkMode);
    };

    window.addEventListener('scroll', handleScroll);
    checkDarkMode();

    const darkModeObserver = new MutationObserver(checkDarkMode);
    darkModeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-64px 0px -60% 0px' }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      darkModeObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-[600px] lg:max-w-[1200px] xl:max-w-[1536px] mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex flex-col leading-tight hover:opacity-80 transition-opacity">
            <span className="text-lg md:text-xl font-semibold text-primary">Yusuke Fukuda</span>
            <span className="text-xs text-foreground/60">@tonegawa07</span>
          </Link>

          <div className="hidden sm:flex items-center gap-4 text-sm">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition-colors ${
                  activeSection === id
                    ? 'text-primary font-medium'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
