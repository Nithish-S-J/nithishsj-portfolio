import Container from "../common/Container";

const experiences = [
  {
    period: "2024 — Present",
    company: "eJAmerica",
    role: "Sales Operations / Business Solutions",
    description:
      "Supporting commercial operations, solutioning, quotation management, pricing initiatives, and structured responses to business requirements.",
    highlights: [
      "Quotation & pricing",
      "Pre-sales solutioning",
      "RFP / RFI coordination",
      "Business process support",
    ],
  },
  {
    period: "2023 — 2024",
    company: "Miles Education",
    role: "Business Support / Operations",
    description:
      "Worked across business operations and stakeholder coordination, supporting structured processes and data-driven operational activities.",
    highlights: [
      "Business operations",
      "Stakeholder coordination",
      "Process support",
      "Data & reporting",
    ],
  },
  {
    period: "2022 — 2023",
    company: "Edureka",
    role: "Business / Sales Operations",
    description:
      "Supported sales and business activities within an EdTech environment, working with operational processes, customer requirements, and commercial execution.",
    highlights: [
      "Sales operations",
      "Customer requirements",
      "Commercial execution",
      "Operational coordination",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-white/[0.07] py-28 sm:py-32"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
              02 / Experience
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F5F5F0] sm:text-5xl">
              Building experience across business and technology.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-base leading-8 text-[#8F96A3] sm:text-lg">
              My professional journey spans IT, SaaS, and EdTech, combining
              commercial operations, solutioning, stakeholder coordination,
              and analytics.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[5px] top-2 w-px bg-white/[0.1] sm:left-[7px]" />

          <div className="space-y-14">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="relative grid gap-6 pl-8 sm:grid-cols-[150px_1fr] sm:gap-12 sm:pl-0"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#08090C] sm:left-[0px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                </div>

                {/* Date */}
                <div className="sm:pt-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#646C77]">
                    {experience.period}
                  </p>
                </div>

                {/* Experience content */}
                <div
                  className={`max-w-3xl ${
                    index !== experiences.length - 1
                      ? "border-b border-white/[0.07] pb-14"
                      : ""
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#D4AF37]">
                    {experience.company}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#F1F2F3] sm:text-3xl">
                    {experience.role}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8F96A3] sm:text-base">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {experience.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="flex items-center gap-2 text-[11px] text-[#737B87]"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#555C67]" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}