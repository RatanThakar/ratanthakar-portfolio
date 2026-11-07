"use client";

import { useState } from "react";
import {
  Mail,
  Cpu,
  Terminal,
  Code2,
  ExternalLink,
  ChevronRight,
  Layers,
  Bot,
  Send,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<string | null>(null);

  const projects = [
    {
      title: "Wi-Fi Obstacle-Avoidance Autonomous Robot",
      category: "Robotics & Embedded Systems",
      description:
        "Built an autonomous Wi-Fi-controlled rover combining obstacle avoidance, ultrasonic telemetry, and real-time WASD steering.",
      hardware: ["Arduino Uno", "ESP8266 Wi-Fi", "HC-SR04 Ultrasonic", "L298N Motor Driver"],
      tags: ["C++", "IoT Logic", "Robotics", "Hardware Architecture"],
      github: "https://github.com/RRGAMERTHEWAR",
      icon: Cpu,
    },
    {
      title: "Staff Management System",
      category: "Desktop & Enterprise Software",
      description:
        "Role-based enterprise employee monitoring, attendance logging, and credential verification software built with high-performance desktop UI and secure state management.",
      hardware: [],
      tags: ["TypeScript", "CustomTkinter", "SQLite", "Security"],
      github: "https://github.com/RRGAMERTHEWAR/Staff-management-system-",
      icon: Briefcase,
    },
    {
      title: "OreFX Discord Assistant Bot",
      category: "Automation & Cloud Bot",
      description:
        "High-uptime multi-modular automation and guild moderation bot delivering server telemetry, command parsing, and role verification.",
      hardware: [],
      tags: ["JavaScript", "Node.js", "Discord API", "Event Handlers"],
      github: "https://github.com/RRGAMERTHEWAR/OreFXBOT",
      icon: Bot,
    },
    {
      title: "ANTIV2 Security & Systems Platform",
      category: "Systems & Security",
      description:
        "Next-generation modular TypeScript infrastructure engineered for reliable process enforcement and access governance.",
      hardware: [],
      tags: ["TypeScript", "Async Engine", "Architecture"],
      github: "https://github.com/RRGAMERTHEWAR/ANTIV2",
      icon: Terminal,
    },
    {
      title: "OreFX Crypto Exchange Simulation",
      category: "Web & Financial Simulation",
      description:
        "Interactive virtual economy and crypto simulation engine built for community servers (DemocracyCraft) featuring market dynamics and order books.",
      hardware: [],
      tags: ["JavaScript", "HTML5", "CSS3", "Virtual Economy"],
      github: "https://github.com/RRGAMERTHEWAR/OreFXStudios_Crypto",
      icon: Code2,
    },
    {
      title: "CustomTkinter Industrial Dashboard",
      category: "Interactive Desktop UI",
      description:
        "Modern desktop telemetry and device monitoring interfaces engineered using Python and CustomTkinter for sensor readouts.",
      hardware: ["Serial Interface", "Data Buffers"],
      tags: ["Python", "CustomTkinter", "Data Visualizer", "Serial Comms"],
      github: "https://github.com/RRGAMERTHEWAR",
      icon: Layers,
    },
  ];

  const skillGroups = [
    {
      title: "Core Languages",
      items: [
        { name: "Python", badge: "Desktop Software & Automation" },
        { name: "C & C++", badge: "Firmware & Microcontrollers" },
        { name: "TypeScript / JavaScript", badge: "Fullstack & Cloud Bots" },
        { name: "Java", badge: "Object-Oriented Architecture" },
        { name: "SQL (SQLite)", badge: "Relational Persistence" },
      ],
    },
    {
      title: "Embedded & Hardware",
      items: [
        { name: "Arduino Uno", badge: "Circuit Prototyping" },
        { name: "ESP8266 Wi-Fi", badge: "IoT & Remote Telemetry" },
        { name: "Ultrasonic Sensors", badge: "HC-SR04 & Proximity Logic" },
        { name: "Motor Drivers", badge: "L298N & H-Bridge Control" },
        { name: "3D Printing & Fabrication", badge: "Chassis & Assembly" },
      ],
    },
    {
      title: "Toolchain & Platforms",
      items: [
        { name: "Git & GitHub", badge: "Version Control & CI/CD" },
        { name: "VS Code & Arduino IDE", badge: "Integrated Workflows" },
        { name: "CustomTkinter", badge: "Modern Python Interfaces" },
        { name: "Vercel & Cloud Hosting", badge: "Continuous Deployment" },
      ],
    },
  ];

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactStatus("Launching your email client to connect directly...");
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    window.location.href = `mailto:ratan.thakar15@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject} (from ${name})`
    )}&body=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setContactStatus("Email client opened! You can also message ratan.thakar15@gmail.com directly.");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* Top Engineering Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="h-8 w-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center font-mono text-sm font-bold text-neutral-200 group-hover:border-neutral-500 transition-colors">
              RT
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-neutral-100">
                Ratan Thakar
              </span>
              <span className="text-[11px] font-mono text-neutral-400">ratanthakar.me</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Engineering Specs
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/RRGAMERTHEWAR"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:ratan.thakar15@gmail.com"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-neutral-700 bg-neutral-100 text-neutral-950 text-xs font-semibold hover:bg-white hover:shadow-sm transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 py-4 space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Engineering Specs
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 bg-grid-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 mb-6 text-xs text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Actively Seeking Internships &amp; Robotics Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Bridging hardware logic with elegant software execution.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-400 leading-relaxed">
              I&apos;m <span className="text-neutral-100 font-medium">Ratan Thakar</span>, an
              Information &amp; Communication Technology engineer building autonomous robotics,
              IoT telemetry nodes, and responsive desktop applications.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-100 text-neutral-950 font-semibold text-sm hover:bg-white transition-all shadow-sm"
              >
                <span>View Engineering Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/RRGAMERTHEWAR"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-200 text-sm font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/RRGAMERTHEWAR</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono">
              <div>
                <p className="text-2xl font-bold text-white">ICT</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">Diploma Major</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">Repositories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Robotics</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">Embedded Focus</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400">Ready</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">Internship Status</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-neutral-800/80 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                <GraduationCap className="w-4 h-4 text-neutral-300" />
                <span>Background &amp; Philosophy</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Practical engineering from schematic to production software.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-4 text-neutral-400 text-base leading-relaxed">
              <p>
                Currently pursuing an <strong>Information &amp; Communication Technology (ICT)</strong> diploma,
                I focus heavily on applied embedded systems, sensor integration, and intelligent desktop software.
              </p>
              <p>
                Rather than staying purely in simulation, I fabricate physical circuits, calibrate microcontrollers
                (Arduino Uno, ESP8266), wire H-bridge motor drivers, and build wireless WASD and telemetry controllers.
              </p>
              <p>
                On the software end, I craft Python desktop software with modern <strong>CustomTkinter</strong> skins,
                maintain robust TypeScript automation systems, and manage backend databases like SQLite for reliable local
                persistence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-neutral-800/80 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                <Cpu className="w-4 h-4 text-neutral-300" />
                <span>Featured Engineering Builds</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Hardware, Automation &amp; Systems
              </h2>
            </div>
            <a
              href="https://github.com/RRGAMERTHEWAR?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <span>Explore all GitHub repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => {
              const Icon = proj.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-neutral-800/90 bg-neutral-900/60 p-6 flex flex-col justify-between hover:border-neutral-700 transition-all hover:bg-neutral-900/90 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-neutral-800/70 border border-neutral-700/60 text-neutral-200">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono text-neutral-400">{proj.category}</span>
                      </div>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-500 group-hover:text-neutral-200 transition-colors p-1"
                        aria-label={`View ${proj.title} on GitHub`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-neutral-400 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Hardware Badges if present */}
                    {proj.hardware.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-neutral-800/60">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                          Hardware Stack:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.hardware.map((hw, hIdx) => (
                            <span
                              key={hIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700/60"
                            >
                              {hw}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800/60 flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills / Engineering Specs */}
      <section id="skills" className="py-20 border-t border-neutral-800/80 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
              <Terminal className="w-4 h-4 text-neutral-300" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Engineering Specifications &amp; Toolchain
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Languages, hardware protocols, and frameworks tested across projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, gIdx) => (
              <div
                key={gIdx}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 flex flex-col"
              >
                <h3 className="text-base font-semibold text-neutral-100 border-b border-neutral-800 pb-3 mb-4 font-mono">
                  {group.title}
                </h3>
                <ul className="space-y-3.5">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex flex-col">
                      <span className="text-sm font-medium text-white">{item.name}</span>
                      <span className="text-xs text-neutral-400 font-mono mt-0.5">
                        {item.badge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-neutral-800/80 bg-neutral-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8 sm:p-12 relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              <Send className="w-4 h-4" />
              <span>Direct Inquiry</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Let&apos;s build something together.
            </h2>
            <p className="mt-3 text-neutral-400 text-sm max-w-xl">
              Whether you are looking for an ICT engineering intern, want to collaborate on an IoT / robotics build,
              or discuss custom software, feel free to reach out.
            </p>

            <form onSubmit={handleContactSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/90 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Topic / Opportunity
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Internship / Hardware Project"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/90 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your team, project, or timeline..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/90 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-neutral-100 text-neutral-950 font-semibold text-sm hover:bg-white transition-all cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <a
                  href="mailto:ratan.thakar15@gmail.com"
                  className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  Or email directly: ratan.thakar15@gmail.com
                </a>
              </div>

              {contactStatus && (
                <div className="mt-4 p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{contactStatus}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-neutral-800/80 bg-neutral-950 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; 2026 Ratan Thakar. Deployed on Vercel at{" "}
            <a href="https://ratanthakar.me" className="text-neutral-300 hover:underline">
              ratanthakar.me
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/RRGAMERTHEWAR"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href="mailto:ratan.thakar15@gmail.com"
              className="hover:text-neutral-300 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
