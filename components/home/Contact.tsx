import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../common/Container";

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-32">
      <Container>
        <div className="border-t border-white/[0.07] pt-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
                06 / Contact
              </p>

              <h2 className="mt-5 text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[#F5F5F0] sm:text-6xl lg:text-7xl">
                Let&apos;s build something useful.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#8F96A3] sm:text-lg">
                Whether it&apos;s an analytics platform, a data solution, or a
                business problem worth exploring, I&apos;d be happy to connect.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="mailto:Nithishhsj23@gmail.com"
                className="inline-flex items-center justify-center rounded-xl bg-[#F5F5F0] px-6 py-3.5 text-sm font-semibold text-[#09090B] transition-all duration-200 hover:bg-[#D4AF37]"
              >
                Get in touch →
              </Link>

              <Link
                href="mailto:Nithishhsj23@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.025] px-6 py-3.5 text-sm text-[#B8BEC8] transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.05] hover:text-white"
              >
                Nithishhsj23@gmail.com
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-10 border-t border-white/[0.07] pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#4B5563]">
                Connect
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Link
                  href="https://github.com/Nithish-S-J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#8F96A3] transition-all duration-200 hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
                  aria-label="GitHub"
                >
                  <FaGithub size={17} />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/nithishsj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#8F96A3] transition-all duration-200 hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={17} />
                </Link>
              </div>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#4B5563]">
                Focus
              </p>

              <p className="mt-4 text-sm leading-7 text-[#8F96A3]">
                Microsoft Fabric
                <br />
                Power BI &amp; Analytics
                <br />
                SQL &amp; Data Platforms
              </p>
            </div>

            <div className="lg:text-right">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#4B5563]">
                Portfolio
              </p>

              <p className="mt-4 text-sm leading-7 text-[#8F96A3]">
                Nithish Kumar S J
                <br />
                Enterprise Analytics
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-[#4B5563] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Nithish Kumar S J</span>

            <span className="font-mono text-[9px] uppercase tracking-[0.12em]">
              Built with Next.js · TypeScript · Tailwind
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}