"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#projects", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "About", href: "#about", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[--border]"
          : "bg-transparent"
      }`}
      style={scrolled ? {
        background: "rgba(6, 13, 16, 0.92)",
        backdropFilter: "blur(16px)",
      } : undefined}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span
            className="font-mono text-xs font-medium tracking-[0.2em]"
            style={{
              background: "linear-gradient(135deg, #C8A84B 0%, #4ECDC4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SC
          </span>
          <span className="w-px h-3.5 bg-[--border]" />
          <span className="font-display italic text-[--foreground] group-hover:text-[--accent] transition-colors duration-300 text-base">
            Suriya Chaubey
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href, num }) => (
            <li key={label}>
              <a href={href} className="flex items-center gap-1.5 group">
                <span className="font-mono text-[10px] text-[--muted] group-hover:text-[--accent-cyan] transition-colors">
                  {num}
                </span>
                <span className="text-sm text-[--muted] group-hover:text-[--foreground] transition-colors">
                  {label}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:suriyachaubey@gmail.com"
              className="relative font-mono text-[11px] tracking-[0.15em] px-4 py-2 text-[--accent] transition-all duration-200 hover:text-[--background]"
              style={{
                background: "transparent",
                border: "1px solid transparent",
                backgroundImage: "linear-gradient(var(--background), var(--background)), linear-gradient(135deg, #C8A84B, #4ECDC4)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundImage =
                  "linear-gradient(135deg, #C8A84B, #4ECDC4), linear-gradient(135deg, #C8A84B, #4ECDC4)";
                (e.currentTarget as HTMLElement).style.WebkitTextFillColor = "#060D10";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundImage =
                  "linear-gradient(var(--background), var(--background)), linear-gradient(135deg, #C8A84B, #4ECDC4)";
                (e.currentTarget as HTMLElement).style.WebkitTextFillColor = "";
              }}
            >
              HIRE ME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
