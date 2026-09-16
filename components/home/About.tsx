import Container from "../common/Container";

const focusAreas = [
  "Microsoft Fabric",
  "Power BI",
  "SQL",
  "Python",
  "Data Engineering",
  "Business Analytics",
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-white/[0.07] py-28 sm:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Section heading */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
              01 / About
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F5F5F0] sm:text-5xl">
              Where business meets data.
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-[#D1D5DB] sm:text-2xl sm:leading-10">
              I&apos;m Nithish Kumar S J, an analytics professional with a
              background spanning business operations, pre-sales, and data
              analytics.
            </p>

            <p className="mt-7 text-base leading-8 text-[#8F96A3]">
              My work sits between business requirements and technical
              solutions. I enjoy understanding how a business operates,
              structuring the underlying data, and turning it into analytics
              that people can actually use.
            </p>

            <p className="mt-5 text-base leading-8 text-[#8F96A3]">
              My current focus is modern data platforms with Microsoft Fabric,
              SQL, Power BI, and Python — from ingestion and transformation
              through analytical modeling and reporting.
            </p>

            {/* Focus areas */}
            <div className="mt-10 border-t border-white/[0.07] pt-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#555C67]">
                Areas of focus
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 text-xs text-[#A7ADB7] transition-colors duration-200 hover:border-[#D4AF37]/25 hover:text-[#E5E7EB]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Background / approach */}
            <div className="mt-12 grid gap-8 border-t border-white/[0.07] pt-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#555C67]">
                  Background
                </p>

                <p className="mt-3 text-sm leading-6 text-[#B8BEC8]">
                  Industrial &amp; Production Engineering
                </p>

                <p className="mt-1 text-xs leading-5 text-[#6B7280]">
                  National Institute of Engineering, Mysore
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#555C67]">
                  Approach
                </p>

                <p className="mt-3 text-sm leading-6 text-[#B8BEC8]">
                  Business-first thinking combined with structured analytics
                  and engineering practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}