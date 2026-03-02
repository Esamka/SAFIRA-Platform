 "use client";
 
 import type { PropsWithChildren } from "react";
 import { I18nextProvider } from "react-i18next";
 import i18n from "@/i18n";
import { useEffect, useState } from "react";
 
 export function Providers({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Read stored language from localStorage and apply it after hydration
    const stored = localStorage.getItem("i18nextLng");
    if (stored && ["ar", "en", "fr"].includes(stored) && stored !== i18n.language) {
      i18n.changeLanguage(stored);
    }
    setReady(true);

    const apply = (lng: string) => {
      const dir = lng === "ar" ? "rtl" : "ltr";
      const el = document.documentElement;
      el.setAttribute("lang", lng);
      el.setAttribute("dir", dir);
      localStorage.setItem("i18nextLng", lng);
    };
    apply(i18n.language);
    const handler = (lng: string) => apply(lng);
    i18n.on("languageChanged", handler);
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
 }
