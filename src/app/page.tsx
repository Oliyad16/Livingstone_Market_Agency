import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white tracking-tight flex items-center gap-3">
          <span className="relative flex w-10 h-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/10 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Livingstone Solutions"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
          </span>
          <span className="hidden sm:inline">Livingstone</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/60">
          <a href="#pillars" className="hover:text-white transition-colors">Growth Systems</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#approach" className="hover:text-white transition-colors">Approach</a>
          <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
        >
          Scale Your Growth →
        </a>
      </div>
    </nav>
  );
}

function Positioning() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-zinc-950/60 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,103,232,0.18),transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-wider text-[#E8B84F]">
          — Our Positioning
        </p>
        <p className="text-2xl font-light leading-relaxed text-white md:text-4xl md:leading-[1.25]">
          Livingstone is an <span className="font-medium">AI-powered growth firm</span> combining software,
          automation, and marketing to make businesses{" "}
          <span className="gradient-text font-medium">visible, scalable, and profitable</span>{" "}
          — across the internet and AI platforms.
        </p>
        <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-3 text-sm font-medium text-white/70">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Engineered Growth
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Powered by AI
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Build → Visibility → Revenue
          </span>
        </div>
      </div>
    </section>
  );
}

const outcomes = [
  { value: "4.2x", label: "Avg. pipeline lift in 90 days" },
  { value: "-48%", label: "Reduction in cost per qualified lead" },
  { value: "24/7", label: "AI agents working on your funnel" },
  { value: "100%", label: "Done-for-you growth systems" },
];

