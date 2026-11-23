import Image from "next/image";

const links = {
  email: "mailto:sadyskiran@gmail.com",
  linkedin: "https://www.linkedin.com/in/oohsai/",
  github: "https://github.com/oohsai",
  resume:
    "https://drive.google.com/drive/folders/1mGgD9FWGboJ05m6LzT7Dxuiefs-fo46J?usp=drive_link",
};

const experience = [
  {
    role: "Analyst, Software Systems & Identity Infrastructure",
    company: "Deloitte USI",
    place: "Hyderabad",
    period: "Jan 2026 – Present",
    points: [
      "Monitor and operate an enterprise identity and access management platform for a large client, triaging jobs, requests and alerts.",
      "Run recurring operational and compliance reports under change-approval controls.",
      "Provide on-call production support, reading existing integration code to investigate issues and making changes when required.",
    ],
  },
  {
    role: "Software Engineer Intern, Full-Stack",
    company: "Wavemetrik Technologies",
    place: "Remote",
    period: "Nov 2024 – Apr 2025",
    points: [
      "Built Node.js backend services and React interfaces that connect real-time performance data to analytics.",
      "Designed performance-testing interfaces handling 50+ concurrent client streams.",
      "Added logging, monitoring and diagnostics to find production bottlenecks and speed up debugging.",
    ],
  },
];

const projects = [
  {
    name: "Distributed Workflow Automation Engine",
    blurb:
      "A platform for defining, scheduling and running multi-step asynchronous workflows. Background workers on Redis queues and Kafka handle retries and failure recovery, with idempotent execution so tasks stay safe under concurrent load and workflow state lives in a normalised PostgreSQL schema.",
    tags: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    name: "Floating-Point Unit on FPGA",
    blurb:
      "Final-year team project (group of three). An IEEE 754 single-precision floating-point unit in VHDL, synthesised in Vivado for a Xilinx Artix-7, including a proposed FFT-based mantissa multiplier benchmarked against Booth, Karatsuba and other multipliers on area, delay and power.",
    tags: ["VHDL", "Vivado", "Artix-7"],
  },
];

const skills = [
  {
    label: "Languages",
    items: "TypeScript, JavaScript, Java, Python, SQL, C++",
  },
  {
    label: "Backend & data",
    items: "Node.js, NestJS, React, Next.js, REST APIs, PostgreSQL, Redis, Kafka",
  },
  {
    label: "Cloud & tooling",
    items: "AWS, Docker, Kubernetes, CI/CD (Jenkins), Linux, Prometheus, ELK",
  },
  {
    label: "Domains",
    items:
      "Distributed systems, identity & access management, performance testing",
  },
];

const certifications = [
  "Oracle Cloud GenAI Certified Professional",
  "Java Master Level Certification",
  "Jenkins – CI/CD Certification",
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-14">
      <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4 text-sm"
        >
          <a href="#top" className="font-semibold">
            oohsai
          </a>
          <ul className="flex gap-5 text-muted">
            {["experience", "projects", "skills", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="capitalize transition-colors hover:text-fg"
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-2xl px-6">
        <section className="py-20 sm:py-28">
          <Image
            src="/profile.png"
            alt="Portrait of Sai Kiran Reddy"
            width={96}
            height={96}
            priority
            className="mb-8 h-24 w-24 rounded-full object-cover ring-1 ring-line"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Sai Kiran Reddy
          </h1>
          <p className="mt-4 text-xl text-muted sm:text-2xl">
            Software engineer building reliable backend and distributed systems.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            I work on identity infrastructure at Deloitte USI in Hyderabad, and
            enjoy hard technical problems: queues, retries, failure recovery
            and keeping systems observable when things go wrong.
          </p>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <ExternalLink href={links.github}>GitHub</ExternalLink>
            <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={links.resume}>Resume</ExternalLink>
            <ExternalLink href={links.email}>Email</ExternalLink>
          </p>
        </section>

        <Section id="experience" title="Experience">
          <div className="space-y-10">
            {experience.map((job) => (
              <article key={job.company}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="shrink-0 text-sm text-muted">{job.period}</p>
                </div>
                <p className="text-sm text-muted">
                  {job.company} · {job.place}
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            B.E. Electronics &amp; Telecommunication Engineering, Army Institute
            of Technology, Pune (2021–2025, 8.20 CGPA).
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-10">
            {projects.map((project) => (
              <article key={project.name}>
                <h3 className="font-semibold">{project.name}</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {project.blurb}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            More on <ExternalLink href={links.github}>GitHub</ExternalLink>.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="space-y-4">
            {skills.map((group) => (
              <div
                key={group.label}
                className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="font-medium">{group.label}</dt>
                <dd className="text-muted">{group.items}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mb-3 mt-10 font-medium">Certifications</h3>
          <ul className="list-disc space-y-1 pl-5 text-muted marker:text-accent">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Say hello.
          </p>
          <p className="mt-3 text-muted">
            The easiest way to reach me is email, at{" "}
            <ExternalLink href={links.email}>sadyskiran@gmail.com</ExternalLink>
            , or find me on{" "}
            <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink> and{" "}
            <ExternalLink href={links.github}>GitHub</ExternalLink>.
          </p>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Sady Sai Kiran Reddy
      </footer>
    </>
  );
}
