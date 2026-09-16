import Link from "next/link";
import Container from "@/components/common/Container";

const technologies = [
  "Microsoft Fabric",
  "PySpark",
  "Lakehouse",
  "Warehouse",
  "SQL",
  "Power BI",
];

const architectureLayers = [
  {
    number: "01",
    title: "Data Sources",
    description:
      "OpenFlights, BTS aviation datasets, and operational data sources.",
  },
  {
    number: "02",
    title: "Bronze",
    description:
      "Raw ingestion layer preserving source data for downstream processing.",
  },
  {
    number: "03",
    title: "Silver",
    description:
      "Cleaned, standardized, and conformed analytical datasets.",
  },
  {
    number: "04",
    title: "Gold",
    description:
      "Business-ready dimensions, facts, and analytical SQL views.",
  },
  {
    number: "05",
    title: "Power BI",
    description:
      "Semantic modeling and decision-ready business intelligence.",
  },
];

const datasets = [
  "Airline operations",
  "Airport operations",
  "Flight activity",
  "Route reliability",
  "Airline traffic",
  "Fuel consumption",
];

const analyticalViews = [
  "Airline fuel — monthly",
  "Airline traffic — monthly",
  "Airport capacity",
  "Airport operations",
  "Flight airline — daily",
  "Flight airport — daily",
  "Route reliability",
];

