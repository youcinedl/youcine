"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

          <div className="hidden md:flex items-center">
            <Link href="/youcine-apk" className="btn-primary flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </Link>
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
            <Link href="/youcine-apk" className="mt-4 w-full btn-primary flex justify-center items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
