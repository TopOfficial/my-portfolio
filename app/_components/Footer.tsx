export default function Footer() {
  return (
    <footer className="py-8 px-6"
      style={{ borderTop: "1px solid transparent", borderImage: "linear-gradient(to right, transparent, #8A6B10, #D4AF37, #B8921A, transparent) 1" }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-mono text-[10px] text-[--muted] tracking-[0.2em]">
          SURIYA CHAUBEY — {new Date().getFullYear()}
        </span>

        {/* Gold diamond ornament */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <rect x="10" y="1" width="7" height="7" transform="rotate(45 10 10)" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.8" />
          <rect x="10" y="3" width="4" height="4" transform="rotate(45 10 10)" fill="#D4AF37" opacity="0.25" />
          <circle cx="10" cy="10" r="1.2" fill="#D4AF37" opacity="0.6" />
          <line x1="10" y1="1" x2="10" y2="19" stroke="#B8921A" strokeWidth="0.4" opacity="0.3" />
          <line x1="1" y1="10" x2="19" y2="10" stroke="#B8921A" strokeWidth="0.4" opacity="0.3" />
        </svg>

        <span className="font-mono text-[10px] text-[--muted] tracking-[0.2em]">
          BANGKOK, TH
        </span>
      </div>
    </footer>
  );
}
