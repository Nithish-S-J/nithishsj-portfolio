import Button from "../ui/Button";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-[#09090B] pt-28 text-white">
      <Container>
        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-slate-400 backdrop-blur">
            Enterprise • Analytics • Engineering
          </p>

          {/* Main Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Building Enterprise
            <br />
            Analytics Platforms.
          </h1>

          {/* Name */}
          <h2 className="mt-8 text-xl font-medium text-slate-300 md:text-2xl">
            Hi, I'm{" "}
            <span className="font-semibold text-white">
              Nithish Kumar S J
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
            Enterprise Analytics Engineer specializing in
            <span className="text-white"> Microsoft Fabric</span>,
            <span className="text-white"> SQL</span>,
            <span className="text-white"> Power BI</span> and
            <span className="text-white"> Python</span>.
            <br />
            I design scalable enterprise data platforms that transform
            complex business data into actionable insights.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button href="/projects">
              View Projects
            </Button>

            <Button
              href="/resume"
              variant="secondary"
            >
              Download Resume
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">

            <div>
              <h3 className="text-3xl font-bold text-white">547K+</h3>
              <p className="mt-2 text-sm text-slate-400">
                Flights Processed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">3</h3>
              <p className="mt-2 text-sm text-slate-400">
                Enterprise Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">4+</h3>
              <p className="mt-2 text-sm text-slate-400">
                Core Technologies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100+</h3>
              <p className="mt-2 text-sm text-slate-400">
                SQL Scenarios
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}