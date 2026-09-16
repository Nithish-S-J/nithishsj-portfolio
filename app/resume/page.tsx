import Link from "next/link";
import Container from "@/components/common/Container";

const skills = [
  "Microsoft Fabric",
  "Power BI",
  "SQL",
  "DAX",
  "Python",
  "PySpark",
  "Data Modeling",
  "Lakehouse",
  "Dataflows Gen2",
  "Power BI Semantic Models",
];

const experiences = [
  {
    period: "2024 — Present",
    company: "eJAmerica",
    role: "Sales Operations / Business Solutions",
    description:
      "Supporting commercial operations, solutioning, quotation management, pricing initiatives, and structured responses to business requirements.",
  },
  {
    period: "2023 — 2024",
    company: "Miles Education",
    role: "Business Support / Operations",
    description:
      "Worked across business operations and stakeholder coordination, supporting structured processes and data-driven operational activities.",
  },
  {
    period: "2022 — 2023",
    company: "Edureka",
    role: "Business / Sales Operations",
    description:
      "Supported sales and business activities within an EdTech environment, working with operational processes, customer requirements, and commercial execution.",
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#08090C] text-[#F5F5F0]">
      <Container>
        <div className="border-b border-white/[0.07] py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#7C848F] transition-colors hover:text-[#D4AF37]"
          >
            <span>←</span>
            Back to portfolio
          </Link>
        </div>

        <section className="border-b border-white/[0.07] py-16 sm:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
                Resume
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-7xl">
                Nithish Kumar S J
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#969DA8]">
                Sales Operations &amp; Business Analytics professional with a
                focus on data platforms, business intelligence, and analytics.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-[#7C848F] lg:text-right">
              <a
                href="mailto:Nithishhsj23@gmail.com"
                className="transition-colors hover:text-[#D4AF37]"
              >
                Nithishhsj23@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/nithishsj/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
              >
                linkedin.com/in/nithishsj
              </a>

              <a
                href="https://github.com/Nithish-S-J"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
              >
                github.com/Nithish-S-J
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-12 border-b border-white/[0.07] py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              01 / Profile
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              Business meets analytics.
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 text-base leading-8 text-[#969DA8]">
            <p>
              Sales Operations &amp; Business Solutions professional with 3+
              years across IT, SaaS, and EdTech.
            </p>

            <p>
              Experience spanning commercial operations, pre-sales solutioning,
              quotation management, pricing support, SaaS solution consulting,
              and RFP/RFI coordination.
            </p>

            <p>
              Currently focused on building analytics solutions using SQL,
              Power BI, Python, and Microsoft Fabric, connecting business
              requirements with structured data platforms and decision-ready
              insights.
            </p>
          </div>
        </section>

        <section className="grid gap-12 border-b border-white/[0.07] py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              02 / Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              Professional experience.
            </h2>
          </div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className={
                  index !== experiences.length - 1
                    ? "border-b border-white/[0.07] pb-12"
                    : ""
                }
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D4AF37]">
                      {experience.company}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-[#E8E9EA]">
                      {experience.role}
                    </h3>
                  </div>

                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#59616C]">
                    {experience.period}
                  </p>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#858D98]">
                  {experience.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-b border-white/[0.07] py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              03 / Technical Skills
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              Analytics stack.
            </h2>
          </div>

          <div className="flex max-w-3xl flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/[0.09] bg-white/[0.025] px-4 py-2.5 text-xs text-[#A7ADB7]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-b border-white/[0.07] py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              04 / Education
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
              Academic background.
            </h2>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D4AF37]">
              National Institute of Engineering
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[#E8E9EA]">
              Bachelor of Industrial &amp; Production Engineering
            </h3>

            <p className="mt-3 text-sm text-[#858D98]">
              Mysore · CGPA 7.6
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#4F5661]">
                Portfolio
              </p>

              <p className="mt-2 text-sm text-[#7C848F]">
                Explore projects, architecture, and analytics work.
              </p>
            </div>

            <Link
              href="/#projects"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-[#F3F2EC] px-5 py-3 text-sm font-semibold text-[#111214] transition-colors hover:bg-[#D4AF37]"
            >
              View Projects
              <span>→</span>
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}