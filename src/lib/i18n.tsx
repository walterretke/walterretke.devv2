'use client';

import React, { createContext, useContext } from 'react';
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

  const pathParts = pathname.split('/');
  const locale: Locale = pathParts[1] === 'en' || pathParts[1] === 'pt' ? (pathParts[1] as Locale) : 'en';

  const setLocale = (newLocale: Locale) => {
    if (newLocale !== locale) {
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year
      
      // Update URL
      const updatedPathParts = pathname.split('/');
      if (updatedPathParts[1] === 'en' || updatedPathParts[1] === 'pt') {
        updatedPathParts[1] = newLocale;
      } else {
        updatedPathParts.splice(1, 0, newLocale);
      }
      router.push(updatedPathParts.join('/') || '/');
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
