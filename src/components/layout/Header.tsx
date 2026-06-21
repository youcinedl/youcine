"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 rounded-none bg-dark-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center font-outfit font-bold text-xl text-white shadow-lg shadow-primary/50"
            >
              YC
            </motion.div>
            <span className="font-outfit font-bold text-2xl text-white tracking-tight">
              YouCine<span className="text-secondary">PRO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Language Dropdown for Desktop */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="btn-primary flex items-center space-x-2 px-4 py-2 text-sm"
            >
              <Globe className="h-4 w-4" />
              <span>Language</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <>
                  {/* Backdrop overlay to close when clicking outside */}
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-44 bg-dark-800 border border-white/10 rounded-xl shadow-xl py-2 z-50 overflow-hidden"
                  >
                    <Link
                      href="/"
                      onClick={() => setIsLangOpen(false)}
                      className="flex items-center space-x-3 px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-white text-sm transition-colors"
                    >
                      <span className="text-base leading-none">🇺🇸</span>
                      <span className="font-medium">English</span>
                    </Link>
                    <Link
                      href="/br"
                      onClick={() => setIsLangOpen(false)}
                      className="flex items-center space-x-3 px-4 py-2.5 hover:bg-white/5 text-slate-300 hover:text-white text-sm transition-colors"
                    >
                      <span className="text-base leading-none">🇧🇷</span>
                      <span className="font-medium">Português</span>
                    </Link>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-800/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Language Section */}
            <div className="border-t border-white/10 pt-4 mt-4">
              <span className="block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Language
              </span>
              <div className="flex flex-col space-y-1 mt-1">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span>🇺🇸</span>
                  <span>English</span>
                </Link>
                <Link
                  href="/br"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span>🇧🇷</span>
                  <span>Português</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