export default function AirOps360Page() {
  return (
    <main className="min-h-screen bg-[#08090C] text-[#F5F5F0]">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.07] py-7">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#737B87] transition-colors hover:text-[#D4AF37]"
          >
            <span>←</span>
            Back to portfolio
          </Link>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#4F5661]">
            Case Study / 01
          </span>
        </div>

        {/* Hero */}
        <section className="border-b border-white/[0.07] py-20 sm:py-28">
          <div className="max-w-5xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
              Featured Project · Data &amp; Analytics
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
              AirOps360
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-[#A0A7B1] sm:text-2xl sm:leading-10">
              Enterprise Aviation Decision Intelligence Platform
            </p>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#7F8792] sm:text-lg">
              A modern aviation analytics platform designed to bring
              operational, flight, airport, airline, route, and fuel data into
              a structured analytical environment using Microsoft Fabric,
              PySpark, SQL, and Power BI.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3.5 py-2 text-[10px] text-[#9299A4]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 grid border-y border-white/[0.07] sm:grid-cols-3">
            <div className="border-b border-white/[0.07] py-6 sm:border-b-0 sm:border-r sm:pr-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#4F5661]">
                Architecture
              </p>
              <p className="mt-2 text-sm text-[#B5BBC3]">
                Medallion Architecture
              </p>
            </div>

            <div className="border-b border-white/[0.07] py-6 sm:border-b-0 sm:border-r sm:px-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#4F5661]">
                Platform
              </p>
              <p className="mt-2 text-sm text-[#B5BBC3]">
                Microsoft Fabric
              </p>
            </div>

            <div className="py-6 sm:pl-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#4F5661]">
                Analytics
              </p>
              <p className="mt-2 text-sm text-[#B5BBC3]">
                SQL · Semantic Model · Power BI
              </p>
            </div>
          </div>
        </section>

        {/* Business Problem */}
        <section className="grid gap-12 border-b border-white/[0.07] py-20 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              01 / Business Problem
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              Turning fragmented aviation data into one analytical platform.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-9 text-[#D0D4D9]">
              Aviation analytics requires information from multiple operational
              domains. Flight activity, airline traffic, airport operations,
              route information, and fuel data each provide a different view
              of the business.
            </p>

            <p className="mt-7 text-base leading-8 text-[#858D98]">
              The objective of AirOps360 was to structure these datasets into a
              governed analytical platform where source data could be
              ingested, transformed, conformed, modeled, and consumed through
              business intelligence.
            </p>

            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              {datasets.map((dataset) => (
                <div
                  key={dataset}
                  className="bg-[#0C0F14] px-5 py-4 text-sm text-[#9AA1AB]"
                >
                  {dataset}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="border-b border-white/[0.07] py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                02 / Architecture
              </p>

              <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                From raw sources to decision-ready analytics.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#737B87]">
                The platform follows a layered data architecture so ingestion,
                transformation, modeling, and analytics remain clearly
                separated.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-6 left-[7px] top-6 w-px bg-white/[0.08]" />

              <div className="space-y-3">
                {architectureLayers.map((layer, index) => (
                  <div
                    key={layer.number}
                    className="relative grid gap-5 rounded-xl border border-white/[0.08] bg-[#0C1015] p-5 pl-8 sm:grid-cols-[70px_1fr] sm:p-6 sm:pl-8"
                  >
                    <div className="absolute left-0 top-7 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#D4AF37]/35 bg-[#08090C]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.15em] text-[#4F5661]">
                      {layer.number}
                    </span>

                    <div>
                      <h3 className="text-base font-semibold text-[#D9DCE0]">
                        {layer.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#737B87]">
                        {layer.description}
                      </p>
                    </div>

                    {index < architectureLayers.length - 1 && (
                      <span className="absolute -bottom-3 left-[3px] z-10 hidden h-6 w-px bg-[#D4AF37]/20 sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="grid gap-12 border-b border-white/[0.07] py-20 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              03 / Tech Stack
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              Built around the Microsoft data ecosystem.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {[
              {
                title: "Microsoft Fabric",
                text: "Lakehouse, Warehouse, Data Engineering, and analytics workloads.",
              },
              {
                title: "PySpark",
                text: "Data ingestion, transformation, standardization, and processing.",
              },
              {
                title: "SQL",
                text: "Analytical modeling, validation, views, and business-ready queries.",
              },
              {
                title: "Power BI",
                text: "Semantic modeling, measures, visualization, and decision support.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0B0E13] p-7 sm:p-8"
              >
                <h3 className="text-xl font-semibold text-[#E4E6E9]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#737B87]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation */}
        <section className="border-b border-white/[0.07] py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                04 / Implementation
              </p>

              <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                Engineering the analytical foundation.
              </h2>
            </div>

            <div className="space-y-10">
              {[
                {
                  number: "01",
                  title: "Ingestion",
                  text: "Source datasets are brought into the platform through the ingestion layer and retained as raw data.",
                },
                {
                  number: "02",
                  title: "Transformation",
                  text: "PySpark and data engineering processes standardize source structures, clean data, and prepare conformed datasets.",
                },
                {
                  number: "03",
                  title: "Dimensional Modeling",
                  text: "Business entities and analytical events are organized into dimensions and fact tables for downstream analysis.",
                },
                {
                  number: "04",
                  title: "Analytical SQL",
                  text: "SQL views aggregate operational information into reusable analytical datasets for reporting and semantic modeling.",
                },
                {
                  number: "05",
                  title: "Business Intelligence",
                  text: "Power BI consumes the modeled data through a semantic layer to support analytical reporting and decision-making.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 sm:grid-cols-[60px_1fr]"
                >
                  <span className="font-mono text-[9px] tracking-[0.15em] text-[#4F5661]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-[#D9DCE0]">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[#7B838E]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytical Layer */}
        <section className="grid gap-12 border-b border-white/[0.07] py-20 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              05 / Analytical Layer
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              Reusable analytical views.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#737B87]">
              The analytical SQL layer provides reusable datasets for common
              operational and performance analysis.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {analyticalViews.map((view, index) => (
              <div
                key={view}
                className="bg-[#0B0E13] p-6"
              >
                <span className="font-mono text-[8px] tracking-[0.14em] text-[#4F5661]">
                  VIEW 0{index + 1}
                </span>

                <p className="mt-3 text-sm text-[#B6BBC2]">{view}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Visual */}
        <section className="border-b border-white/[0.07] py-20 sm:py-24">
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0D11]">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#505862]">
                  AirOps360
                </p>
                <p className="mt-1 text-sm text-[#AEB4BC]">
                  End-to-end data platform
                </p>
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#4F5661]">
                Conceptual architecture
              </span>
            </div>

            <div className="overflow-x-auto p-8 sm:p-12">
              <div className="mx-auto flex min-w-[760px] max-w-5xl items-center justify-between gap-5">
                <div className="w-40 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#59616C]">
                    Sources
                  </p>
                  <p className="mt-3 text-sm text-[#C4C8CE]">
                    Aviation Data
                  </p>
                </div>

                <div className="h-px flex-1 bg-[#D4AF37]/25" />

                <div className="w-44 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.035] p-5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#A99152]">
                    Engineering
                  </p>
                  <p className="mt-3 text-sm font-medium text-[#D4D7DB]">
                    Fabric Lakehouse
                  </p>
                </div>

                <div className="h-px flex-1 bg-[#D4AF37]/25" />

                <div className="w-40 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#59616C]">
                    Modeling
                  </p>
                  <p className="mt-3 text-sm text-[#C4C8CE]">
                    Warehouse
                  </p>
                </div>

                <div className="h-px flex-1 bg-[#3BA7A0]/25" />

                <div className="w-40 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#59616C]">
                    Analytics
                  </p>
                  <p className="mt-3 text-sm text-[#C4C8CE]">
                    Power BI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="grid gap-12 border-b border-white/[0.07] py-20 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              06 / Challenges
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              Conforming data across aviation sources.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-[#8B929D]">
              One of the important engineering challenges was ensuring that
              airline information remained consistent across different source
              systems.
            </p>

            <p className="mt-6 text-base leading-8 text-[#8B929D]">
              Source datasets can represent the same business entity using
              different identifiers and structures. The platform therefore
              required data conformance and validation before information
              could reliably flow into the analytical model.
            </p>

            <div className="mt-10 border-l border-[#D4AF37]/30 pl-6">
              <p className="text-sm leading-7 text-[#AEB4BC]">
                The resulting model separates source ingestion from analytical
                consumption, making the downstream reporting layer easier to
                validate and extend.
              </p>
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section className="grid gap-12 border-b border-white/[0.07] py-20 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
              07 / Lessons Learned
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              Build the foundation before the dashboard.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Data quality matters",
                text: "Analytical reporting is only as reliable as the conformance and validation behind the model.",
              },
              {
                title: "Model for reuse",
                text: "Dimensions, facts, and analytical views provide a foundation that can support multiple reporting scenarios.",
              },
              {
                title: "Separate the layers",
                text: "Keeping ingestion, transformation, modeling, and consumption distinct makes the platform easier to reason about.",
              },
              {
                title: "Business context first",
                text: "Technical architecture becomes more useful when it is connected to the questions the business needs to answer.",
              },
            ].map((lesson) => (
              <div
                key={lesson.title}
                className="border-t border-white/[0.08] pt-5"
              >
                <h3 className="text-base font-semibold text-[#D6D9DD]">
                  {lesson.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#737B87]">
                  {lesson.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 sm:py-24">
          <div className="flex flex-col gap-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#4F5661]">
                Explore the project
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[#E7E8EA]">
                AirOps360 on GitHub
              </h2>

              <p className="mt-2 text-sm text-[#737B87]">
                Explore the implementation, notebooks, SQL, and project
                documentation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Nithish-S-J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#F3F2EC] px-5 py-3 text-sm font-semibold text-[#111214] transition-colors hover:bg-[#D4AF37]"
              >
                GitHub
                <span>↗</span>
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-md border border-white/[0.1] px-5 py-3 text-sm text-[#B8BEC8] transition-colors hover:border-white/[0.2] hover:text-white"
              >
                Back to portfolio
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}