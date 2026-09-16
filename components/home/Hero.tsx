"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";
import Link from "next/link";

import Container from "../common/Container";

/* =========================================================
   SOCIAL ICONS
   Inline SVGs keep GitHub / LinkedIn independent from
   icon-package brand exports.
========================================================= */

function GitHubIcon({ size = 16 }: { size?: number }) {
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

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.605 0 4.267 2.372 4.267 5.456v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.56V8.999h-3.56v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#e8eaed] bg-[#fbfbfa]"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,173,207,0.12),transparent_68%)] blur-2xl" />

      <div className="pointer-events-none absolute right-[-160px] top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(109,77,246,0.08),transparent_68%)] blur-3xl" />

      <Container>
        <div className="relative grid min-h-[calc(100vh-78px)] items-center gap-16 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:py-24 xl:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-10 max-w-[700px]">
            {/* Identity */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce8eb] bg-white/80 px-3.5 py-2 shadow-[0_3px_14px_rgba(30,80,100,0.05)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#18a8a1] shadow-[0_0_0_4px_rgba(24,168,161,0.10)]" />

              <span className="text-[10px] font-semibold tracking-[0.18em] text-[#557080]">
                NITHISH KUMAR S J
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-[760px] text-[3.3rem] font-bold leading-[1.02] tracking-[-0.055em] text-[#172033] sm:text-[4.5rem] lg:text-[4.75rem] xl:text-[5.35rem]">
              I build data systems
              <br />
              that turn{" "}
              <span className="bg-gradient-to-r from-[#1596a6] via-[#248fc4] to-[#6d4df6] bg-clip-text text-transparent">
                complex data
              </span>
              <br />
              into decisions.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[610px] text-[16px] leading-8 text-[#626b78] sm:text-[17px] sm:leading-8">
              Sales Operations &amp; Business Analytics professional focused
              on building modern data solutions with Microsoft Fabric,
              Power BI, SQL, and Python.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#6246e8] px-5 py-3.5 text-[13px] font-semibold text-white shadow-[0_7px_20px_rgba(98,70,232,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#563bd8] hover:shadow-[0_10px_25px_rgba(98,70,232,0.25)]"
              >
                View My Work

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/resume"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-[#dfe2e6] bg-white px-5 py-3.5 text-[13px] font-semibold text-[#252a33] shadow-[0_3px_12px_rgba(25,35,50,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d3d7dc] hover:bg-[#f8f9fa] hover:shadow-[0_7px_18px_rgba(25,35,50,0.07)]"
              >
                <Download
                  size={15}
                  strokeWidth={1.8}
                />

                Download CV
              </Link>
            </div>

            {/* Social links */}
            <div className="mt-9 flex items-center gap-2.5">
              <a
                href="https://github.com/Nithish-S-J"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#e4e6e9] bg-white px-3.5 py-2.5 text-[12px] font-medium text-[#536070] shadow-[0_2px_8px_rgba(25,35,50,0.035)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d8dce1] hover:text-[#17181b] hover:shadow-[0_6px_16px_rgba(25,35,50,0.07)]"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nithishsj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#e4e6e9] bg-white px-3.5 py-2.5 text-[12px] font-medium text-[#536070] shadow-[0_2px_8px_rgba(25,35,50,0.035)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d8dce1] hover:text-[#17181b] hover:shadow-[0_6px_16px_rgba(25,35,50,0.07)]"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>

              <a
                href="mailto:Nithishhsj23@gmail.com"
                aria-label="Email"
                className="group inline-flex items-center rounded-xl border border-[#e4e6e9] bg-white px-3.5 py-2.5 text-[12px] font-medium text-[#536070] shadow-[0_2px_8px_rgba(25,35,50,0.035)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d8dce1] hover:text-[#17181b] hover:shadow-[0_6px_16px_rgba(25,35,50,0.07)]"
              >
                Email
              </a>
            </div>

            {/* Professional snapshot */}
            <div className="mt-12 grid max-w-[620px] grid-cols-3 border-t border-[#e5e7ea] pt-6">
              <div>
                <p className="text-[21px] font-bold tracking-[-0.04em] text-[#172033]">
                  3+
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#89919d]">
                  Years Experience
                </p>
              </div>

              <div className="border-l border-[#e5e7ea] pl-5">
                <p className="text-[21px] font-bold tracking-[-0.04em] text-[#172033]">
                  Fabric
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#89919d]">
                  Data Platform
                </p>
              </div>

              <div className="border-l border-[#e5e7ea] pl-5">
                <p className="text-[21px] font-bold tracking-[-0.04em] text-[#172033]">
                  Analytics
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#89919d]">
                  Business Focus
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="relative hidden min-h-[560px] items-center justify-center lg:flex">
            {/* Ambient glow */}
            <div className="absolute h-[390px] w-[390px] rounded-full bg-[radial-gradient(circle,rgba(21,150,166,0.12),transparent_68%)] blur-2xl" />

            <div className="relative h-[490px] w-[410px]">
              {/* Outer frame */}
              <div className="absolute inset-0 rotate-[2deg] rounded-[38px] border border-[#dfe7eb] bg-white/60 shadow-[0_25px_70px_rgba(32,65,85,0.09)] backdrop-blur-sm" />

              {/* Inner frame */}
              <div className="absolute inset-[18px] overflow-hidden rounded-[30px] border border-[#e3e8eb] bg-gradient-to-b from-[#f8fcfd] to-[#eef5f7]">
                {/* Glow */}
                <div className="absolute left-1/2 top-[-120px] h-[260px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(41,168,190,0.16),transparent_70%)] blur-2xl" />

                {/* Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                  <div className="relative flex h-[210px] w-[210px] items-center justify-center rounded-full border-[10px] border-white bg-gradient-to-br from-[#dff5f6] via-[#e9f3ff] to-[#eee9ff] shadow-[0_18px_45px_rgba(45,100,130,0.13)]">
                    <div className="flex h-[165px] w-[165px] items-center justify-center rounded-full border border-[#d5e5e9] bg-white/70">
                      <span className="text-[30px] font-bold tracking-[-0.05em] text-[#167f91]">
                        NSJ
                      </span>
                    </div>

                    <span className="absolute bottom-3 right-7 h-5 w-5 rounded-full border-4 border-white bg-[#20bd67]" />
                  </div>

                  <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8493a2]">
                    Data &amp; Analytics
                  </p>

                  <p className="mt-2 text-center text-[15px] font-semibold text-[#25364d]">
                    Building modern data platforms
                  </p>
                </div>

                {/* Technology chips */}
                <div className="absolute left-5 top-8 rounded-xl border border-white/80 bg-white/85 px-3 py-2 shadow-[0_6px_20px_rgba(30,70,90,0.08)] backdrop-blur-md">
                  <span className="text-[10px] font-semibold text-[#167f91]">
                    MICROSOFT FABRIC
                  </span>
                </div>

                <div className="absolute right-5 top-[105px] rounded-xl border border-white/80 bg-white/85 px-3 py-2 shadow-[0_6px_20px_rgba(30,70,90,0.08)] backdrop-blur-md">
                  <span className="text-[10px] font-semibold text-[#6048db]">
                    POWER BI
                  </span>
                </div>

                <div className="absolute bottom-[105px] left-5 rounded-xl border border-white/80 bg-white/85 px-3 py-2 shadow-[0_6px_20px_rgba(30,70,90,0.08)] backdrop-blur-md">
                  <span className="text-[10px] font-semibold text-[#40536c]">
                    SQL
                  </span>
                </div>

                <div className="absolute bottom-8 right-5 rounded-xl border border-white/80 bg-white/85 px-3 py-2 shadow-[0_6px_20px_rgba(30,70,90,0.08)] backdrop-blur-md">
                  <span className="text-[10px] font-semibold text-[#2876a5]">
                    PYTHON
                  </span>
                </div>
              </div>

              {/* Focus card */}
              <div className="absolute -bottom-5 -left-12 w-[205px] rounded-2xl border border-[#e0e5e9] bg-white/95 p-4 shadow-[0_16px_38px_rgba(30,55,75,0.11)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8995a3]">
                    Current Focus
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#20bd67]" />
                </div>

                <p className="mt-2 text-[13px] font-semibold text-[#25364d]">
                  Enterprise Analytics
                </p>

                <div className="mt-3 flex items-center gap-1">
                  <span className="h-1.5 flex-1 rounded-full bg-[#1596a6]" />
                  <span className="h-1.5 w-7 rounded-full bg-[#7c67eb]" />
                  <span className="h-1.5 w-4 rounded-full bg-[#dce1e6]" />
                </div>
              </div>

              {/* Experience card */}
              <div className="absolute -right-8 bottom-10 rounded-2xl border border-[#e0e5e9] bg-white/95 px-4 py-3 shadow-[0_16px_38px_rgba(30,55,75,0.10)] backdrop-blur-xl">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8a95a2]">
                  Experience
                </p>

                <p className="mt-1 text-[17px] font-bold tracking-[-0.04em] text-[#25364d]">
                  3+ Years
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STRIP
        ================================================= */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#e6e8eb] py-7 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#d8dde2]" />

            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#9aa2ad]">
              BUILDING INSIGHTS
            </p>

            <span className="text-[#aab1ba]">•</span>

            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#9aa2ad]">
              SOLVING PROBLEMS
            </p>

            <span className="text-[#aab1ba]">•</span>

            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#9aa2ad]">
              DRIVING IMPACT
            </p>

            <span className="hidden h-px w-10 bg-[#d8dde2] sm:block" />
          </div>

          <Link
            href="#about"
            aria-label="Scroll to About"
            className="group flex items-center gap-2 text-[11px] font-semibold text-[#718092] transition-colors hover:text-[#6246e8]"
          >
            Explore

            <ArrowDown
              size={14}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}