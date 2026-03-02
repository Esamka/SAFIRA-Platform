// Utility for getting/setting language and direction in localStorage
export function getSavedLanguage(defaultLang = "ar") {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("i18nextLng");
      if (stored && ["ar", "en", "fr"].includes(stored)) return stored;
    } catch (_) {}
  }
  return defaultLang;
}

export function setLangAndDir(lng: string) {
  const dir = lng === "ar" ? "rtl" : "ltr";
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", lng);
    document.documentElement.setAttribute("dir", dir);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("i18nextLng", lng);
  }
}
