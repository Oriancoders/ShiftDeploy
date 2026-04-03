import React, { useEffect, useMemo, useState } from 'react';

const NAV_OFFSET = 132;

export default function SectionCapsuleNav({ sections = [], heroId = 'dr-hero', darkSectionIds = [] }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

  useEffect(() => {
    const updateState = () => {
      const hero = document.getElementById(heroId);
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setIsVisible(heroBottom <= NAV_OFFSET + 28);
      }

      let currentId = sectionIds[0] || '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top;
        if (top <= NAV_OFFSET + 52) {
          currentId = id;
        }
      }
      setActiveSection(currentId);

      let darkMode = false;
      for (const id of darkSectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= NAV_OFFSET + 24 && rect.bottom >= NAV_OFFSET + 24) {
          darkMode = true;
          break;
        }
      }
      setIsDarkTheme(darkMode);
    };

    updateState();
    window.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);

    return () => {
      window.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, [darkSectionIds, heroId, sectionIds]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed left-1/2 z-40 w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 transition-all duration-500 ease-out sm:w-[calc(100%-2rem)] ${
        isVisible
          ? 'top-[4.7rem] translate-y-0 scale-100 opacity-100 sm:top-[6.2rem]'
          : 'pointer-events-none top-[4rem] -translate-y-3 scale-[0.98] opacity-0 sm:top-[5.3rem]'
      }`}
    >
      <div
        className={`rounded-[1.6rem] px-2 py-2 backdrop-blur-md transition-all duration-300 sm:rounded-full sm:px-3 ${
          isDarkTheme
            ? 'border border-white/10 bg-primaryBlue/90 shadow-[0_18px_40px_rgba(0,0,0,0.28)]'
            : 'border border-primaryBlue/10 bg-white/92 shadow-[0_18px_40px_rgba(12,31,58,0.10)]'
        }`}
      >
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 [&::-webkit-scrollbar]:hidden">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 sm:py-2.5 sm:text-sm ${
                    isActive
                      ? isDarkTheme
                        ? 'bg-white text-primaryBlue shadow-[0_8px_18px_rgba(0,0,0,0.24)]'
                        : 'bg-primaryBlue text-white shadow-[0_8px_18px_rgba(12,31,58,0.16)]'
                      : isDarkTheme
                        ? 'bg-transparent text-white/75 hover:bg-white/10 hover:text-white'
                        : 'bg-transparent text-primaryBlue/75 hover:bg-primaryBlue/5 hover:text-primaryBlue'
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}