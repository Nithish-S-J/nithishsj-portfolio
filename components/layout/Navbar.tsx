"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Container from "../common/Container";
import CommandPalette from "./CommandPalette";

export default function Navbar() {
  const [mac, setMac] = useState(true);

  useEffect(() => {
    setMac(/Mac|iPod|iPhone|iPad/.test(navigator.platform));
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0B0F19]/90 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#F2C811] to-[#00C7BE] text-xs font-bold text-[#0B0F19]">
              NS
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="font-['Inter',sans-serif] text-lg font-semibold leading-tight tracking-tight text-[#F8FAFC] transition-colors group-hover:text-[#00C7BE]">
                Nithish SJ
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.3em] text-[#64748B]">
                Enterprise Analytics
              </span>
            </div>
          </Link>

          {/* Command palette trigger */}
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
            className="hidden max-w-xs flex-1 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-[#64748B] transition-colors hover:border-white/[0.16] hover:bg-white/[0.05] md:flex"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="shrink-0">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
              <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span className="flex-1 text-left font-['Inter',sans-serif]">Search this workspace</span>
            <kbd className="flex items-center gap-0.5 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-['JetBrains_Mono',monospace] text-[10px] text-[#94A3B8]">
              {mac ? "⌘" : "Ctrl"}K
            </kbd>
          </button>

          {/* Right side */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            {/* Animated status badge */}
            <div className="relative flex items-center gap-2 rounded-full border border-[#00C7BE]/25 bg-[#00C7BE]/10 px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C7BE] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00C7BE]" />
              </span>
              <span className="font-['Inter',sans-serif] text-xs font-medium text-[#5EEAD4]">
                Online · Systems operational
              </span>
            </div>

            <div className="h-6 w-px bg-white/[0.08]" />

            <Link
              href="https://github.com/Nithish-S-J"
              target="_blank"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-[#94A3B8] transition-colors hover:border-[#00C7BE]/40 hover:text-[#00C7BE]"
            >
              <FaGithub size={16} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nithishsj/"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-[#94A3B8] transition-colors hover:border-[#3B82F6]/40 hover:text-[#3B82F6]"
            >
              <FaLinkedin size={16} />
            </Link>

            {/* Glassmorphic secondary CTA */}
            <Link
              href="/resume"
              className="rounded-lg border border-white/[0.12] bg-white/[0.05] px-4 py-2 font-['Inter',sans-serif] text-sm font-medium text-[#F8FAFC] shadow-[0_0_0_0_rgba(59,130,246,0)] backdrop-blur-md transition-all hover:border-[#3B82F6]/40 hover:shadow-[0_0_20px_-2px_rgba(59,130,246,0.35)]"
            >
              Resume
            </Link>
          </div>
        </nav>
      </Container>

      <CommandPalette />
    </header>
  );
}