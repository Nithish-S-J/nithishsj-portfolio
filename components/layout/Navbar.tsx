"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

import Button from "../ui/Button";
import Container from "../common/Container";

const navItems = [
  {
    label: "Home",
    href: "#home",
    color: "#118DFF",
    icon: (
      <path d="M3 9.5 10 3l7 6.5M5 8v9h10V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    ),
  },
  {
    label: "Experience",
    href: "#experience",
    color: "#0F6CBD",
    icon: (
      <path d="M4 6h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V6zM7 6V4.5A1.5 1.5 0 018.5 3h3A1.5 1.5 0 0113 4.5V6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    color: "#6B4FBB",
    icon: (
      <>
        <rect x="3" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <rect x="11" y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    color: "#F2C811",
    icon: (
      <path d="M10 2l1.9 4.6L17 7.2l-3.8 3.3L14.2 16 10 13.2 5.8 16l1-5.5L3 7.2l5.1-.6L10 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    ),
  },
  {
    label: "Certifications",
    href: "#certifications",
    color: "#0F6CBD",
    icon: (
      <>
        <circle cx="10" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7.5 12.5L6.5 18l3.5-2 3.5 2-1-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    color: "#33B6AF",
    icon: (
      <path d="M3 5h14v10H3V5zM3 5l7 6 7-6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
  },
];

/** Reusable Fluent-style tooltip wrapper */
function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group/tip relative flex items-center justify-center">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-md bg-[#201F1E] px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-all duration-150 group-hover/tip:opacity-100 group-hover/tip:translate-y-0 translate-y-[-2px] z-50"
      >
        {label}
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#201F1E]" />
      </span>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E1DFDD] bg-white/95 backdrop-blur">
      <Container>
        <nav className="flex h-[70px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#F2C811] to-[#118DFF] text-xs font-bold text-black">
              NS
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-lg font-semibold leading-tight tracking-tight text-[#201F1E] transition-colors group-hover:text-[#0F6CBD]">
                Nithish SJ
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A19F9D]">
                Enterprise Analytics
              </span>
            </div>
          </Link>

          {/* Ribbon-style nav tiles (Power Query / Fabric ribbon language) */}
          <div className="hidden items-center divide-x divide-[#E1DFDD] rounded-lg border border-[#E1DFDD] bg-[#FAF9F8] px-1 lg:flex">
            {navItems.map((item) => (
              <Tooltip key={item.label} label={item.label}>
                <Link
                  href={item.href}
                  className="group flex w-[68px] flex-col items-center gap-1 px-2 py-2 text-[#605E5C] transition-colors hover:bg-white hover:text-[#201F1E]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{ color: item.color }}
                    className="opacity-70 transition-opacity group-hover:opacity-100"
                  >
                    {item.icon}
                  </svg>
                  <span className="text-[10px] font-medium leading-none">{item.label}</span>
                </Link>
              </Tooltip>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Live status chip */}
            <Tooltip label="All systems operational">
              <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium text-green-700">Online</span>
              </div>
            </Tooltip>

            <div className="h-6 w-px bg-[#E1DFDD]" />

            {/* Social + Resume Group */}

<div className="flex items-center rounded-full border border-[#E1DFDD] bg-white shadow-sm overflow-hidden">

  <Tooltip label="GitHub">
    <Link
      href="https://github.com/Nithish-S-J"
      target="_blank"
      aria-label="GitHub"
      className="flex h-10 w-10 items-center justify-center border-r border-[#E1DFDD] text-[#605E5C] transition hover:bg-[#F5F9FF] hover:text-[#118DFF]"
    >
      <FaGithub size={16} />
    </Link>
  </Tooltip>

  <Tooltip label="LinkedIn">
    <Link
      href="https://www.linkedin.com/in/nithishsj/"
      target="_blank"
      aria-label="LinkedIn"
      className="flex h-10 w-10 items-center justify-center border-r border-[#E1DFDD] text-[#605E5C] transition hover:bg-[#F5F9FF] hover:text-[#118DFF]"
    >
      <FaLinkedin size={16} />
    </Link>
  </Tooltip>

  <Link
    href="/resume"
    className="px-5 text-sm font-medium text-[#0F6CBD] transition hover:bg-[#F5F9FF]"
  >
    Resume
  </Link>

</div>

            <div className="h-6 w-px bg-[#E1DFDD]" />

            {/* Profile section */}
            <Tooltip label="Nithish SJ · Analytics Engineer">
              <button
                aria-label="Profile"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#118DFF] to-[#0F6CBD] text-xs font-semibold text-white ring-2 ring-white transition-transform hover:scale-105"
              >
                NJ
              </button>
            </Tooltip>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E1DFDD] text-[#605E5C] lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col gap-1 border-t border-[#E1DFDD] py-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-md px-2 py-2.5 text-sm font-medium text-[#605E5C] hover:bg-[#FAF9F8] hover:text-[#201F1E]"
              >
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" style={{ color: item.color }}>
                  {item.icon}
                </svg>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3 border-t border-[#E1DFDD] pt-4">
              <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-green-700">Online</span>
              </div>
              <Link href="https://github.com/Nithish-S-J" target="_blank" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E1DFDD] text-[#605E5C]">
                <FaGithub size={16} />
              </Link>
              <Link href="https://www.linkedin.com/in/nithishsj/" target="_blank" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E1DFDD] text-[#605E5C]">
                <FaLinkedin size={16} />
              </Link>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#118DFF] to-[#0F6CBD] text-xs font-semibold text-white">
                NJ
              </button>
              <Button href="/resume">Resume</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}