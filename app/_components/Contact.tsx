"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", handle: "github.com/TopOfficial", href: "https://github.com/TopOfficial", icon: GithubIcon, accentColor: "#4ECDC4" },
  { label: "LinkedIn", handle: "linkedin.com/in/suriya-chaubey", href: "https://linkedin.com/in/suriya-chaubey", icon: LinkedinIcon, accentColor: "#C8A84B" },
  { label: "Email", handle: "suriyachaubey@gmail.com", href: "mailto:suriyachaubey@gmail.com", icon: Mail, accentColor: "#E8705E" },
  { label: "Phone", handle: "+66 82 532 4267", href: "tel:+66825324267", icon: Phone, accentColor: "#4ECDC4" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">

      {/* Strong atmospheric orbs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,168,75,0.08) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(78,205,196,0.07) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,112,94,0.05) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      {/* Background numeral */}
      <div aria-hidden className="absolute left-0 top-16 font-display italic text-[--foreground] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(180px, 25vw, 320px)", opacity: 0.025 }}>
        04
      </div>

      {/* Small botanical leaf top-right */}
      <div aria-hidden className="absolute top-0 right-0 w-[280px] h-[360px] pointer-events-none opacity-[0.07]"
        style={{ transform: "translate(30%, -10%) rotate(20deg)" }}>
        <svg viewBox="0 0 280 360" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="leafContact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A84B" />
              <stop offset="100%" stopColor="#4ECDC4" />
            </linearGradient>
          </defs>
          <path d="M140,10 C210,10 265,70 265,160 C265,250 210,330 140,350 C70,330 15,250 15,160 C15,70 70,10 140,10Z" fill="url(#leafContact)" />
          <path d="M140,10 L140,350" stroke="rgba(200,168,75,0.5)" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.25em]"
              style={{ background: "linear-gradient(90deg, #E8705E, #C8A84B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              04 —
            </span>
            <span className="font-mono text-[11px] text-[--muted] tracking-[0.18em]">CONTACT</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(232,112,94,0.3), transparent)" }} />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: headline + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display italic font-light text-[--foreground] leading-tight mb-6"
              style={{ fontSize: "clamp(36px, 5.5vw, 70px)" }}>
              Let&apos;s build<br />
              <span style={{
                background: "linear-gradient(135deg, #C8A84B 0%, #E8705E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>something</span><br />
              together
            </h2>

            <p className="text-[--muted] text-sm leading-relaxed mb-10 max-w-sm">
              Open to AI Engineer, Data Engineer, and Data Analyst roles.
              Also available for freelance AI automation. Based in Bangkok —
              open to remote.
            </p>

            <a href="mailto:suriyachaubey@gmail.com"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] px-8 py-4 text-[--background] hover:brightness-110 transition-all"
              style={{ background: "linear-gradient(135deg, #C8A84B 0%, #E8705E 100%)" }}>
              SAY HELLO
              <span>→</span>
            </a>
          </motion.div>

          {/* Right: social cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {socials.map(({ label, handle, href, icon: Icon, accentColor }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
                rel={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                className="flex items-center gap-3 p-4 transition-all duration-300 group"
                style={{
                  background: "linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, " + accentColor + "22, " + accentColor + "11) border-box",
                  border: "1px solid transparent",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage =
                    `linear-gradient(var(--surface-2), var(--surface-2)) padding-box, linear-gradient(135deg, ${accentColor}55, ${accentColor}33) border-box`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${accentColor}22`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage =
                    `linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(135deg, ${accentColor}22, ${accentColor}11) border-box`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span className="shrink-0 transition-colors" style={{ color: accentColor }}>
                  <Icon size={16} />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-[--muted] tracking-wider mb-0.5">
                    {label.toUpperCase()}
                  </p>
                  <p className="text-sm text-[--foreground] font-medium leading-none">{handle}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
