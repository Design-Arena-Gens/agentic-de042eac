"use client";

import { useState, useEffect } from "react";

export function LanguageSwitch() {
  const [rtl, setRtl] = useState(false);

  useEffect(() => {
    if (rtl) {
      document.body.setAttribute("data-rtl", "true");
      document.documentElement.setAttribute("dir", "rtl");
      document.body.style.fontFamily = `var(--font-vazirmatn), var(--font-inter), system-ui`;
    } else {
      document.body.setAttribute("data-rtl", "false");
      document.documentElement.setAttribute("dir", "ltr");
      document.body.style.fontFamily = `var(--font-inter), var(--font-vazirmatn), system-ui`;
    }
  }, [rtl]);

  return (
    <button
      onClick={() => setRtl((prev) => !prev)}
      className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft"
    >
      {rtl ? "Switch to LTR" : "Switch to RTL"}
    </button>
  );
}
