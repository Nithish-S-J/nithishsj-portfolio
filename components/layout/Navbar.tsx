"use client";

import { useEffect, useState } from "react";
import {
  Download,
  Home,
  UserRound,
  BriefcaseBusiness,
  Database,
  BarChart3,
  Bookmark,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const mobileNavItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  {
    label: "Experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  { label: "Projects", href: "#projects", icon: Database },
  { label: "Skills", href: "#skills", icon: BarChart3 },
  {
    label: "Certifications",
    href: "#certifications",
    icon: Bookmark,
  },
  { label: "Contact", href: "#contact", icon: Mail },
];

function GitHubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.699-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.909-.621.069-.608.069-.608 1.005.071 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.482A10.002 10.002 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.605 0 4.267 2.372 4.267 5.456v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.56V8.999h-3.56v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* -------------------------------------------------------
     Restore saved theme
  ------------------------------------------------------- */

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("nithish-theme");

    const isDark = savedTheme === "dark";

    setDarkMode(isDark);

    document.documentElement.classList.toggle("dark", isDark);

    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, []);

  /* -------------------------------------------------------
     Apply theme
  ------------------------------------------------------- */

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    document.documentElement.dataset.theme = darkMode ? "dark" : "light";

    window.localStorage.setItem(
      "nithish-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  /* -------------------------------------------------------
     Scroll state
  ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------------------------------------------
     Active section
  ------------------------------------------------------- */

  useEffect(() => {
    const sections = navItems
      .map((item) =>
        document.getElementById(item.href.substring(1)),
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null,
      );

    if (!sections.length) return;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;

      let active = sections[0];
      let smallestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= marker && rect.bottom >= marker) {
          active = section;
          smallestDistance = 0;
          return;
        }

        if (smallestDistance !== 0) {
          const distance = Math.abs(rect.top - marker);

          if (distance < smallestDistance) {
            smallestDistance = distance;
            active = section;
          }
        }
      });

      setActiveId(active.id);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  /* -------------------------------------------------------
     Smooth navigation
  ------------------------------------------------------- */

  const navigateTo = (href: string) => {
    setMobileOpen(false);

    const target = document.querySelector(href);

    if (target instanceof HTMLElement) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "pt-1.5" : ""
      }`}
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-[radial-gradient(circle_at_50%_0%,rgba(66,164,225,0.10),transparent_68%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(37,120,180,0.14),transparent_68%)]" />

      <div
        className={`mx-auto w-full border-x border-b transition-all duration-300 ${
          scrolled
            ? "rounded-b-[16px] shadow-[0_8px_26px_rgba(20,40,65,0.10)] dark:shadow-[0_8px_26px_rgba(0,0,0,0.28)]"
            : "rounded-b-[16px] shadow-[0_5px_20px_rgba(20,40,65,0.06)] dark:shadow-[0_5px_20px_rgba(0,0,0,0.20)]"
        } border-[#dce4eb] bg-[#111c28]/[0.97] backdrop-blur-2xl dark:border-[#26384b]`}
      >
        {/* =================================================
            DESKTOP / TABLET NAVBAR
        ================================================= */}

        <div className="relative mx-auto flex h-[64px] w-full max-w-[1800px] items-center px-6 sm:px-8 lg:px-10 xl:px-12">
          {/* BRAND */}
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              navigateTo("#home");
            }}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#245a70] bg-[#142b39] transition-colors group-hover:border-[#2f8197]">
              <span className="text-[10px] font-bold tracking-[-0.04em] text-[#6fd7df]">
                NSJ
              </span>
            </div>

            <div className="hidden sm:block">
              <div className="text-[18px] font-bold tracking-[-0.045em] text-[#eef5fb]">
                Nithish_S_J
              </div>

              <div className="mt-0.5 text-[7px] font-bold tracking-[0.23em] text-[#91a3b6]">
                DATA &amp; ANALYTICS ENGINEER
              </div>
            </div>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION — CENTERED
          ================================================= */}

          <nav className="absolute left-1/2 hidden h-full -translate-x-1/2 items-center lg:flex">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const active = activeId === id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo(item.href);
                  }}
                  className={`relative flex h-full items-center px-3.5 text-[12px] font-medium transition-colors xl:px-4 ${
                    active
                      ? "text-[#62c7d5]"
                      : "text-[#a8b7c7] hover:text-[#f0f5f9]"
                  }`}
                >
                  {item.label}

                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-[#3ca6ef] to-[#55d2d0]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div className="ml-auto flex shrink-0 items-center">
            {/* GitHub */}
            <a
              href="https://github.com/Nithish-S-J"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#b9c7d5] transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <GitHubIcon size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nithishsj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#b9c7d5] transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <LinkedInIcon size={17} />
            </a>

            {/* Divider */}
            <span className="mx-2 h-6 w-px bg-white/[0.12]" />

            {/* Theme */}
            <div className="flex items-center rounded-full border border-[#33485d] bg-[#182635] p-0.5">
              <button
                type="button"
                onClick={() => setDarkMode(false)}
                aria-label="Light mode"
                aria-pressed={!darkMode}
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
                  !darkMode
                    ? "bg-white text-[#147ce9] shadow-sm"
                    : "text-[#8295a9] hover:text-[#c9d6e2]"
                }`}
              >
                <Sun size={14} />
              </button>

              <button
                type="button"
                onClick={() => setDarkMode(true)}
                aria-label="Dark mode"
                aria-pressed={darkMode}
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
                  darkMode
                    ? "bg-[#2c4359] text-white shadow-sm"
                    : "text-[#8295a9] hover:text-[#c9d6e2]"
                }`}
              >
                <Moon size={14} />
              </button>
            </div>

            {/* Resume */}
            <a
              href="/resume"
              className="ml-3 flex h-9 items-center gap-1.5 rounded-[10px] border border-[#1d3858] bg-[#142f4d] px-4 text-[11px] font-semibold text-[#edf5fb] transition-all hover:border-[#2a587f] hover:bg-[#193a5e]"
            >
              <Download
                size={13}
                strokeWidth={1.9}
                className="text-[#71d7df]"
              />

              <span>Resume</span>
            </a>

            {/* Mobile */}
            <button
              type="button"
              onClick={() =>
                setMobileOpen((open) => !open)
              }
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#304255] text-[#d7e2ed] lg:hidden"
            >
              {mobileOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>
          </div>
        </div>

        {/* =================================================
            MOBILE NAVIGATION
        ================================================= */}

        {mobileOpen && (
          <div className="border-t border-[#26384b] bg-[#111c28] px-5 pb-5 pt-3 lg:hidden">
            <nav className="grid gap-1">
              {mobileNavItems.map((item) => {
                const Icon = item.icon;
                const id = item.href.substring(1);
                const active = activeId === id;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      navigateTo(item.href);
                    }}
                    className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-[13px] font-medium ${
                      active
                        ? "bg-[#173650] text-[#63b4ff]"
                        : "text-[#9dafc1] hover:bg-[#1a2938] hover:text-[#edf5fb]"
                    }`}
                  >
                    <Icon size={17} strokeWidth={1.8} />

                    <span>{item.label}</span>

                    {active && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#63b4ff]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#293c50] pt-3">
              <a
                href="https://github.com/Nithish-S-J"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#304255] px-3 py-2.5 text-[12px] font-medium text-[#c5d4e2]"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nithishsj/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#304255] px-3 py-2.5 text-[12px] font-medium text-[#c5d4e2]"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
            </div>

            <a
              href="/resume"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#edf3f7] px-4 py-2.5 text-[12px] font-semibold text-[#172d49]"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
}