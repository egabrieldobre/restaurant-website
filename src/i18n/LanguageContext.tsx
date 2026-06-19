'use client';

import { createContext, useContext, useState } from 'react';
import { type Lang, translations } from './translations';

interface LanguageContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (typeof translations)[Lang];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>('ro');

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (ctx === null) {
        throw new Error('useLanguage must be used inside LanguageProvider');
    }
    return ctx;
}
