import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Dor Alagem",
  description:
    "Selected projects by Dor Alagem — AI agents, LLM automation, cloud, IoT, full-stack web development, and more.",
};

const featured = [
  {
    name: "Airport Investment Agent",
    tag: "FEATURED · LIVE DEMO",
    blurb:
      "A tool-calling AI agent that ranks 396 US airports by suppressed demand for investors — a ReAct-style loop over six tools, grounded in a deterministic scoring engine so the LLM never produces a figure. ETL over federal aviation data, an eval harness that traces every number to a tool result, and a hands-free English/Hebrew voice mode.",
    metrics: [
      { value: "390 MB → 7.9 MB", label: "BTS + FAA data, condensed" },
      { value: "102", label: "tests in CI" },
      { value: "29", label: "architecture decision records" },
    ],
    tech: "Python · FastAPI · Gemini · SQLite · DuckDB",
    github: "https://github.com/DoriAlagem/airport-investment-agent",
    demo: "https://airport-investment-agent-kxld.onrender.com/",
  },
  {
    name: "AI-Powered Job Scanner",
    tag: "FEATURED · RUNS TWICE DAILY",
    blurb:
      "An autonomous LLM pipeline that scrapes six job sources, scores each listing against a parsed CV with structured JSON output, and emails a ranked digest. Batched scoring behind a rule-based pre-filter keeps every run inside the free tier.",
    metrics: [
      { value: "11,000+", label: "listings screened, 6 months unattended" },
      { value: "5x", label: "fewer LLM calls via batching" },
      { value: "62", label: "tests, incl. end-to-end" },
    ],
    tech: "Python · Groq · BeautifulSoup · GitHub Actions",
    github: "https://github.com/DoriAlagem/job-scanner",
    demo: null,
  },
];

const more = [
  {
    name: "Pollarsteps",
    description:
      "Full-stack travel tracker — interactive map, photos, AI-powered recommendations, JWT auth. Next.js, FastAPI, Docker.",
    link: "https://github.com/DoriAlagem/Pollarsteps",
  },
  {
    name: "MailNet",
    description:
      "Serverless mailing lists on AWS — API Gateway → Lambda → DynamoDB & SQS → SES, deployed with AWS SAM.",
    link: "https://github.com/DoriAlagem/AWS-Project",
  },
  {
    name: "Expense Tracker API",
    description:
      "Microservices REST API — Node.js, Express, MongoDB Atlas across four independent services, tested with pytest.",
    link: "https://github.com/OfekDanny/backend-final-project-main",
  },
  {
    name: "Smart Irrigation",
    description:
      "IoT soil-moisture monitor over MQTT with a live Streamlit dashboard and automatic irrigation alerts.",
    link: "https://github.com/DoriAlagem/IOT_SMART_HOME",
  },
  {
    name: "A* Path Visualizer",
    description:
      "Robot navigation through obstacle fields — place start and goal, watch the algorithm explore in real time.",
    link: "https://github.com/DoriAlagem/AV-course",
  },
  {
    name: "This Portfolio",
    description:
      "Next.js 16 + Tailwind v4, with a grounded \"ask about dor\" chat agent that answers only from the facts on this site.",
    link: "https://github.com/DoriAlagem/aidd",
  },
];

export default function Projects() {
  return (
    <div className="flex-1 max-w-[1160px] w-full mx-auto px-6 flex flex-col">
      <section className="pt-16 pb-10">
        <p className="font-mono text-[13px] tracking-[0.14em] text-faint mb-3">SELECTED WORK</p>
        <h1 className="font-heading font-bold text-5xl tracking-tight">Projects</h1>
      </section>

      <section aria-label="Featured projects" className="flex flex-col gap-6 pb-12">
        {featured.map(({ name, tag, blurb, metrics, tech, github, demo }) => (
          <article
            key={name}
            className="bg-surface border border-line rounded-xl p-8 flex flex-col gap-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-heading font-bold text-[28px]">{name}</h2>
              <p className="font-mono text-xs text-amber">{tag}</p>
            </div>
            <p className="text-muted text-[15px] max-w-[72ch]">{blurb}</p>
            <div className="flex flex-wrap items-end gap-7 border-t border-line pt-4.5">
              {metrics.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-heading font-bold text-[22px] leading-tight">{value}</p>
                  <p className="font-mono text-[11px] text-faint">{label}</p>
                </div>
              ))}
              <p className="ml-auto font-mono text-xs text-faint">{tech}</p>
            </div>
            <div className="flex gap-5 font-mono text-[13px]">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:brightness-110"
              >
                github ↗
              </a>
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber hover:brightness-110"
                >
                  live demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      <section aria-label="More projects" className="flex flex-col gap-5 pb-14">
        <h2 className="font-mono text-[13px] tracking-[0.14em] text-faint">MORE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {more.map(({ name, description, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-2 border border-line rounded-[10px] p-5.5 hover:border-amber/40 transition-colors"
            >
              <h3 className="font-heading font-bold text-[17px] mb-1.5">{name}</h3>
              <p className="text-muted text-[13.5px]">{description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
