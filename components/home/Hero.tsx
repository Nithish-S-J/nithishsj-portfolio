import Button from "../ui/Button";
import Container from "../common/Container";
import WorkspaceRail from "../layout/WorkspaceRail";
const kpiCards = [
  { title: "Experience", value: "3+", subtitle: "Years", trend: "+1 Year", accent: "#118DFF" },
  { title: "Projects", value: "03", subtitle: "Enterprise", trend: "Active", accent: "#6B4FBB" },
  { title: "Certifications", value: "05+", subtitle: "Microsoft", trend: "Growing", accent: "#F2C811" },
  { title: "GitHub", value: "20+", subtitle: "Repositories", trend: "Updated", accent: "#33B6AF" },
];

const pipeline = [
  { label: "Bronze Lakehouse", color: "#6B4FBB" },
  { label: "Silver Lakehouse", color: "#6B4FBB" },
  { label: "Gold Warehouse", color: "#0F6CBD" },
  { label: "Semantic Model", color: "#F2C811" },
  { label: "Power BI", color: "#F2C811" },
];

const technologies = [
  "Microsoft Fabric", "Power BI", "Lakehouse", "Warehouse", "SQL",
  "DAX", "Python", "PySpark", "Azure", "Git", "GitHub", "Data Engineering",
];

