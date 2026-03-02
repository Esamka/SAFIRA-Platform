"use client";
 
 import type { PropsWithChildren } from "react";
 import { I18nextProvider } from "react-i18next";

import i18n from "@/i18n";
import { useEffect, useState } from "react";
import { getSavedLanguage, setLangAndDir } from "@/i18n/langStorage";
 
 export function Providers({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = getSavedLanguage();
    if (stored && stored !== i18n.language) {
      i18n.changeLanguage(stored).then(() => {
        setLangAndDir(stored);
        setReady(true);
      });
    } else {
      setLangAndDir(i18n.language);
      setReady(true);
    }
    const handler = (lng: string) => setLangAndDir(lng);
    i18n.on("languageChanged", handler);
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, []);

  if (!ready) return null; // أو يمكن وضع سبينر هنا

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
 }
