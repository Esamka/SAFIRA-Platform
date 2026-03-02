"use client";

import Image from "next/image";
 import Link from "next/link";
import { Button } from "@/components/ui/button";
 import { useTranslation } from "react-i18next";
 import { usePathname } from "next/navigation";
 import { useState } from "react";
import { Dropdown } from "@/components/ui/dropdown";
 
 export function Navbar() {
   const { t, i18n } = useTranslation();
   const pathname = usePathname();
   const [open, setOpen] = useState(false);
   const [mobileOpen, setMobileOpen] = useState(false);
   const isRTL = i18n.dir() === "rtl";
   const items = [
     { label: t("nav.home"), href: "/" },
     { label: t("nav.about"), href: "/about" },
     { label: t("nav.blog"), href: "/features" },
     { label: t("nav.resources"), href: "/resources" },
     { label: t("nav.pricing"), href: "/pricing" },
     { label: t("nav.contact"), href: "/contact" },
   ];
   return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-[72px] py-7">
        <nav 
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="inline-flex items-center">
              <div 
                className="flex items-center"
                style={{
                  gap: "12px",
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-md flex-shrink-0"
                  style={{
                    width: "48.23px",
                    height: "42.31px",
                    padding: "3px",
                  }}
                >
                  <Image
                    src="/Group 1707480382.png"
                    alt="SAFIRA"
                    width={40}
                    height={36}
                    priority
                  />
                </div>
                {/* Text */}
                <span
                  className="hidden sm:inline-block"
                  style={{
                    fontFamily: "Orbitron",
                    fontWeight: 800,
                    fontSize: 24,
                    lineHeight: "100%",
                    letterSpacing: "6%",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: "#ffffff",
                  }}
                >
                  SAFIRA
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links - hidden on mobile */}
          <div 
            className="hidden lg:flex items-center justify-center"
            style={{
              gap: 40,
            }}
          >
            <ul className="flex items-center" style={{ gap: 40 }}>
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative inline-block px-1 group text-sm font-semibold transition-colors ${pathname === item.href ? "text-white" : "text-white/70 hover:text-white"}`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 -bottom-1.5 h-0.5 bg-[#2EA9FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Sign In & Language */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <Link href="/contact" aria-label={t("common.buttons.login")}> 
              <Button
                className="hover:shadow-md hover:scale-102 transition-all duration-300 px-3 sm:px-4"
                style={{
                  height: 40,
                  borderRadius: 10,
                  borderBottomWidth: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(90.08deg, #007AEB 0.08%, #82DEF5 99.94%)',
                  boxShadow: '0px 2px 8px rgba(0, 122, 235, 0.08)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#fff',
                  border: 'none',
                }}
              >
                <span>{t("common.buttons.login")}</span>
              </Button>
            </Link>

            {/* Language Dropdown */}
            <div className="hidden lg:block relative">
              <Dropdown open={open} onToggle={() => setOpen((v) => !v)}>
                <button
                  className="block w-full text-start px-4 py-2 rounded-md transition-colors hover:bg-blue-500/20 focus:bg-blue-500/30 text-sm"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    setOpen(false);
                  }}
                >
                  عربي
                </button>
                <button
                  className="block w-full text-start px-4 py-2 rounded-md transition-colors hover:bg-blue-500/20 focus:bg-blue-500/30 text-sm"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setOpen(false);
                  }}
                >
                  English
                </button>
                <button
                  className="block w-full text-start px-4 py-2 rounded-md transition-colors hover:bg-blue-500/20 focus:bg-blue-500/30 text-sm"
                  onClick={() => {
                    i18n.changeLanguage("fr");
                    setOpen(false);
                  }}
                >
                  Français
                </button>
              </Dropdown>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 ${isRTL ? "left-0" : "right-0"} z-50 h-full w-[280px] sm:w-[320px] transform transition-transform duration-300 ease-in-out ${
          mobileOpen
            ? "translate-x-0"
            : isRTL
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
        style={{
          background: "linear-gradient(180deg, rgba(10, 15, 30, 0.98) 0%, rgba(5, 10, 20, 0.99) 100%)",
          borderLeft: isRTL ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
          borderRight: isRTL ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
          boxShadow: "-4px 0 30px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-6 pt-7 pb-4">
          <span
            style={{
              fontFamily: "Orbitron",
              fontWeight: 800,
              fontSize: 20,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            SAFIRA
          </span>
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        {/* Nav Links */}
        <nav className="px-4 py-6">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: "Commissioner" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Language Selector */}
        <div className="px-4 py-5">
          <p className="px-4 text-xs text-white/40 uppercase tracking-wider mb-3" style={{ fontFamily: "Commissioner" }}>
            {t("nav.language") || "Language"}
          </p>
          <div className="flex gap-2 px-2">
            {[
              { code: "ar", label: "عربي" },
              { code: "en", label: "EN" },
              { code: "fr", label: "FR" },
            ].map((lang) => (
              <button
                key={lang.code}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  i18n.language === lang.code
                    ? "text-white bg-gradient-to-b from-blue-500/30 to-blue-600/20 border border-blue-500/30"
                    : "text-white/60 hover:text-white hover:bg-white/5 border border-white/10"
                }`}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setMobileOpen(false);
                }}
                style={{ fontFamily: "Commissioner" }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>


      </div>
    </header>
   );
 }