/** Thin white sheen overlay — gives any card a glossy, light-catching top edge */
function Gloss() {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/70 via-white/10 to-transparent" />
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#F7F8FA] font-['Segoe_UI',system-ui,sans-serif]"
    >
      {/* Ambient background wash */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-[#118DFF]/[0.07] blur-3xl" />
        <div className="absolute top-[40%] -left-32 h-[420px] w-[420px] rounded-full bg-[#F2C811]/[0.08] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(17,141,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(17,141,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative flex">
        <WorkspaceRail />

        {/* ===== MAIN ===== */}
        <div className="min-w-0 flex-1">
          <Container>
            <div className="py-12">
              {/* Badge */}
              <div className="relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-[#118DFF]/25 bg-white/60 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                <Gloss />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#118DFF]" />
                <span className="relative text-xs font-medium uppercase tracking-[0.2em] text-[#0F6CBD]">
                  Microsoft Fabric • Enterprise Analytics Engineer
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-5xl font-semibold leading-tight text-[#201F1E] md:text-6xl">
                Building
                <span className="block bg-gradient-to-r from-[#0F6CBD] via-[#118DFF] to-[#F2C811] bg-clip-text text-transparent">
                  Enterprise Analytics
                </span>
                Platforms
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#605E5C]">
                Designing modern Microsoft Fabric analytics solutions using Lakehouse
                architecture, SQL Warehouses, Semantic Models and Power BI dashboards
                that transform raw enterprise data into executive decision intelligence.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#projects">Explore Projects</Button>
                <Button href="/resume" variant="secondary">Download Resume</Button>
              </div>

              {/* Pipeline chips */}
              <div className="mt-10 flex flex-wrap items-center gap-2">
                {pipeline.map((stage, i) => (
                  <div key={stage.label} className="flex items-center gap-2">
                    <div className="relative flex items-center gap-2 overflow-hidden rounded-md border border-[#E1DFDD] bg-white/70 px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                      <Gloss />
                      <span className="relative h-2 w-2 rounded-sm" style={{ backgroundColor: stage.color }} />
                      <span className="relative text-xs font-medium text-[#201F1E]">{stage.label}</span>
                    </div>
                    {i < pipeline.length - 1 && (
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12M12 6l4 4-4 4" stroke="#C8C6C4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Status cards */}
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                <div className="relative overflow-hidden rounded-xl border border-[#E1DFDD] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_28px_-12px_rgba(34,197,94,0.25)] transition-shadow hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-10px_rgba(34,197,94,0.3)]">
                  <Gloss />
                  <p className="relative text-xs font-semibold uppercase tracking-[0.15em] text-green-700">Status</p>
                  <h3 className="relative mt-2 text-lg font-semibold text-[#201F1E]">Available for Opportunities</h3>
                  <p className="relative mt-1 text-sm text-[#605E5C]">Data Engineering • Fabric • Power BI</p>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-[#E1DFDD] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_28px_-12px_rgba(17,141,255,0.25)] transition-shadow hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-10px_rgba(17,141,255,0.3)]">
                  <Gloss />
                  <p className="relative text-xs font-semibold uppercase tracking-[0.15em] text-[#0F6CBD]">Current Project</p>
                  <h3 className="relative mt-2 text-lg font-semibold text-[#201F1E]">AirOps360</h3>
                  <p className="relative mt-1 text-sm text-[#605E5C]">Enterprise Aviation Intelligence Platform</p>
                </div>
              </div>

              {/* KPI cards — glossy Power BI Card visuals */}
              <div className="mt-12">
                <h3 className="mb-4 text-base font-semibold text-[#201F1E]">Executive Overview</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {kpiCards.map((item) => (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-xl border border-[#E1DFDD] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_24px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_18px_32px_-12px_rgba(17,141,255,0.22)]"
                    >
                      <Gloss />
                      <span
                        className="absolute inset-x-0 top-0 h-[3px]"
                        style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
                      />
                      <div className="relative flex items-center justify-between">
                        <p className="text-xs font-medium uppercase tracking-widest text-[#A19F9D]">{item.title}</p>
                        <span
                          className="rounded px-1.5 py-0.5 text-[10px] font-medium"
                          style={{ backgroundColor: `${item.accent}18`, color: item.accent }}
                        >
                          {item.trend}
                        </span>
                      </div>
                      <h2 className="relative mt-4 text-4xl font-semibold text-[#201F1E]">{item.value}</h2>
                      <p className="relative mt-1 text-sm text-[#605E5C]">{item.subtitle}</p>
                      <div className="relative mt-3 h-1 w-full rounded-full bg-[#F3F2F1]">
                        <div
                          className="h-1 rounded-full transition-all duration-500"
                          style={{ width: "72%", backgroundColor: item.accent }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ===== Signature: live report canvas (glass) ===== */}
              <div className="mt-12 overflow-hidden rounded-2xl border border-[#E1DFDD] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-20px_rgba(17,141,255,0.18)]">
                <div className="relative flex items-center justify-between overflow-hidden border-b border-[#E1DFDD] bg-white/60 px-5 py-3 backdrop-blur-md">
                  <Gloss />
                  <div className="relative flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-sm bg-[#F2C811]" />
                    <span className="text-sm font-medium text-[#201F1E]">AirOps360 — Report.pbix</span>
                  </div>
                  <div className="relative flex items-center gap-4 text-[#A19F9D]">
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none"><path d="M4 14V6a2 2 0 012-2h8a2 2 0 012 2v8M8 18h4" stroke="currentColor" strokeWidth="1.5" /></svg>
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none"><circle cx="5" cy="10" r="1.6" fill="currentColor" /><circle cx="10" cy="10" r="1.6" fill="currentColor" /><circle cx="15" cy="10" r="1.6" fill="currentColor" /></svg>
                  </div>
                </div>

                <div className="grid gap-5 bg-[#FCFCFD] p-5 md:grid-cols-[1.3fr_1fr]">
                  {/* Bar chart */}
                  <div className="relative overflow-hidden rounded-lg border border-[#E1DFDD] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                    <Gloss />
                    <p className="relative mb-3 text-xs font-medium text-[#605E5C]">Flights Processed by Region</p>
                    <svg viewBox="0 0 300 120" className="relative w-full">
                      {[42, 78, 55, 95, 60, 88].map((h, i) => (
                        <rect
                          key={i}
                          x={i * 48 + 10}
                          y={110 - h}
                          width="30"
                          height={h}
                          rx="3"
                          fill={i === 3 ? "#F2C811" : "#118DFF"}
                          opacity={i === 3 ? 1 : 0.85}
                        />
                      ))}
                      <line x1="0" y1="110" x2="300" y2="110" stroke="#E1DFDD" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Gauge + matrix */}
                  <div className="flex flex-col gap-4">
                    <div className="relative flex items-center gap-4 overflow-hidden rounded-lg border border-[#E1DFDD] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                      <Gloss />
                      <div
                        className="relative h-16 w-16 shrink-0 rounded-full shadow-[0_2px_10px_rgba(17,141,255,0.25)]"
                        style={{ background: "conic-gradient(#118DFF 0% 82%, #F3F2F1 82% 100%)" }}
                      >
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#201F1E]">
                            82%
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <p className="text-xs text-[#A19F9D]">On-time Performance</p>
                        <p className="text-sm font-medium text-[#201F1E]">Target: 85%</p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-lg border border-[#E1DFDD] bg-white p-3 text-xs shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                      <Gloss />
                      <div className="relative flex justify-between border-b border-[#F3F2F1] pb-1.5 font-medium text-[#A19F9D]">
                        <span>Route</span><span>Delay</span>
                      </div>
                      {[["MAA–DEL", "4m"], ["BLR–BOM", "12m"], ["HYD–CCU", "2m"]].map(([r, d]) => (
                        <div key={r} className="relative flex justify-between border-b border-[#F3F2F1] py-1.5 text-[#201F1E] last:border-0">
                          <span>{r}</span><span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech tags footer */}
                <div className="flex flex-wrap gap-2 border-t border-[#E1DFDD] bg-white/60 px-5 py-3 backdrop-blur-md">
                  {technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#E1DFDD] bg-white px-2.5 py-1 text-[11px] text-[#605E5C] shadow-[0_1px_1px_rgba(0,0,0,0.03)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}