function OutcomesStrip() {
  return (
    <section className="relative bg-black py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-4">
          {outcomes.map((item) => (
            <div
              key={item.label}
              className="group relative bg-black p-10 text-center transition-colors hover:bg-white/[0.03]"
            >
              <p className="gradient-text text-5xl font-black tracking-tight md:text-6xl">
                {item.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    num: "01",
    title: "Visibility + Intelligence",
    description: "SEO, GEO, and Data Systems. We build continuous optimization loops that ensure you get discovered and improve over time.",
  },
  {
    num: "02",
    title: "Demand Generation",
    description: "Lead Acquisition Systems. Funnels, landing pages, and content-driven acquisition for a predictable flow of qualified leads.",
  },
  {
    num: "03",
    title: "Revenue Conversion",
    description: "Turning Leads into Customers. Cold outreach, email sequences, and AI calling systems to ensure leads become revenue, not just data.",
  },
  {
    num: "04",
    title: "Paid Growth & Creative",
    description: "Ads & Scalable Distribution. Paid campaigns and AI/UGC video production for highly scalable, controllable growth.",
  },
  {
    num: "05",
    title: "Authority & Influence",
    description: "Trust & Brand Expansion. Influencer marketing, brand ambassadors, and strategic partnerships for increased credibility.",
  },
];

function GrowthPillars() {
  return (
    <section id="pillars" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-[#E8B84F] font-medium text-sm tracking-wider uppercase mb-4">
              — The 5 Core Pillars
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight max-w-2xl">
              A full-stack growth engine.
            </h2>
          </div>
          <p className="text-gray-400 md:text-right max-w-sm text-lg">
            Where technology and marketing are integrated, not separate. Pick what you need—or engage us for the whole stack.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-10 bg-black hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4A7BB7]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
              <p className="text-[#E8B84F] text-sm font-mono mb-6">{pillar.num}</p>
              <h3 className="text-2xl font-bold text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StrategicAdvantage() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#E8B84F] font-medium text-sm tracking-wider uppercase mb-4">
              — The Livingstone Advantage
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
              Tech + Marketing. <br/>Finally Combined.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Most agencies only do marketing and lack technical depth. Most dev firms build products but don&apos;t drive growth.
            </p>
            <div className="h-px bg-white/10 w-full my-6"></div>
            <p className="text-white text-xl font-medium leading-relaxed">
              Livingstone does both. We build the systems (websites, AI agents, platforms) <span className="italic">and</span> drive the growth (marketing, leads, revenue).
            </p>
          </div>
          <div className="bg-black border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#E8B84F]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-8">Who We Partner With</h3>
            <ul className="space-y-6">
              {[
                "Startups scaling fast",
                "SaaS & Tech companies",
                "Enterprise businesses entering the AI era",
                "Founders building personal authority",
                "Companies needing done-for-you growth systems"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-gradient flex items-center justify-center shadow-[0_0_12px_rgba(232,184,79,0.4)]">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    client: "Meridian Health",
    category: "Brand + Campaign",
    title: "Reimagined a telehealth leader's position in a crowded market.",
    result: "+218% branded search",
    color: "from-purple-600 to-pink-600",
  },
  {
    client: "Northwind Logistics",
    category: "Performance + Web",
    title: "Redesigned the site and scaled paid search to cut CAC in half.",
    result: "-52% CAC",
    color: "from-orange-500 to-red-600",
  },
  {
    client: "Canopy Foods",
    category: "Content + SEO",
    title: "Built an editorial engine that now drives 40% of all pipeline.",
    result: "+340% organic",
    color: "from-emerald-500 to-teal-600",
  },
];

function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-[#E8B84F] font-medium text-sm tracking-wider uppercase mb-4">
              — Selected Work
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight max-w-2xl">
              Real clients. Real results.
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.client}
              className="group relative overflow-hidden rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="relative p-10 md:p-14 grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-3">
                  <p className="text-[#E8B84F] text-xs tracking-wider uppercase mb-2">
                    {project.category}
                  </p>
                  <p className="text-white font-bold text-xl">{project.client}</p>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="text-4xl md:text-5xl font-black text-[#E8B84F]">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      description:
        "We audit your funnel, market, ICP, and competitive landscape — then map the exact leverage points where growth is leaking or waiting to be unlocked.",
      deliverables: ["Growth audit", "ICP & positioning map", "Leverage-point report"],
    },
    {
      num: "02",
      title: "Design",
      description:
        "We architect the systems — site, funnels, SEO/GEO, AI agents, paid creative, outreach sequences — and align them into one revenue operating system.",
      deliverables: ["Systems blueprint", "Messaging & creative", "Automation & AI stack"],
    },
    {
      num: "03",
      title: "Deploy",
      description:
        "We ship, measure, iterate. Weekly reporting, continuous optimization loops, and compounding gains — so growth keeps increasing week over week.",
      deliverables: ["Launch + instrumentation", "Weekly growth reviews", "Optimization loops"],
    },
  ];
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-gradient-to-b from-black to-zinc-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(250,147,250,0.10),transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#E8B84F]">
            — Our Approach
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Discover. Design. Deploy.
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            A simple, repeatable operating system — engineered for outsized, compounding results.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-[#4A7BB7]/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="gradient-text mb-6 text-6xl font-black">{step.num}</p>
              <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>
              <p className="font-light leading-relaxed text-white/70">
                {step.description}
              </p>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                  You&apos;ll get
                </p>
                <ul className="space-y-2">
                  {step.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#E8B84F]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ecosystem = [
  {
    name: "Livingstone Solution",
    tag: "Flagship",
    focus: "Enterprise, startups, and the AI Academy — our original software and AI practice.",
    url: "https://thelivingstonesolution.com",
    audience: "Enterprise & Startups",
    highlight: true,
  },
  {
    name: "Livingstone Government",
    tag: "Public Sector",
    focus: "Federal and state engagements. 508-compliant, mission-critical systems and delivery.",
    url: "https://solution.thelivingstonefoundation.com",
    audience: "Federal / State",
    highlight: false,
  },
  {
    name: "Livingstone GEO Agency",
    tag: "AI Visibility",
    focus: "Generative Engine Optimization — so your brand shows up inside ChatGPT, Perplexity, and AI search.",
    url: "https://geoagency.thelivingstonefoundation.com",
    audience: "AI-Era Brands",
    highlight: false,
  },
  {
    name: "Livingstone Marketing Firm",
    tag: "You're here",
    focus: "Brand, demand, and full-funnel growth marketing for scaling businesses.",
    url: "#",
    audience: "Growth-Stage Companies",
    highlight: false,
    current: true,
  },
];

function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden border-t border-white/5 bg-zinc-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(152,58,214,0.15),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#E8B84F]">
            — The Livingstone Ecosystem
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            One group.{" "}
            <span className="gradient-text">Four specialized branches.</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            Livingstone started as a software firm and grew into a full ecosystem. Every
            branch shares the same engineering DNA — each is tuned for a specific client
            and mission.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {ecosystem.map((site) => {
            const isCurrent = site.current;
            const CardTag = isCurrent ? "div" : "a";
            const cardProps = isCurrent
              ? {}
              : {
                  href: site.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                };
            return (
              <CardTag
                key={site.name}
                {...cardProps}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-8 md:p-10 transition-all duration-500 ${
                  isCurrent
                    ? "border-[#E8B84F]/40 bg-gradient-to-br from-[#E8B84F]/[0.08] via-[#4A7BB7]/[0.05] to-transparent"
                    : "border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04]"
                }`}
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-[#E8B84F]/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70 backdrop-blur-md">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isCurrent ? "bg-[#E8B84F] animate-pulse" : "bg-white/40"
                      }`}
                    />
                    {site.tag}
                  </span>
                  {!isCurrent && (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 group-hover:border-transparent group-hover:bg-brand-gradient group-hover:text-white group-hover:brand-glow">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {site.name}
                </h3>
                <p className="mt-4 flex-1 text-base font-light leading-relaxed text-white/70">
                  {site.focus}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                      Built for
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      {site.audience}
                    </p>
                  </div>
                  <p
                    className={`font-mono text-xs transition-colors ${
                      isCurrent ? "text-[#E8B84F]" : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    {isCurrent ? "current site" : site.url.replace("https://", "")}
                  </p>
                </div>
              </CardTag>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-white/50">
          Not sure which branch fits?{" "}
          <a
            href="#contact"
            className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
          >
            Tell us about your project
          </a>{" "}
          — we&apos;ll route you.
        </p>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How is Livingstone different from a traditional agency?",
    a: "Traditional agencies only do marketing; dev firms only build products. Livingstone does both — we build the systems (websites, AI agents, platforms) AND drive the growth (marketing, leads, revenue). One integrated team, one accountable partner, one stack.",
  },
  {
    q: "What does 'AI-powered growth firm' actually mean?",
    a: "We embed AI agents and automations across your funnel — SEO and content optimization loops, AI calling and email sequences that qualify leads, and creative systems that test hundreds of variations. Human strategy sets direction; AI handles the scale and the grind.",
  },
  {
    q: "Do I need all five pillars, or can I start smaller?",
    a: "Start anywhere. Most partners begin with the pillar producing the fastest ROI for their stage — usually Visibility + Intelligence or Demand Generation — then expand into the full stack as revenue compounds.",
  },
  {
    q: "What kinds of companies do you work with?",
    a: "Startups scaling fast, SaaS and tech companies, enterprise businesses entering the AI era, and founders building personal authority. If you want a done-for-you growth system — not a vendor you have to babysit — we're aligned.",
  },
  {
    q: "How fast do I see results?",
    a: "Conversion-focused pillars (outreach, paid, funnels) typically produce pipeline in the first 30–60 days. Visibility and authority work compounds over 90+ days. We set the cadence with you week one, then report against it every week.",
  },
];

function FAQ() {
  return (
    <section className="relative border-t border-white/5 bg-black py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#E8B84F]">
            — Questions, answered
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Before you book a call.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-colors open:bg-white/[0.04] hover:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                {faq.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-transform group-open:rotate-45">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 pr-12 font-light leading-relaxed text-white/70">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#E8B84F] font-medium text-sm tracking-wider uppercase mb-4">
            — Start a project
          </p>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
            Dominate Search.
            <span className="block italic font-light mt-2 text-white/50">Dominate Market.</span>
          </h2>
          <p className="mt-8 text-gray-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Ready to stop marketing and start engineering your growth? Tell us about your goals. We&apos;ll get back within one business day.
          </p>
        </div>
        <div className="bg-black rounded-3xl p-8 md:p-12 border border-white/10">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Name</label>
                <input
                  type="text"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-gray-600 focus:border-[#E8B84F] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Email</label>
                <input
                  type="email"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-gray-600 focus:border-[#E8B84F] outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Company</label>
              <input
                type="text"
                className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-gray-600 focus:border-[#E8B84F] outline-none transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">What do you need help with?</label>
              <textarea
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-gray-600 focus:border-[#E8B84F] outline-none transition-colors resize-none"
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors mt-6"
            >
              Send message →
            </button>
          </form>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Studio</p>
            <p className="text-white">210 Beacon Pl NE<br />Washington, DC 20011</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Phone</p>
            <p className="text-white">(540) 998-9766</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Email</p>
            <p className="text-white">hello@livingstonefirm.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-white/5 pb-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Livingstone Solutions"
                  width={44}
                  height={44}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <p className="text-lg font-bold text-white">
                The Livingstone Marketing Firm
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-white/60">
              Engineered growth, powered by AI. Part of The Livingstone Solution
              family of companies.
            </p>
          </div>
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-wider text-white/40">
              The Livingstone Ecosystem
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {ecosystem.map((site) =>
                site.current ? (
                  <li key={site.name} className="text-sm text-white/80">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E8B84F]" />
                      {site.name}{" "}
                      <span className="text-white/40">(current)</span>
                    </span>
                  </li>
                ) : (
                  <li key={site.name}>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition-colors group-hover:bg-[#E8B84F]" />
                      {site.name}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-white/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} The Livingstone Solution LLC</p>
          <p>Washington, D.C.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Positioning />
      <GrowthPillars />
      <StrategicAdvantage />
      <OutcomesStrip />
      <Work />
      <Approach />
      <Ecosystem />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
