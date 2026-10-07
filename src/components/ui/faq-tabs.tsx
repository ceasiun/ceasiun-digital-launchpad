"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type FaqQuestion = { question: string; answer: string };

type FAQProps = {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: Record<string, FaqQuestion[]>;
  className?: string;
};

export function FAQ({ title = "FAQs", subtitle = "Frequently Asked Questions", categories, faqData, className }: FAQProps) {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0] ?? "");
  const questions = faqData[selectedCategory] ?? [];

  return (
    <section className={cn("faq-system", className)} aria-label={title}>
      <div className="faq-header">
        <span className="eyebrow">{subtitle}</span>
        <h2>{title}</h2>
        <span className="faq-orbit" aria-hidden="true" />
      </div>
      <div className="faq-tabs" role="tablist" aria-label="FAQ categories">
        {categoryKeys.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={selectedCategory === key}
            className={cn(selectedCategory === key && "is-active")}
            onClick={() => setSelectedCategory(key)}
          >
            <span>{categories[key]}</span>
            <b>{String(faqData[key]?.length ?? 0).padStart(2, "0")}</b>
            <AnimatePresence>
              {selectedCategory === key && <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }} transition={{ duration: .35 }} />}
            </AnimatePresence>
          </button>
        ))}
      </div>
      <div className="faq-list" role="tabpanel" aria-label={`${categories[selectedCategory] ?? "FAQ"} questions`}>
        <AnimatePresence mode="wait">
          <motion.div key={selectedCategory} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .3 }}>
            {questions.map((faq) => <FAQItem key={faq.question} {...faq} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: FaqQuestion) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className={cn("faq-item", isOpen && "is-open")} animate={isOpen ? "open" : "closed"}>
      <button type="button" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
        <span>{question}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: .2 }}><Plus aria-hidden="true" /></motion.span>
      </button>
      <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0, marginBottom: isOpen ? 16 : 0 }} transition={{ duration: .25 }} className="faq-answer-wrap">
        <p>{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default FAQ;
