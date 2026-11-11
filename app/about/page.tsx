import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Dor Alagem",
  description:
    "M.Sc. Computer Science student at The Open University of Israel. Builds AI agents and automation pipelines in Python.",
};

export default function About() {
  const skills = [
    "Python",
    "JavaScript",
    "C",
    "SQL",
    "AI Agents",
    "Tool Calling",
    "RAG",
    "Context Engineering",
    "Evals",
    "Guardrails",
    "Prompt Engineering",
    "FastAPI",
    "Pytest",
    "GitHub Actions",
    "Docker",
    "Data Structures",
    "Algorithms",
    "AWS Lambda",
    "DynamoDB",
    "API Gateway",
    "SQS",
    "SES",
    "AWS SAM",
    "Serverless Architecture",
    "CloudFormation",
  ];

  return (
    <div className="flex-1 max-w-[860px] w-full mx-auto px-6 flex flex-col gap-12 py-16">
      <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
        <Image
          src="/profile.jpg"
          alt="Dor Alagem"
          width={124}
          height={124}
          priority
          className="rounded-full ring-1 ring-line shrink-0"
        />
        <div className="flex-1">
          <p className="font-mono text-[13px] tracking-[0.14em] text-faint mb-2">ABOUT</p>
          <h1 className="font-heading font-bold text-4xl tracking-tight">Dor Alagem</h1>
          <p className="text-muted mt-4">
            M.Sc. Computer Science student (Machine Learning &amp; Big Data) at
            The Open University of Israel, with a B.Sc. from HIT. I build AI
            agents and automation pipelines in Python, keeping the LLM grounded
            in deterministic, tested code, and I ship them end to end, from
            data pipeline to live deployment.
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-[13px] tracking-[0.14em] text-faint">EDUCATION</h2>
        <div className="relative flex flex-col gap-6 border-l border-line pl-6">
          <div className="relative">
            <div className="absolute -left-[1.72rem] top-1.5 h-3 w-3 rounded-full bg-amber"></div>
            <p className="font-heading font-bold">
              M.Sc. in Computer Science (Machine Learning &amp; Big Data) — The Open University of Israel
            </p>
            <p className="text-faint font-mono text-[13px] mt-0.5">Oct 2026 – Present</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[1.72rem] top-1.5 h-3 w-3 rounded-full border border-amber bg-ink"></div>
            <p className="font-heading font-bold">B.Sc. in Computer Science — HIT</p>
            <p className="text-faint font-mono text-[13px] mt-0.5">
              2024 – 2026 · GPA 96 · Dean&apos;s List
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-mono text-[13px] tracking-[0.14em] text-faint">SKILLS</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-surface text-muted text-sm px-3 py-1 rounded-md border border-line"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-mono text-[13px] tracking-[0.14em] text-faint">CURRENTLY LEARNING</h2>
        <p className="text-muted">
          AI agents and LLM engineering: agent evaluation, context engineering,
          and tool interoperability, alongside my M.Sc. in machine learning.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-mono text-[13px] tracking-[0.14em] text-faint">INTERESTS</h2>
        <p className="text-muted">
          Gym, swimming, and travelling the world whenever I get the chance.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-mono text-[13px] tracking-[0.14em] text-faint">LOOKING FOR</h2>
        <p className="text-muted">
          A role in AI agents and LLM engineering. Open to student positions and
          internships.
        </p>
      </section>
    </div>
  );
}
