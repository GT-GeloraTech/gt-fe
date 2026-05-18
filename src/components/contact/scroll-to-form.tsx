"use client";

import { useEffect } from "react";

/**
 * When the contact page is opened with `?focus=form` (e.g. from the homepage
 * "Get In Touch" CTA), let the page render at the top first, then smoothly
 * scroll down to the contact form. The query flag is cleared afterwards so a
 * refresh keeps the user at the top.
 */
export function ScrollToForm() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("focus") !== "form") return;

    const NAVBAR_OFFSET = 96;

    const timeout = window.setTimeout(() => {
      const el = document.getElementById("contact-form");
      if (!el) return;

      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", window.location.pathname);
    }, 350);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}
