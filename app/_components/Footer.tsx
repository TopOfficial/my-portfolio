export default function Footer() {
  return (
    <footer className="py-8 px-6"
      style={{ borderTop: "1px solid transparent", borderImage: "linear-gradient(to right, transparent, #C8A84B, #4ECDC4, #E8705E, transparent) 1" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-mono text-[10px] text-[--muted] tracking-[0.2em]">
          SURIYA CHAUBEY — {new Date().getFullYear()}
        </span>

        {/* Botanical hybrid ornament */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="3" fill="none" stroke="#C8A84B" strokeWidth="0.8" opacity="0.7" />
          <path d="M12,2 C12,2 14,7 12,9 C10,7 12,2 12,2Z" fill="#4ECDC4" opacity="0.6" />
          <path d="M12,15 C12,15 14,20 12,22 C10,20 12,15 12,15Z" fill="#4ECDC4" opacity="0.6" />
          <path d="M2,12 C2,12 7,10 9,12 C7,14 2,12 2,12Z" fill="#E8705E" opacity="0.6" />
          <path d="M15,12 C15,12 20,10 22,12 C20,14 15,12 15,12Z" fill="#E8705E" opacity="0.6" />
          <path d="M4.9,4.9 C4.9,4.9 8.5,7.5 8.5,9.5 C6.5,9.5 4.9,4.9 4.9,4.9Z" fill="#C8A84B" opacity="0.4" />
          <path d="M15.5,14.5 C15.5,14.5 19.1,17.1 19.1,19.1 C17.1,19.1 15.5,14.5 15.5,14.5Z" fill="#C8A84B" opacity="0.4" />
          <path d="M19.1,4.9 C19.1,4.9 15.5,7.5 15.5,9.5 C17.5,9.5 19.1,4.9 19.1,4.9Z" fill="#C8A84B" opacity="0.4" />
          <path d="M4.9,19.1 C4.9,19.1 8.5,16.5 8.5,14.5 C6.5,14.5 4.9,19.1 4.9,19.1Z" fill="#C8A84B" opacity="0.4" />
        </svg>

        <span className="font-mono text-[10px] text-[--muted] tracking-[0.2em]">
          BANGKOK, TH
        </span>
      </div>
    </footer>
  );
}
