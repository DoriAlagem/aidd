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
    "LLM Agents",
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
    <div className="flex-1 min-h-screen flex flex-col justify-center p-8 max-w-3xl mx-auto gap-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.1)_0%,_transparent_60%)] pointer-events-none"></div>
      <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
        <Image
          src="/profile.jpg"
          alt="Dor Alagem"
          width={124}
          height={124}
          priority
          className="rounded-full ring-2 ring-cyan-400 shrink-0"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <div className="h-1 w-16 bg-cyan-400 rounded-full mt-3 mb-4 mx-auto sm:mx-0"></div>
          <p className="text-zinc-300">
            M.Sc. Computer Science student (Machine Learning &amp; Big Data) at
            The Open University of Israel, with a B.Sc. from HIT. I build AI
            agents and automation pipelines in Python, keeping the LLM grounded
            in deterministic, tested code, and I ship them end to end, from
            data pipeline to live deployment.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full">
        <section className="flex flex-col gap-4">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Education
          </h2>
          <div className="relative flex flex-col gap-6 border-l border-neutral-700 pl-6">
            <div className="relative">
              <div className="absolute -left-[1.65rem] top-1 h-3 w-3 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400"></div>
              <p className="text-white font-semibold">M.Sc. Computer Science (Machine Learning &amp; Big Data) — The Open University of Israel</p>
              <p className="text-zinc-400 text-sm">Oct 2026 – Present</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[1.65rem] top-1 h-3 w-3 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400"></div>
              <p className="text-white font-semibold">B.Sc. Computer Science — HIT</p>
              <p className="text-zinc-400 text-sm">2024 – 2026 · GPA 96 · Dean&apos;s List</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-neutral-800 text-zinc-300 text-sm px-3 py-1 rounded-full border border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Currently Learning
          </h2>
          <p className="text-zinc-300">
            AI agents and LLM engineering: agent evaluation, context
            engineering, and tool interoperability, alongside my M.Sc. in
            machine learning.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Interests
          </h2>
          <p className="text-zinc-300">
            Gym, swimming, and travelling the world whenever I get the chance.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Looking For
          </h2>
          <p className="text-zinc-300">
            A role in AI agents and LLM engineering. Open to student positions
            and internships.
          </p>
        </section>
      </div>
    </div>
  );
}
