"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Cpu,
  Terminal as TerminalIcon,
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
  Download,
  Play,
  RotateCcw,
  Search,
  Filter,
  Award,
  Video,
  Wrench,
  Radio,
  Wifi,
  Sparkles,
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

  // Feature 5: Filter & Search state
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Feature 1: Interactive Microcontroller / WASD Rover Simulator
  const [roverState, setRoverState] = useState({
    x: 50,
    y: 50,
    heading: "N",
    lastCommand: "STANDBY",
    obstacleDistance: 42,
    warning: false,
  });

  // Feature 1: Interactive Terminal
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "ESP8266 Wi-Fi Module: Connected to AP [SSID: RT_ROBOTICS_LAB]",
    "Arduino Uno R3: Bootloader OK, Telemetry baud: 115200",
    "HC-SR04 Ultrasonic Sensor: Initialized (Trigger D9, Echo D10)",
    "Ready. Type 'help' for available system commands.",
  ]);

  const projects = [
    {
      title: "Wi-Fi Obstacle-Avoidance Autonomous Robot",
      category: "Robotics & IoT",
      description:
        "Built an autonomous Wi-Fi-controlled rover combining obstacle avoidance, ultrasonic telemetry, and real-time WASD steering.",
      hardware: ["Arduino Uno", "ESP8266 Wi-Fi", "HC-SR04 Ultrasonic", "L298N Motor Driver"],
      tags: ["C++", "IoT Logic", "Robotics", "Hardware Architecture"],
      github: "https://github.com/RatanThakar/ratanthakar-portfolio",
      icon: Cpu,
    },
    {
      title: "Staff Management System",
      category: "Desktop & UI",
      description:
        "Role-based enterprise employee monitoring, attendance logging, and credential verification software built with high-performance desktop UI and secure state management.",
      hardware: [],
      tags: ["TypeScript", "CustomTkinter", "SQLite", "Security"],
      github: "https://github.com/RRGAMERTHEWAR/Staff-management-system-",
      icon: Briefcase,
    },
    {
      title: "OreFX Discord Assistant Bot",
      category: "Automation & Bots",
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
      icon: TerminalIcon,
    },
    {
      title: "OreFX Crypto Exchange Simulation",
      category: "Web & Simulation",
      description:
        "Interactive virtual economy and crypto simulation engine built for community servers (DemocracyCraft) featuring market dynamics and order books.",
      hardware: [],
      tags: ["JavaScript", "HTML5", "CSS3", "Virtual Economy"],
      github: "https://github.com/RRGAMERTHEWAR/OreFXStudios_Crypto",
      icon: Code2,
    },
    {
      title: "CustomTkinter Industrial Dashboard",
      category: "Desktop & UI",
      description:
        "Modern desktop telemetry and device monitoring interfaces engineered using Python and CustomTkinter for sensor readouts.",
      hardware: ["Serial Interface", "Data Buffers"],
      tags: ["Python", "CustomTkinter", "Data Visualizer", "Serial Comms"],
      github: "https://github.com/RRGAMERTHEWAR",
      icon: Layers,
    },
  ];

  const categories = ["All", "Robotics & IoT", "Desktop & UI", "Automation & Bots", "Systems & Security"];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.hardware.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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

  // Feature 3: Hardware Lab Tools
  const hardwareLab = [
    { name: "Microcontrollers", desc: "Arduino Uno R3, ESP8266 NodeMCU, ESP32 DevKit" },
    { name: "Actuators & Drivers", desc: "L298N Dual H-Bridge, TT DC Gear Motors, SG90 Micro Servos" },
    { name: "Sensors & Telemetry", desc: "HC-SR04 Ultrasonic, IR Obstacle Avoidance, DHT11 Temp/Humidity" },
    { name: "Prototyping Bench", desc: "Solder Station, Digital Multimeter, Regulated Power Supply, 3D Printer" },
  ];

  // Feature 7: Academic Milestones & Certifications
  const milestones = [
    {
      year: "2024 - Present",
      title: "Diploma in Information & Communication Technology (ICT)",
      institution: "Technical Institute",
      detail:
        "Specializing in Embedded Systems, Computer Networking, Object-Oriented Software Design, and IoT Protocols.",
      badge: "In Progress",
    },
    {
      year: "2025",
      title: "Autonomous Robotics & Obstacle Avoidance Capstone",
      institution: "Hardware Lab Build",
      detail:
        "Architected an ultrasonic Wi-Fi teleoperated rover with custom keyboard inputs and real-time collision detection.",
      badge: "Completed",
    },
    {
      year: "2025",
      title: "Python Desktop Software Engineering",
      institution: "Open Source Certification",
      detail:
        "Advanced CustomTkinter desktop interface development, SQLite relational persistence, and async worker threading.",
      badge: "Certified",
    },
    {
      year: "2026",
      title: "Actively Seeking Engineering Internships",
      institution: "Available Worldwide / Hybrid",
      detail:
        "Ready to apply practical hardware-software prototyping, robotics logic, and modern software development.",
      badge: "Open Now",
    },
  ];

  // Simulator controls
  const handleRoverMove = (direction: "FORWARD" | "REVERSE" | "LEFT" | "RIGHT" | "STOP") => {
    setRoverState((prev) => {
      let newY = prev.y;
      let newX = prev.x;
      let newHeading = prev.heading;

      if (direction === "FORWARD") {
        newY = Math.max(15, prev.y - 12);
        newHeading = "N";
      } else if (direction === "REVERSE") {
        newY = Math.min(85, prev.y + 12);
        newHeading = "S";
      } else if (direction === "LEFT") {
        newX = Math.max(15, prev.x - 12);
        newHeading = "W";
      } else if (direction === "RIGHT") {
        newX = Math.min(85, prev.x + 12);
        newHeading = "E";
      }

      const dist = Math.max(5, Math.floor(Math.random() * 50) + 15);
      const isWarn = dist < 20;

      return {
        x: newX,
        y: newY,
        heading: newHeading,
        lastCommand: direction,
        obstacleDistance: dist,
        warning: isWarn,
      };
    });

    setTerminalLogs((prev) => [
      ...prev.slice(-6),
      `> CMD: ${direction} | Telemetry: ${roverState.obstacleDistance}cm | Ping: OK`,
    ]);
  };

  const handleTerminalCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    setTerminalInput("");

    if (!cmd) return;

    if (cmd === "help") {
      setTerminalLogs((prev) => [
        ...prev.slice(-4),
        `$ ${cmd}`,
        "Commands: help, status, projects, skills, contact, clear, ping",
      ]);
    } else if (cmd === "status") {
      setTerminalLogs((prev) => [
        ...prev.slice(-4),
        `$ ${cmd}`,
        "System: Nominal | Core: Arduino Uno | WiFi: ESP8266 Active | Status: Seeking Internship",
      ]);
    } else if (cmd === "projects") {
      setTerminalLogs((prev) => [
        ...prev.slice(-4),
        `$ ${cmd}`,
        "1. Wi-Fi Obstacle-Avoidance Rover | 2. Staff Management System | 3. OreFX Bot | 4. ANTIV2",
      ]);
    } else if (cmd === "skills") {
      setTerminalLogs((prev) => [
        ...prev.slice(-4),
        `$ ${cmd}`,
        "Stack: Python, C/C++, TypeScript, Arduino Uno, ESP8266, SQLite, CustomTkinter",
      ]);
    } else if (cmd === "contact") {
      setTerminalLogs((prev) => [
        ...prev.slice(-4),
        `$ ${cmd}`,
        "Email: ratan.thakar15@gmail.com | Domain: ratanthakar.me",
      ]);
    } else if (cmd === "clear") {
      setTerminalLogs(["Terminal cleared. Type 'help' for instructions."]);
    } else if (cmd === "ping") {
      setTerminalLogs((prev) => [
        ...prev.slice(-4),
        `$ ${cmd}`,
        "64 bytes from ratanthakar.me: icmp_seq=1 ttl=56 time=14.2 ms",
      ]);
    } else {
      setTerminalLogs((prev) => [
        ...prev.slice(-4),
        `$ ${cmd}`,
        `Command not recognized: '${cmd}'. Type 'help' for list.`,
      ]);
    }
  };

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
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#simulator" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Rover Sim</span>
            </a>
            <a href="#lab" className="hover:text-white transition-colors">
              Hardware Lab
            </a>
            <a href="#milestones" className="hover:text-white transition-colors">
              Milestones
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Feature 4: Resume Download Button */}
            <a
              href="mailto:ratan.thakar15@gmail.com?subject=Resume%20Request%20-%20Ratan%20Thakar"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-all"
            >
              <Download className="w-3.5 h-3.5 text-neutral-400" />
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/RatanThakar"
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
              <span>Contact</span>
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
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Rover Simulator
            </a>
            <a
              href="#lab"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Hardware Lab
            </a>
            <a
              href="#milestones"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-white py-1"
            >
              Milestones
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
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28 bg-grid-pattern">
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
                href="#simulator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-emerald-400 text-sm font-medium transition-all"
              >
                <Radio className="w-4 h-4" />
                <span>Launch Rover Telemetry</span>
              </a>
              <a
                href="https://github.com/RatanThakar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-200 text-sm font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
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

      {/* Feature 2: GitHub Live Activity & Stats Dashboard */}
      <section className="py-12 border-t border-neutral-800/80 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <GithubIcon className="w-4 h-4 text-neutral-300" />
              <span>Real-time GitHub Statistics &amp; Streaks</span>
            </div>
            <a
              href="https://github.com/RatanThakar"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-neutral-500 hover:text-neutral-300 flex items-center gap-1"
            >
              <span>@RatanThakar</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 flex flex-col items-center justify-center">
              <img
                src="https://github-readme-stats-fast.vercel.app/api?username=RatanThakar&show_icons=true&theme=tokyonight&hide_border=true&bg_color=09090b"
                alt="GitHub Stats"
                className="w-full max-w-sm rounded"
              />
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 flex flex-col items-center justify-center">
              <img
                src="https://github-readme-stats-fast.vercel.app/api/top-langs?username=RatanThakar&layout=compact&theme=tokyonight&hide_border=true&bg_color=09090b"
                alt="Top Languages"
                className="w-full max-w-sm rounded"
              />
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 flex flex-col items-center justify-center">
              <img
                src="https://streak-stats.demolab.com/?user=RatanThakar&theme=tokyonight&hide_border=true&background=09090b"
                alt="Commit Streak"
                className="w-full max-w-sm rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Interactive Microcontroller Terminal & WASD Rover Simulator */}
      <section id="simulator" className="py-20 border-t border-neutral-800/80 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>Interactive Telemetry &amp; Hardware Testing</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Virtual Rover &amp; Embedded Microcontroller Console
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Test real-time WASD controls simulating the Wi-Fi obstacle avoidance rover or type commands in the embedded firmware terminal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Virtual Rover 2D Canvas / Control Deck */}
            <div className="lg:col-span-6 rounded-xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono text-neutral-300 font-semibold">ESP8266 ROVER TELEMETRY</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">Node: 192.168.4.1</span>
                </div>

                {/* Radar Grid */}
                <div className="relative w-full h-56 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                  {/* Ultrasonic Beam Arc */}
                  <div
                    className="absolute w-24 h-24 rounded-full border border-dashed border-emerald-500/40 animate-ping pointer-events-none"
                    style={{ left: `${roverState.x - 12}%`, top: `${roverState.y - 12}%` }}
                  />

                  {/* Rover Node */}
                  <div
                    className="absolute transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{ left: `${roverState.x}%`, top: `${roverState.y}%` }}
                  >
                    <div className="p-2.5 rounded-lg bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/20">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono mt-1 text-emerald-400 font-bold">
                      ROVER [{roverState.heading}]
                    </span>
                  </div>

                  {/* Telemetry overlay pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-neutral-950/80 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                    Sonar:{" "}
                    <span className={roverState.warning ? "text-rose-400 font-bold" : "text-emerald-400"}>
                      {roverState.obstacleDistance} cm
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-neutral-950/80 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                    Command: <span className="text-white font-semibold">{roverState.lastCommand}</span>
                  </div>
                </div>
              </div>

              {/* WASD Virtual Direction Pad */}
              <div className="mt-6 flex flex-col items-center gap-2">
                <button
                  onClick={() => handleRoverMove("FORWARD")}
                  className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono font-bold text-white transition-colors"
                >
                  W (Forward)
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleRoverMove("LEFT")}
                    className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono font-bold text-white transition-colors"
                  >
                    A (Left)
                  </button>
                  <button
                    onClick={() => handleRoverMove("REVERSE")}
                    className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono font-bold text-white transition-colors"
                  >
                    S (Reverse)
                  </button>
                  <button
                    onClick={() => handleRoverMove("RIGHT")}
                    className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono font-bold text-white transition-colors"
                  >
                    D (Right)
                  </button>
                </div>
                <button
                  onClick={() =>
                    setRoverState({
                      x: 50,
                      y: 50,
                      heading: "N",
                      lastCommand: "RESET",
                      obstacleDistance: 45,
                      warning: false,
                    })
                  }
                  className="mt-2 text-[11px] font-mono text-neutral-500 hover:text-neutral-300 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Position</span>
                </button>
              </div>
            </div>

            {/* Embedded Terminal Emulator */}
            <div className="lg:col-span-6 rounded-xl border border-neutral-800 bg-neutral-950 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <TerminalIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-neutral-300 font-semibold">SERIAL CONSOLE (/dev/ttyUSB0)</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">115200 baud</span>
                </div>

                <div className="h-56 overflow-y-auto space-y-1.5 font-mono text-xs text-neutral-300 bg-neutral-900/60 p-3.5 rounded-lg border border-neutral-800/80">
                  {terminalLogs.map((log, index) => (
                    <div key={index} className="leading-relaxed">
                      {log.startsWith("$") ? (
                        <span className="text-emerald-400 font-semibold">{log}</span>
                      ) : (
                        <span>{log}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal command line */}
              <form onSubmit={handleTerminalCommand} className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type 'help', 'status', 'projects', 'skills'..."
                  className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-mono font-semibold text-white transition-colors"
                >
                  Execute
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Feature 5: Category Filters & Search */}
      <section id="projects" className="py-20 border-t border-neutral-800/80 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                <Cpu className="w-4 h-4 text-neutral-300" />
                <span>Featured Builds</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Hardware, Automation &amp; Systems
              </h2>
            </div>
            <a
              href="https://github.com/RatanThakar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              <span>Explore all GitHub repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Filter Bar & Search Input */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? "bg-white text-neutral-950 font-bold shadow-sm"
                      : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or stack..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj, idx) => {
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

      {/* Feature 3: Hardware Lab Bench & Fabrication */}
      <section id="lab" className="py-20 border-t border-neutral-800/80 bg-neutral-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              <Wrench className="w-4 h-4 text-neutral-300" />
              <span>Physical Workbench</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Hardware Lab &amp; Prototyping Gear
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              The instruments and fabrication tools used to build physical prototypes and test electronic circuits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareLab.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-semibold">
                    {item.name}
                  </span>
                  <p className="text-sm text-neutral-300 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Bench Verified</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature 6: Video Demonstration & Build Logs */}
      <section className="py-20 border-t border-neutral-800/80 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              <Video className="w-4 h-4 text-neutral-300" />
              <span>Media &amp; Demonstrations</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Engineering Build Logs &amp; Content Creation
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Creating technical video documentation, circuit walkthroughs, and autonomous tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
                  <Play className="w-3.5 h-3.5" />
                  <span>HARDWARE RUNTIME DEMO</span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Autonomous Rover Obstacle Avoidance Test
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  Real-time video demonstration illustrating the Arduino Uno reacting to HC-SR04 sonar pulses, adjusting wheel PWM via the L298N driver, and reversing away from obstacles.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Wi-Fi WASD Steering</span>
                <span className="text-emerald-400">Hardware Verified</span>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
                  <Play className="w-3.5 h-3.5" />
                  <span>DESKTOP GUI TELEMETRY</span>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  CustomTkinter Serial Telemetry Screen
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  Screen recording showcasing serial buffer streaming from microcontrollers into a high-contrast Python CustomTkinter desktop interface.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Python &amp; Serial Comms</span>
                <span className="text-emerald-400">Production UI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 7: Academic Milestones & Experience Timeline */}
      <section id="milestones" className="py-20 border-t border-neutral-800/80 bg-neutral-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              <Award className="w-4 h-4 text-neutral-300" />
              <span>Career Roadmap</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Academic Milestones &amp; Experience
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Formal coursework, certifications, and hands-on laboratory milestones.
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-neutral-800">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-9">
                <div className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-neutral-900 border-2 border-emerald-400 transform -translate-x-1/2" />
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-mono text-emerald-400 font-semibold">{m.year}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 w-fit">
                      {m.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white">{m.title}</h3>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5">{m.institution}</p>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-neutral-800/80 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
              <TerminalIcon className="w-4 h-4 text-neutral-300" />
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
              href="https://github.com/RatanThakar"
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
