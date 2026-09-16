import Link from "next/link";
import Container from "../common/Container";

const projects = [
  {
    number: "01",
    featured: true,
    title: "AirOps360",
    subtitle: "Enterprise Aviation Analytics Platform",
    description:
      "An enterprise analytics platform designed to bring aviation operations, airline traffic, airport activity, route reliability, and fuel data into a structured analytical environment.",
    technologies: [
      "Microsoft Fabric",
      "PySpark",
      "SQL",
      "Power BI",
      "Lakehouse",
    ],
    href: "/projects/airops360",
  },
  {
    number: "02",
    featured: false,
    title: "Enterprise Marketplace Intelligence Platform",
    subtitle: "Quick Commerce & Food Delivery Analytics",
    description:
      "A modern analytics platform combining ingestion, transformation, dimensional modeling, SQL analytics, semantic modeling, and Power BI reporting for marketplace and delivery data.",
    technologies: [
      "Microsoft Fabric",
      "SQL",
      "Power BI",
      "Dataflows Gen2",
    ],
    href: "/projects/marketplace-intelligence",
  },
  {
    number: "03",
    featured: false,
    title: "Marketing Data Pipeline",
    subtitle: "Analytics Engineering Project",
    description:
      "A data pipeline focused on transforming marketing data into a structured analytical layer for reporting and business analysis.",
    technologies: [
      "Python",
      "SQL",
      "Data Transformation",
      "Power BI",
    ],
    href: "/projects/marketing-data-pipeline",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-white/[0.07] py-28 sm:py-32"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
              04 / Projects
            </p>

            <h2 className="mt-5 max-w-sm text-4xl font-bold leading-tight tracking-[-0.03em] text-[#F5F5F0] sm:text-5xl">
              Selected work.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[#8F96A3]">
              A collection of analytics and data engineering projects built
              around real business scenarios, structured data platforms, and
              decision-ready reporting.
            </p>
          </div>
        </div>

        {/* Featured project */}
        <article className="mt-16 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0D1016]">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            {/* Visual */}
            <div className="relative min-h-[360px] overflow-hidden border-b border-white/[0.07] bg-[#090B10] lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 opacity-[0.045]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-md rounded-xl border border-white/[0.1] bg-[#10141B] p-5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#606875]">
                        AirOps360
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#D5D8DE]">
                        Aviation Intelligence
                      </p>
                    </div>

                    <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-[#C9AA4C]">
                      Analytics
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                      <div className="h-1.5 w-10 rounded-full bg-[#D4AF37]/50" />
                      <div className="mt-5 h-2 w-12 rounded-full bg-white/[0.08]" />
                    </div>

                    <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                      <div className="h-1.5 w-8 rounded-full bg-[#D4AF37]/35" />
                      <div className="mt-5 h-2 w-14 rounded-full bg-white/[0.08]" />
                    </div>

                    <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                      <div className="h-1.5 w-12 rounded-full bg-[#D4AF37]/40" />
                      <div className="mt-5 h-2 w-10 rounded-full bg-white/[0.08]" />
                    </div>
                  </div>

                  <div className="mt-4 h-28 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex h-full items-end gap-2">
                      {[35, 52, 44, 68, 58, 76, 64, 88].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-sm bg-[#D4AF37]/[0.45]"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-center font-mono text-[8px] uppercase tracking-[0.16em] text-[#505762]">
                    Conceptual dashboard preview
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D4AF37]">
                Featured Project / {projects[0].number}
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.025em] text-[#F3F4F6] sm:text-4xl">
                {projects[0].title}
              </h3>

              <p className="mt-3 text-sm font-medium text-[#B5BAC3]">
                {projects[0].subtitle}
              </p>

              <p className="mt-6 text-sm leading-7 text-[#7F8793]">
                {projects[0].description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {projects[0].technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[9px] text-[#8E96A3]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href={projects[0].href}
                className="group mt-9 inline-flex w-fit items-center gap-3 text-sm font-medium text-[#D4AF37]"
              >
                View Case Study
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </article>

        {/* Other projects */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {projects.slice(1).map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-white/[0.08] bg-[#0B0D12] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.13] hover:bg-[#0F1218] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.16em] text-[#4B5563]">
                  {project.number}
                </span>

                <span className="text-lg text-[#3F454F] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 max-w-lg text-2xl font-semibold tracking-[-0.02em] text-[#E5E7EB]">
                {project.title}
              </h3>

              <p className="mt-2 text-xs font-medium text-[#8E96A3]">
                {project.subtitle}
              </p>

              <p className="mt-5 text-sm leading-7 text-[#737B87]">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-[9px] text-[#737B87]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href={project.href}
                className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-[#A7ADB7] transition-colors hover:text-[#D4AF37]"
              >
                Explore project
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}