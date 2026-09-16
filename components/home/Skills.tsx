import Container from "../common/Container";

const skillGroups = [
  {
    number: "01",
    title: "Data Engineering",
    description: "Building and transforming modern data platforms.",
    skills: [
      "Microsoft Fabric",
      "Lakehouse",
      "Dataflows Gen2",
      "PySpark",
      "Azure Data Lake",
    ],
  },
  {
    number: "02",
    title: "Analytics & BI",
    description: "Turning structured data into decision-ready insights.",
    skills: [
      "Power BI",
      "DAX",
      "Semantic Models",
      "Direct Lake",
      "Data Visualization",
    ],
  },
  {
    number: "03",
    title: "SQL & Data",
    description: "Querying, modeling, and analytical data preparation.",
    skills: [
      "SQL",
      "T-SQL",
      "Data Modeling",
      "SQL Analytics",
      "Python",
    ],
  },
  {
    number: "04",
    title: "Development",
    description: "Tools and practices supporting analytics development.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Microsoft Ecosystem",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-white/[0.07] py-28 sm:py-32"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
              03 / Skills
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F5F5F0] sm:text-5xl">
              Tools for building with data.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-base leading-8 text-[#8F96A3] sm:text-lg">
              A technical stack shaped around data engineering, business
              intelligence, analytics, and modern Microsoft data platforms.
            </p>
          </div>
        </div>

        {/* Skill groups */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group bg-[#0B0D12] p-7 transition-colors duration-300 hover:bg-[#0F1217] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[9px] tracking-[0.16em] text-[#4F5661]">
                  {group.number}
                </span>

                <span className="text-[#3D434C] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]">
                  →
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em] text-[#ECEDEF]">
                {group.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-[#737B87]">
                {group.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[11px] text-[#A7ADB7] transition-colors duration-200 group-hover:border-white/[0.1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#505761]">
            Core stack
          </span>

          <span className="text-xs text-[#666E79]">
            Fabric · Power BI · SQL · Python · PySpark
          </span>
        </div>
      </Container>
    </section>
  );
}