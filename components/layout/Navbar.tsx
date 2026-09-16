"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Bookmark,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Database,
  Download,
  Home,
  Mail,
  MapPin,
  Menu,
  Moon,
  Search,
  Sun,
  UserRound,
  X,
} from "lucide-react";

import Container from "../common/Container";

const navItems = [
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

const searchItems = [
  {
    title: "About",
    description: "Background and professional profile",
    href: "#about",
    keywords: "about profile nithish analytics",
  },
  {
    title: "Experience",
    description: "Professional experience and business roles",
    href: "#experience",
    keywords: "experience sales operations business",
  },
  {
    title: "AirOps360",
    description: "Enterprise airline analytics platform",
    href: "#projects",
    keywords:
      "airops360 airline fabric power bi sql analytics",
  },
  {
    title: "Projects",
    description: "Data engineering and analytics projects",
    href: "#projects",
    keywords:
      "projects microsoft fabric power bi sql python",
  },
  {
    title: "Skills",
    description:
      "Microsoft Fabric, Power BI, SQL, Python and more",
    href: "#skills",
    keywords:
      "skills fabric power bi sql dax python pyspark",
  },
  {
    title: "Certifications",
    description: "Professional certifications and learning",
    href: "#certifications",
    keywords: "certifications microsoft power bi",
  },
  {
    title: "Contact",
    description: "Connect with Nithish",
    href: "#contact",
    keywords: "contact email github linkedin",
  },
];

function GitHubIcon({ size = 18 }: { size?: number }) {
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

function LinkedInIcon({ size = 18 }: { size?: number }) {
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* -------------------------------------------------------
     Restore saved theme
  ------------------------------------------------------- */

  useEffect(() => {
    const savedTheme =
      window.localStorage.getItem("nithish-theme");

    const isDark = savedTheme === "dark";

    setDarkMode(isDark);

    document.documentElement.classList.toggle(
      "dark",
      isDark
    );

    document.documentElement.dataset.theme = isDark
      ? "dark"
      : "light";
  }, []);

  /* -------------------------------------------------------
     Apply theme
  ------------------------------------------------------- */

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

    document.documentElement.dataset.theme = darkMode
      ? "dark"
      : "light";

    window.localStorage.setItem(
      "nithish-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  /* -------------------------------------------------------
     Scroll state
  ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------------------------------------------
     Active section
  ------------------------------------------------------- */

  useEffect(() => {
    const sections = navItems
      .map((item) =>
        document.getElementById(item.href.substring(1))
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    if (!sections.length) return;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;

      let active = sections[0];
      let smallestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= marker &&
          rect.bottom >= marker
        ) {
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

    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, []);

  /* -------------------------------------------------------
     Keyboard search
  ------------------------------------------------------- */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setSearchOpen(true);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, []);

  /* -------------------------------------------------------
     Search
  ------------------------------------------------------- */

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return searchItems;
    }

    return searchItems.filter((item) =>
      `${item.title} ${item.description} ${item.keywords}`
        .toLowerCase()
        .includes(query)
    );
  }, [searchQuery]);

  const navigateTo = (href: string) => {
    setSearchOpen(false);
    setSearchQuery("");
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
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "pt-2" : ""
        }`}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-36 bg-[radial-gradient(circle_at_50%_0%,rgba(66,164,225,0.14),transparent_68%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(37,120,180,0.16),transparent_68%)]" />

        <Container>
          <div
            className={`overflow-hidden border transition-all duration-300 ${
              scrolled
                ? "rounded-[22px] shadow-[0_12px_38px_rgba(26,48,72,0.10)] dark:shadow-[0_12px_38px_rgba(0,0,0,0.30)]"
                : "rounded-b-[20px] rounded-t-none shadow-[0_8px_28px_rgba(26,48,72,0.06)] dark:shadow-[0_8px_28px_rgba(0,0,0,0.22)]"
            } border-[#e2e7ec] bg-white/92 backdrop-blur-2xl dark:border-[#26384b] dark:bg-[#111b27]/94`}
          >
            {/* =================================================
                TOP BAR
            ================================================= */}

            <div className="flex h-[82px] items-center justify-between px-5 sm:px-7 lg:px-8">
              {/* Brand */}
              <Link
                href="#home"
                onClick={() => navigateTo("#home")}
                className="group flex min-w-0 items-center gap-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-[#ccecf0] bg-gradient-to-br from-[#effcff] to-[#d9f5f8] dark:border-[#27586b] dark:from-[#163442] dark:to-[#182c3c]">
                  <span className="text-[11px] font-bold tracking-[-0.04em] text-[#137f91] dark:text-[#71d6df]">
                    NSJ
                  </span>
                </div>

                <div className="hidden min-w-0 sm:block">
                  <div className="text-[20px] font-bold tracking-[-0.045em] text-[#172d4b] dark:text-[#eef5fb]">
                    Nithish_S_J
                  </div>

                  <div className="mt-1 truncate text-[8px] font-bold tracking-[0.25em] text-[#8290a4] dark:text-[#8296aa]">
                    DATA &amp; ANALYTICS ENGINEER
                  </div>
                </div>
              </Link>

              {/* Search */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="hidden h-[48px] w-[350px] items-center gap-3 rounded-[15px] border border-[#dfe5eb] bg-[#fbfcfd] px-4 text-left transition-all hover:border-[#c9d5e1] hover:bg-white xl:flex dark:border-[#2a3c50] dark:bg-[#172331] dark:hover:border-[#385067] dark:hover:bg-[#1a2939]"
              >
                <Search
                  size={20}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#2d4562] dark:text-[#b7c7d7]"
                />

                <span className="flex-1 text-[13px] text-[#7d8ba0] dark:text-[#8799ac]">
                  Search projects, skills, experience...
                </span>

                <span className="rounded-md border border-[#e0e6ec] bg-[#f2f5f8] px-2 py-1 text-[10px] font-medium text-[#68788d] dark:border-[#35485d] dark:bg-[#223143] dark:text-[#9eafc0]">
                  Ctrl K
                </span>
              </button>

              {/* Right actions */}
              <div className="flex items-center gap-1">
                {/* GitHub */}
                <a
                  href="https://github.com/Nithish-S-J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hidden items-center gap-2 rounded-xl px-3 py-2.5 text-[#263b56] transition-all hover:bg-[#f3f7fa] sm:inline-flex dark:text-[#c5d4e2] dark:hover:bg-[#1c2b3a]"
                >
                  <GitHubIcon size={18} />
                  <span className="hidden text-[12px] font-medium xl:inline">
                    GitHub
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nithishsj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hidden items-center gap-2 rounded-xl px-3 py-2.5 text-[#263b56] transition-all hover:bg-[#f3f7fa] sm:inline-flex dark:text-[#c5d4e2] dark:hover:bg-[#1c2b3a]"
                >
                  <LinkedInIcon size={18} />
                  <span className="hidden text-[12px] font-medium xl:inline">
                    LinkedIn
                  </span>
                </a>

                <span className="mx-2 hidden h-7 w-px bg-[#e3e7ec] sm:block dark:bg-[#304255]" />

                {/* =================================================
                    RESUME

                    Inline style intentionally used here so the
                    old gradient cannot override the button.
                ================================================= */}

                <Link
                  href="/resume"
                  className="group hidden items-center gap-2 rounded-[13px] px-5 py-3 text-[12px] font-semibold transition-all duration-200 sm:inline-flex"
                  style={{
                    background: darkMode
                      ? "#f2f6f9"
                      : "#172d49",
                    color: darkMode
                      ? "#172d49"
                      : "#ffffff",
                    border: darkMode
                      ? "1px solid #d8e1e8"
                      : "1px solid #172d49",
                    boxShadow: darkMode
                      ? "0 5px 16px rgba(0,0,0,0.22)"
                      : "0 5px 16px rgba(23,45,73,0.16)",
                  }}
                >
                  <Download
                    size={15}
                    strokeWidth={1.9}
                    style={{
                      color: darkMode
                        ? "#147f91"
                        : "#8de0e1",
                    }}
                  />

                  <span>Resume</span>
                </Link>

                {/* Avatar */}
                <div className="ml-2 hidden h-10 w-10 items-center justify-center rounded-full border border-[#bce5e9] bg-gradient-to-br from-[#1c9fa9] to-[#167287] text-[11px] font-bold text-white shadow-[0_4px_12px_rgba(20,130,145,0.18)] sm:flex">
                  NS
                </div>

                {/* Mobile */}
                <button
                  type="button"
                  onClick={() =>
                    setMobileOpen((open) => !open)
                  }
                  aria-label="Toggle navigation"
                  aria-expanded={mobileOpen}
                  className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl border border-[#e0e6eb] bg-white text-[#263c59] lg:hidden dark:border-[#304255] dark:bg-[#172331] dark:text-[#d7e2ed]"
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
                SECOND NAV
            ================================================= */}

            <div className="hidden border-t border-[#e6eaee] lg:block dark:border-[#26384b]">
              <div className="flex min-h-[76px] items-center justify-between px-5 xl:px-7">
                <nav className="flex items-center gap-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const id = item.href.substring(1);
                    const active = activeId === id;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() =>
                          navigateTo(item.href)
                        }
                        className={`group relative flex h-[52px] items-center gap-2 rounded-[15px] px-3.5 text-[12px] font-medium transition-all xl:px-4 ${
                          active
                            ? "bg-[#edf6ff] text-[#1479e8] dark:bg-[#173650] dark:text-[#63b4ff]"
                            : "text-[#43536b] hover:bg-[#f6f8fa] hover:text-[#182f4c] dark:text-[#9dafc1] dark:hover:bg-[#1a2938] dark:hover:text-[#edf5fb]"
                        }`}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.65}
                        />

                        <span>{item.label}</span>

                        {active && (
                          <span className="absolute bottom-[-1px] left-1/2 h-[3px] w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#177cf0] to-[#22a7bb]" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Indicators */}
                <div className="flex items-center gap-2">
                  <div className="hidden items-center gap-2 border-l border-[#e4e8ed] pl-4 xl:flex dark:border-[#304255]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-25" />
                      <span className="relative h-2.5 w-2.5 rounded-full bg-[#20bd67]" />
                    </span>

                    <span className="text-[11px] font-medium text-[#43546b] dark:text-[#b3c2d0]">
                      Open to Opportunities
                    </span>
                  </div>

                  <div className="hidden items-center gap-1.5 border-l border-[#e4e8ed] pl-4 xl:flex dark:border-[#304255]">
                    <MapPin
                      size={15}
                      strokeWidth={1.7}
                      className="text-[#5c7088] dark:text-[#8ea2b6]"
                    />

                    <span className="text-[11px] font-medium text-[#43546b] dark:text-[#b3c2d0]">
                      India (IST)
                    </span>
                  </div>

                  {/* Theme */}
                  <div className="ml-1 flex items-center rounded-full border border-[#dfe6ec] bg-[#f7f9fb] p-1 dark:border-[#33485d] dark:bg-[#182635]">
                    <button
                      type="button"
                      onClick={() => setDarkMode(false)}
                      aria-label="Light mode"
                      aria-pressed={!darkMode}
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                        !darkMode
                          ? "bg-white text-[#147ce9] shadow-[0_2px_8px_rgba(20,50,80,0.11)]"
                          : "text-[#8190a3] hover:text-[#40536b] dark:text-[#6f859a]"
                      }`}
                    >
                      <Sun size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setDarkMode(true)}
                      aria-label="Dark mode"
                      aria-pressed={darkMode}
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                        darkMode
                          ? "bg-[#2a4056] text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                          : "text-[#8190a3] hover:text-[#40536b]"
                      }`}
                    >
                      <Moon size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                MOBILE
            ================================================= */}

            {mobileOpen && (
              <div className="border-t border-[#e6eaee] bg-white px-4 pb-5 pt-3 lg:hidden dark:border-[#26384b] dark:bg-[#111b27]">
                <div className="grid gap-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const id = item.href.substring(1);
                    const active = activeId === id;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() =>
                          navigateTo(item.href)
                        }
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium ${
                          active
                            ? "bg-[#edf6ff] text-[#1479e8] dark:bg-[#173650] dark:text-[#63b4ff]"
                            : "text-[#43536b] hover:bg-[#f6f8fa] dark:text-[#9dafc1] dark:hover:bg-[#1a2938]"
                        }`}
                      >
                        <Icon size={19} />
                        <span>{item.label}</span>

                        {active && (
                          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#1479e8]" />
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#e8ebef] pt-3 dark:border-[#293c50]">
                  <a
                    href="https://github.com/Nithish-S-J"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#e2e7ec] px-3 py-3 text-[13px] font-medium text-[#334760] dark:border-[#304255] dark:text-[#c5d4e2]"
                  >
                    <GitHubIcon size={17} />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nithishsj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#e2e7ec] px-3 py-3 text-[13px] font-medium text-[#334760] dark:border-[#304255] dark:text-[#c5d4e2]"
                  >
                    <LinkedInIcon size={17} />
                    LinkedIn
                  </a>
                </div>

                <Link
                  href="/resume"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#172d49] px-4 py-3 text-[13px] font-semibold text-white dark:bg-[#edf3f7] dark:text-[#172d49]"
                >
                  <Download size={15} />
                  Download CV
                </Link>
              </div>
            )}
          </div>
        </Container>
      </header>

      {/* =====================================================
          SEARCH MODAL
      ===================================================== */}

      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-[#142033]/30 px-4 pt-[12vh] backdrop-blur-sm"
          onMouseDown={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-[620px] overflow-hidden rounded-[22px] border border-[#dfe5eb] bg-white shadow-[0_30px_90px_rgba(20,40,70,0.20)] dark:border-[#304255] dark:bg-[#14202d]"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <div className="flex items-center gap-3 border-b border-[#e8ebef] px-5 dark:border-[#304255]">
              <Search
                size={20}
                className="text-[#536981] dark:text-[#a9bacb]"
              />

              <input
                autoFocus
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search projects, skills, experience..."
                className="h-16 flex-1 bg-transparent text-[15px] text-[#1d2d43] outline-none placeholder:text-[#98a3b1] dark:text-[#edf4fa] dark:placeholder:text-[#708398]"
              />

              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-lg border border-[#e1e6eb] bg-[#f5f7f9] px-2 py-1 text-[10px] font-medium text-[#6d7c8f] dark:border-[#35485d] dark:bg-[#223143] dark:text-[#9eafc0]"
              >
                ESC
              </button>
            </div>

            <div className="max-h-[420px] overflow-y-auto p-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => navigateTo(item.href)}
                    className="flex w-full items-center gap-3 rounded-[14px] px-4 py-3.5 text-left hover:bg-[#f4f8fb] dark:hover:bg-[#1b2a39]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf6ff] text-[#1479e8] dark:bg-[#173650] dark:text-[#63b4ff]">
                      <Search size={16} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-semibold text-[#243750] dark:text-[#e4edf5]">
                        {item.title}
                      </p>

                      <p className="mt-0.5 truncate text-[11px] text-[#8390a0] dark:text-[#8799ac]">
                        {item.description}
                      </p>
                    </div>

                    <ChevronDown
                      size={15}
                      className="-rotate-90 text-[#a0aab6]"
                    />
                  </button>
                ))
              ) : (
                <div className="px-5 py-12 text-center">
                  <p className="text-[13px] font-semibold text-[#334760] dark:text-[#e4edf5]">
                    No results found
                  </p>

                  <p className="mt-1 text-[11px] text-[#8995a4]">
                    Try projects, skills or experience.
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-[#e8ebef] px-5 py-3 dark:border-[#304255]">
              <span className="text-[10px] text-[#8b97a5]">
                Portfolio search
              </span>

              <span className="flex items-center gap-1.5 text-[10px] text-[#8b97a5]">
                <CheckCircle2 size={12} />
                Quick navigation
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}