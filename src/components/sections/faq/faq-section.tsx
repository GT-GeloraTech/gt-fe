"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { faqs } from "@/constants/faqs";

import { Reveal } from "@/components/common/reveal/reveal";
import { Container } from "@/components/common/container";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#2a0f2f] py-20 sm:py-24 lg:py-28">
      <Container className="max-w-[900px]">
        <Reveal>
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="text-[32px] leading-[1.1] font-black tracking-[-0.03em] text-white sm:text-[44px] lg:text-[56px] lg:leading-none lg:tracking-[-0.04em]">
              Frequently Asked <span className="text-[#d4b06a]">Questions</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-7 text-zinc-400 sm:mt-5 sm:text-[18px] sm:leading-8">
              Everything you need to know before working with us
            </p>
          </div>
        </Reveal>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={faq.question} delay={index * 0.06}>
                <div
                  className={`overflow-hidden rounded-[20px] border bg-white/[0.02] backdrop-blur-sm transition-colors duration-300 sm:rounded-[24px] ${
                    isOpen
                      ? "border-[#d4b06a]/40 bg-white/[0.04]"
                      : "border-[#d4b06a]/12 hover:border-[#d4b06a]/25"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span className="text-[16px] font-semibold text-white sm:text-[18px]">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#d4b06a]/30 text-[#d4b06a]"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-[15px] leading-7 text-zinc-400 sm:px-7 sm:text-[16px] sm:leading-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
