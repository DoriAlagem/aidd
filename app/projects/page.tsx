import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Dor Alagem",
  description:
    "Selected projects by Dor Alagem — AI agents, LLM automation, cloud, IoT, full-stack web development, and more.",
};

const projects = [
  {
    name: "Airport Investment Agent",
    description:
      "Tool-calling AI agent that ranks 396 US airports by suppressed demand for investors. A ReAct-style loop over six tools, grounded in a deterministic scoring engine so the LLM never produces a figure. Includes an eval harness that traces every number back to a tool result, an ETL pipeline over federal aviation data, English/Hebrew voice, and 102 tests in CI. Python, FastAPI, Gemini.",
    link: "https://github.com/DoriAlagem/airport-investment-agent",
  },
  {
    name: "AI-Powered Job Scanner",
    description:
      "Autonomous LLM pipeline that scrapes six job sources twice daily, scores each listing against a CV with structured JSON output, and emails a ranked digest. Has screened 11,000+ listings unattended; batched scoring cuts LLM calls 5x. 62 tests, runs serverless on GitHub Actions.",
    link: "https://github.com/DoriAlagem/job-scanner",
  },
  {
    name: "Smart Irrigation System",
    description:
      "IoT course final project. Monitors soil moisture via MQTT and triggers irrigation alerts automatically. Built a live Streamlit dashboard to track moisture history in real time.",
    link: "https://github.com/DoriAlagem/IOT_SMART_HOME",
  },
  {
    name: "A* Path Planning Visualizer",
    description:
      "Implements the A* algorithm for robot navigation through obstacle-filled environments. Includes an interactive GUI where you can place start/goal points and watch the algorithm explore in real time.",
    link: "https://github.com/DoriAlagem/AV-course",
  },
  {
    name: "Pollarsteps",
    description:
      "Full-stack travel tracking app. Add locations on an interactive map, attach photos, get AI-powered recommendations, and share trips with friends. Built with Next.js, FastAPI, Docker, and JWT auth.",
    link: "https://github.com/DoriAlagem/Pollarsteps",
  },
  {
    name: "MailNet",
    description:
      "Serverless mailing list platform on AWS. Users subscribe to groups and admins broadcast emails through an event-driven pipeline: API Gateway → Lambda → DynamoDB & SQS → SES. Deployed with AWS SAM.",
    link: "https://github.com/DoriAlagem/AWS-Project",
  },
  {
    name: "Expense Tracker API",
    description:
      "Microservices-based REST API for tracking expenses. Create users, log costs by category, and generate monthly reports. Built with Node.js, Express, and MongoDB Atlas across four independent services, tested with pytest and deployed on Render.",
    link: "https://github.com/OfekDanny/backend-final-project-main",
  },
  {
    name: "This Portfolio",
    description:
      "Built from scratch with Next.js 16 and Tailwind CSS v4. My first web dev project — designed and coded while learning the fundamentals.",
    link: "https://github.com/DoriAlagem/aidd",
  },
];

export default function Projects() {
  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center gap-4 p-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.1)_0%,_transparent_60%)] pointer-events-none"></div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <div className="h-1 w-16 bg-cyan-400 rounded-full mt-3 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-neutral-700 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-950/50 transition-all"
          >
            <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-2">
              {project.name}
            </h2>
            <p className="text-zinc-300 text-sm">{project.description}</p>
            <a
              href={project.link}
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-mono mt-3 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              view on github →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
