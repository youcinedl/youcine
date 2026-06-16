"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, AlertCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function TroubleshootingAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="glass-panel overflow-hidden border border-white/5 rounded-2xl transition-all duration-300 hover:border-primary/30"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-center space-x-3 pr-4">
                <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-bold text-base sm:text-lg text-slate-100">{faq.question}</span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 bg-dark-900/40">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
