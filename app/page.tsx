import TypingText from "@/components/TypingText";
import NavButton from "@/components/NavButton";
import Link from "next/link";

const stats = [
  { value: "396", label: "US airports ranked" },
  { value: "11,000+", label: "job listings screened unattended" },
  { value: "164", label: "tests across both agents, in CI" },
  { value: "16", label: "merged open-source PRs" },
];

const featured = [
  {
    name: "Airport Investment Agent",
    blurb:
      "Tool-calling agent that ranks US airports by suppressed demand. An eval harness traces every number in an answer back to a tool result.",
    tech: "Python · FastAPI · Gemini · 102 tests",
    github: "https://github.com/DoriAlagem/airport-investment-agent",
    demo: "https://airport-investment-agent-kxld.onrender.com/",
  },
  {
    name: "AI-Powered Job Scanner",
    blurb:
      "Autonomous LLM pipeline: six job boards, twice a day, scored against a CV. Six months of unattended runs on the free tier.",
    tech: "Python · Groq · GitHub Actions · 62 tests",
    github: "https://github.com/DoriAlagem/job-scanner",
    demo: null,
  },
];

export default function Home() {
  return (
    <div className="flex-1 max-w-[1160px] w-full mx-auto px-6 flex flex-col">
      <section className="flex flex-wrap items-center gap-12 pt-20 pb-16">
        <div className="flex-[1_1_480px] min-w-0 flex flex-col gap-6">
          <TypingText text="software engineer · ai agents · llms · python" />
          <h1 className="font-heading font-bold text-5xl md:text-[58px] leading-[1.08] tracking-tight">
            I build AI agents that <span className="text-amber">show their work.</span>
          </h1>
          <p className="text-muted text-lg max-w-[54ch]">
            The model reasons and picks the tools; deterministic, tested code
            produces every number. M.Sc. CS student (Machine Learning &amp; Big
            Data), B.Sc. GPA 96.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-2">
            <NavButton href="/projects" variant="primary">
              View projects
            </NavButton>
            <NavButton href="/cv.pdf" download>
              Download CV
            </NavButton>
          </div>
        </div>

        <figure
          aria-label="Tool-call trace from the airport investment agent"
          className="flex-[1_1_380px] min-w-0 m-0 bg-surface border border-line rounded-xl overflow-hidden"
        >
          <figcaption className="flex items-center gap-2 px-4 py-3 border-b border-line font-mono text-xs text-faint">
            <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full border border-faint" />
            agent trace — airport-investment-agent
          </figcaption>
          <div className="p-5 font-mono text-[13px] leading-8 text-muted overflow-x-auto whitespace-nowrap">
            <div>
              <span className="text-faint">user ›</span> which New England airports are constrained?
            </div>
            <div>
              <span className="text-amber">tool ›</span> resolve_airports(&quot;New England&quot;)
            </div>
            <div>
              <span className="text-amber">tool ›</span> score_airport(&quot;BOS&quot;) · score_airport(&quot;PWM&quot;) · score_airport(&quot;MHT&quot;)
            </div>
            <div>
              <span className="text-ok">ok&nbsp;&nbsp; ›</span> BOS 79.6 — terminal-limited, high confidence
            </div>
            <div>
              <span className="text-faint">agent›</span> Boston Logan leads; every figure traced.
            </div>
          </div>
        </figure>
      </section>

      <section aria-label="Numbers" className="flex flex-wrap gap-4 py-7 border-y border-line">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex-[1_1_200px] min-w-0">
            <p className="font-heading font-bold text-[34px] leading-tight">{value}</p>
            <p className="font-mono text-xs text-faint">{label}</p>
          </div>
        ))}
      </section>

      <section aria-label="Featured work" className="flex flex-col gap-6 py-16">
        <h2 className="font-mono text-[13px] tracking-[0.14em] text-faint">FEATURED WORK</h2>
        {featured.map(({ name, blurb, tech, github, demo }) => (
          <article
            key={name}
            className="flex flex-wrap items-baseline gap-6 bg-surface border border-line rounded-xl px-8 py-7 hover:border-amber/40 transition-colors"
          >
            <div className="flex-[2_1_380px] min-w-0">
              <h3 className="font-heading font-bold text-2xl mb-2">{name}</h3>
              <p className="text-muted text-[15px] mb-3">{blurb}</p>
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
            </div>
            <p className="flex-[1_1_200px] min-w-0 font-mono text-xs text-faint md:text-right">
              {tech}
            </p>
          </article>
        ))}
      </section>

      <section className="flex flex-wrap items-center justify-between gap-6 py-10 mb-4 border-t border-line">
        <div className="flex-[1_1_380px] min-w-0">
          <h2 className="font-heading font-bold text-[26px] mb-1.5">
            Don&apos;t take my word for it.
          </h2>
          <p className="text-muted text-[15px]">
            Ask the chat in the corner about me — it answers only from the record
            above.
          </p>
        </div>
        <Link href="/contact" className="font-mono text-[13px] text-amber hover:brightness-110">
          or just say hi →
        </Link>
      </section>
    </div>
  );
}
