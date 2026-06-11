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
        scrolled ? "border-b border-[--border]" : "bg-transparent"
      }`}
      style={scrolled ? {
        background: "rgba(11, 9, 8, 0.85)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 1px 0 rgba(212,175,55,0.15)",
      } : undefined}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <span
            className="font-mono text-xs font-medium tracking-[0.2em]"
            style={{
              background: "linear-gradient(135deg, #B8921A, #F0D060)",
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
              <a href={href} className="flex items-center gap-1.5 group cursor-pointer">
                <span className="font-mono text-[10px] text-[--muted] group-hover:text-[--accent] transition-colors">
                  {num}
                </span>
                <span className="text-sm text-[--muted] group-hover:text-[--foreground] transition-colors">
                  {label}
                </span>
              </a>
            </li>
          ))}
          <li className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#10B981" }} />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#10B981" }} />
            </span>
            <span className="font-mono text-[10px] tracking-[0.15em]" style={{ color: "#10B981" }}>AVAILABLE</span>
          </li>
          <li>
            <a
              href="mailto:suriyachaubey@gmail.com"
              className="font-mono text-[11px] tracking-[0.15em] px-4 py-2 cursor-pointer transition-all duration-200"
              style={{
                color: "#B8921A",
                backgroundImage: "linear-gradient(var(--background), var(--background)), linear-gradient(135deg, #B8921A, #D4AF37)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                border: "1px solid transparent",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundImage =
                  "linear-gradient(135deg, #B8921A, #D4AF37), linear-gradient(135deg, #B8921A, #D4AF37)";
                (e.currentTarget as HTMLElement).style.webkitTextFillColor = "#0B0908";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundImage =
                  "linear-gradient(var(--background), var(--background)), linear-gradient(135deg, #B8921A, #D4AF37)";
                (e.currentTarget as HTMLElement).style.webkitTextFillColor = "";
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
