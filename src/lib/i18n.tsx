'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, DICTIONARY } from '@/data/locales';
import { usePathname, useRouter } from 'next/navigation';

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof DICTIONARY['en'];
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Initialize from URL or default to 'en'
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/');
      if (pathParts[1] === 'en' || pathParts[1] === 'pt') {
        return pathParts[1] as Locale;
      }
    }
    return 'en';
  });

  // Sync state when URL changes (handled by middleware rewrites)
  useEffect(() => {
    const pathParts = pathname.split('/');
    const currentPathLocale = pathParts[1];
    
    if ((currentPathLocale === 'en' || currentPathLocale === 'pt') && currentPathLocale !== locale) {
      setLocaleState(currentPathLocale as Locale);
    }
  }, [pathname, locale]);

  const setLocale = (newLocale: Locale) => {
    if (newLocale !== locale) {
      setLocaleState(newLocale);
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year
      
      // Update URL
      const pathParts = pathname.split('/');
      if (pathParts[1] === 'en' || pathParts[1] === 'pt') {
        pathParts[1] = newLocale;
      } else {
        pathParts.splice(1, 0, newLocale);
      }
      router.push(pathParts.join('/') || '/');
    }
  };

  const t = DICTIONARY[locale];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
