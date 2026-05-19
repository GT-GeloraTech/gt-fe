"use client";

import { useEffect } from "react";

/**
 * When the contact page is opened with `?focus=form` (e.g. from the
 * "Let's Talk" / "Get In Touch" CTAs), the page should render at the top,
 * then smoothly glide down to the form.
 *
 * The previous implementation used scrollIntoView, which raced with Next's
 * route scroll-reset and the global `scroll-behavior: smooth` CSS — causing a
 * jump-up-then-jump-down. This version takes full manual control: it pins to
 * the top instantly (CSS smooth disabled), then runs a single rAF-driven
 * eased scroll so nothing else can interfere.
 */
export function ScrollToForm() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("focus") !== "form") return;

    const NAVBAR_OFFSET = 96;
    // How long the page rests at the very top before the glide begins.
    const TOP_HOLD_MS = 800;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const root = document.documentElement;
    const prevBehavior = root.style.scrollBehavior;
    // Disable CSS smooth scrolling so our per-frame scrollTo isn't fought.
    root.style.scrollBehavior = "auto";

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Start cleanly at the top — instant, no animation.
    window.scrollTo(0, 0);

    let raf = 0;
    let timer = 0;
    let cancelled = false;

    const cleanupUrl = () => {
      window.history.replaceState(null, "", window.location.pathname);
    };

    const animateTo = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;

      if (prefersReduced || Math.abs(distance) < 2) {
        window.scrollTo(0, Math.max(targetY, 0));
        cleanupUrl();
        return;
      }

      const duration = 750;
      let startTime = 0;
      // easeInOutCubic
      const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

      const step = (now: number) => {
        if (cancelled) return;
        if (!startTime) startTime = now;
        const progress = Math.min((now - startTime) / duration, 1);
        window.scrollTo(0, startY + distance * ease(progress));
        if (progress < 1) {
          raf = requestAnimationFrame(step);
        } else {
          cleanupUrl();
        }
      };

      raf = requestAnimationFrame(step);
    };

    const begin = () => {
      // Two frames so the route transition + first paint settle, then a short
      // beat so the visitor perceives the page top before the glide starts.
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (cancelled) return;
          const el = document.getElementById("contact-form");
          if (!el) return;
          const targetY = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
          timer = window.setTimeout(() => animateTo(targetY), TOP_HOLD_MS);
        }),
      );
    };

    if (document.readyState === "complete") {
      begin();
    } else {
      window.addEventListener("load", begin, { once: true });
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      window.removeEventListener("load", begin);
      root.style.scrollBehavior = prevBehavior;
    };
  }, []);

  return null;
}
