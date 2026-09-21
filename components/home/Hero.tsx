"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Mail, Download } from "lucide-react";
import Container from "@/components/common/Container";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.73.084-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.265 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.605 0 4.267 2.372 4.267 5.456v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.56V8.999h-3.56v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--background)]"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--accent)]/8 blur-3xl" />
        <div className="absolute right-[-120px] top-10 h-96 w-96 rounded-full bg-[var(--teal)]/8 blur-3xl" />
        <div className="absolute bottom-[-180px] left-1/3 h-96 w-96 rounded-full bg-[var(--violet)]/6 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid min-h-[590px] items-center gap-12 py-16 sm:min-h-[620px] sm:py-20 lg:grid-cols-[1fr_400px] lg:gap-14 xl:grid-cols-[1fr_420px]">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Data &amp; Analytics Engineer
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-3xl text-[2.65rem] font-semibold leading-[1.08] tracking-[-0.045em] text-[var(--foreground)] sm:text-[3.3rem] lg:text-[3.5rem] xl:text-[3.8rem]">
              I build data platforms that turn complex data into{" "}
              <span className="text-[var(--accent)]">
                business decisions.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-[13px] leading-6 text-[var(--secondary)] sm:text-[14px]">
              Sales Operations &amp; Business Analytics professional building
              modern data solutions with Microsoft Fabric, Power BI, SQL, and
              Python — transforming complex data into reliable,
              decision-ready insights.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                View My Work

                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:shadow-md"
              >
                <Download size={15} />
                Resume
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href="https://github.com/Nithish-S-J"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/nithishsj/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
              >
                <LinkedInIcon />
              </a>

              <a
                href="mailto:Nithishhsj23@gmail.com"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
              >
                <Mail size={17} />
              </a>

              <span className="ml-1 hidden h-4 w-px bg-[var(--border)] sm:block" />

              <span className="hidden text-xs text-[var(--secondary)] sm:block">
                Open to opportunities
              </span>
            </div>

            {/* Proof strip */}
            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--border)] pt-6 sm:grid-cols-4">
              <div>
                <p className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  3+
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[var(--secondary)]">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  Fabric
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[var(--secondary)]">
                  Data Platform
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  Power BI
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[var(--secondary)]">
                  Analytics
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  SQL
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[var(--secondary)]">
                  Data Modeling
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PROFILE VISUAL */}
          <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[350px] sm:w-[350px] xl:h-[380px] xl:w-[380px]">
            {/* Soft glow */}
            <div className="absolute inset-0 rounded-full bg-[var(--accent)]/8 blur-2xl" />

            {/* Outer orbit */}
            <div className="absolute inset-2 rounded-full border border-[var(--accent)]/20" />

            {/* Dashed orbit */}
            <div className="absolute inset-8 rounded-full border border-dashed border-[var(--teal)]/20" />

            {/* Main profile frame */}
            <div className="absolute inset-[12px] rounded-full border-[5px] border-[var(--accent)]/15 bg-[var(--surface)] shadow-[0_25px_70px_rgba(20,121,232,0.12)]">
              {/* Inner ring */}
              <div className="absolute inset-2 rounded-full border border-[var(--accent)]/25" />

              {/* Profile image */}
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--background)] shadow-inner sm:h-[245px] sm:w-[245px]">
                <img
                  src="/images/profile.png"
                  alt="Nithish Kumar S J"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute left-0 top-[18%] rounded-lg border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2 shadow-lg backdrop-blur">
              <p className="text-[10px] font-semibold text-[var(--foreground)]">
                Microsoft Fabric
              </p>
            </div>

            <div className="absolute right-[-2px] top-[31%] rounded-lg border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2 shadow-lg backdrop-blur">
              <p className="text-[10px] font-semibold text-[var(--foreground)]">
                Power BI
              </p>
            </div>

            <div className="absolute bottom-[17%] left-[4%] rounded-lg border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2 shadow-lg backdrop-blur">
              <p className="text-[10px] font-semibold text-[var(--foreground)]">
                SQL · Python
              </p>
            </div>

            <div className="absolute bottom-[7%] right-[7%] rounded-lg border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2 shadow-lg backdrop-blur">
              <p className="text-[10px] font-semibold text-[var(--foreground)]">
                Enterprise Analytics
              </p>
            </div>

            {/* Orbit dots */}
            <span className="absolute right-[12%] top-[11%] h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_16px_var(--accent)]" />

            <span className="absolute bottom-[19%] right-[3%] h-2 w-2 rounded-full bg-[var(--teal)] shadow-[0_0_14px_var(--teal)]" />

            <span className="absolute bottom-[5%] left-[28%] h-2 w-2 rounded-full bg-[var(--violet)] shadow-[0_0_14px_var(--violet)]" />
          </div>
        </div>

        {/* Explore */}
        <div className="relative flex justify-center pb-6 sm:pb-8">
          <Link
            href="#about"
            className="group inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--secondary)] transition-colors hover:text-[var(--foreground)]"
          >
            Explore

            <ArrowDown
              size={14}
              className="transition-transform duration-200 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}