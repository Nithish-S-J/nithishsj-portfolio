import Container from "../common/Container";

const certifications = [
  {
    number: "01",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    type: "Professional Certificate",
  },
  {
    number: "02",
    title: "Sales Enablement",
    issuer: "HubSpot",
    type: "Certification",
  },
  {
    number: "03",
    title: "Power BI Job Simulation",
    issuer: "PwC",
    type: "Job Simulation",
  },
  {
    number: "04",
    title: "Strategy Consulting Simulation",
    issuer: "BCG",
    type: "Job Simulation",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b border-white/[0.07] py-28 sm:py-32"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
              05 / Certifications
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F5F5F0] sm:text-5xl">
              Learning that compounds.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-base leading-8 text-[#8F96A3] sm:text-lg">
              Professional certifications and practical learning experiences
              spanning analytics, business, and modern technology.
            </p>
          </div>
        </div>

        {/* Certifications list */}
        <div className="mt-16">
          {certifications.map((certification, index) => (
            <article
              key={certification.number}
              className={`group grid gap-5 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center ${
                index !== certifications.length - 1
                  ? "border-b border-white/[0.07]"
                  : ""
              }`}
            >
              <span className="font-mono text-[9px] tracking-[0.16em] text-[#4F5661]">
                {certification.number}
              </span>

              <div>
                <h3 className="text-lg font-medium tracking-[-0.015em] text-[#E5E7EB] transition-colors group-hover:text-[#F5F5F0]">
                  {certification.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#737B87]">
                  <span>{certification.issuer}</span>
                  <span className="text-white/[0.18]">•</span>
                  <span>{certification.type}</span>
                </div>
              </div>

              <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-[#4F5661] sm:block">
                Credential
              </span>
            </article>
          ))}
        </div>

        {/* Current learning */}
        <div className="mt-10 border-t border-white/[0.07] pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D4AF37]">
                Currently learning
              </p>

              <p className="mt-3 text-sm leading-6 text-[#A7ADB7]">
                Power BI analytics · Microsoft Fabric · Advanced data
                engineering
              </p>
            </div>

            <span className="w-fit rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#626A75]">
              In Progress
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}