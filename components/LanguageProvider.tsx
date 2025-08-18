'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { site } from '../src/config';

interface LanguageContextValue {
  language: 'de' | 'en';
}

const LanguageContext = createContext<LanguageContextValue>({ language: site.language as 'de' | 'en' });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'de' | 'en'>(site.language as 'de' | 'en');

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const lang = navigator.language.startsWith('de') ? 'de' : 'en';
      setLanguage(lang);
      document.documentElement.lang = lang;
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
