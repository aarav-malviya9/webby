import { motion } from "framer-motion";
import { BsArrowUpRight, BsStars } from "react-icons/bs";
import React, { useRef, useState } from "react";

const projects = [
  {
    title: "Arushi Malviya Personal Brand Website",
    tagline:
      "A premium interactive portfolio with booking and storytelling experience",
    description:
      "Designed and developed a high-end personal website for a LinkedIn creator with 38k+ followers. Focused on storytelling, smooth animations, and conversion-driven design.",
    tech: ["React", "Tailwind", "GSAP"],
    features: [
      "Interactive UI with animations",
      "Booking system integration",
      "Personal brand storytelling",
      "Responsive design",
    ],
    role: "Full-stack developer & designer",
  },
  {
    title: "AI Website Assistant",
    tagline: "A smart chatbot that feels human and converts visitors",
    description:
      "A no-code chatbot system for websites with human-like responses and smart recommendations.",
    tech: ["JavaScript", "AI APIs"],
    features: [
      "Human-like responses",
      "Website embedding",
      "Analytics dashboard",
    ],
    role: "Developer",
  },
  {
    title: "Scroll Navigation Chrome Extension",
    tagline: "Section-based navigation for faster browsing",
    description:
      "Chrome extension for navigating long content using section-based UI.",
    tech: ["JavaScript", "Chrome API"],
    features: ["Section navigation", "Fast UI interaction"],
    role: "Developer",
  },
];

const cardAccent = [
  "from-[#f97316]/25 via-[#fb7185]/12 to-transparent",
  "from-[#38bdf8]/20 via-[#818cf8]/12 to-transparent",
  "from-[#34d399]/20 via-[#22c55e]/10 to-transparent",
];

const ProjectCard = ({ project, index, isFeatured }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={[
        "group relative isolate flex flex-col overflow-hidden rounded-[32px] border border-white/10",
        "bg-white/[0.02] p-8 backdrop-blur-2xl transition-all duration-700 ease-out",
        "hover:border-white/20 hover:bg-white/[0.04]",
        "hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]",
        "before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[32px]",
        "before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]",
        "after:pointer-events-none after:absolute after:inset-x-[15%] after:top-0 after:h-px",
        "after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent",
        isFeatured ? "md:col-span-2 xl:col-span-7 xl:row-span-2" : "xl:col-span-5",
      ].join(" ")}
      style={{
        transformStyle: "preserve-3d",
        transform: isHovered
          ? `perspective(1000px) rotateX(${(mousePosition.y - 150) * -0.02}deg) rotateY(${(mousePosition.x - 150) * 0.02}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {/* Interactive Lighting Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[31px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          zIndex: 1,
        }}
        aria-hidden
      />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${cardAccent[index]} opacity-40 transition-opacity duration-700 group-hover:opacity-80`}
        aria-hidden
      />
      <div
        className="absolute -right-20 top-[-72px] h-64 w-64 rounded-full bg-white/5 blur-[80px] transition-transform duration-700 group-hover:scale-150"
        aria-hidden
      />

      {/* Content wrapper with 3D translation */}
      <div
        className="relative z-20 flex h-full flex-col justify-between transition-transform duration-500 ease-out"
        style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <BsStars className="text-[12px] text-accent" />
                Selected Work
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                {project.role}
              </span>
            </div>

            <div className="max-w-2xl space-y-3">
              <h3 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-[42px] lg:leading-[1.1]">
                {project.title}
              </h3>
              <p className="max-w-xl text-base font-light leading-relaxed text-white/70">
                {project.tagline}
              </p>
            </div>
          </div>

          <div className="hidden shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 p-4 text-white/70 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-white/20 group-hover:text-white md:flex">
            <BsArrowUpRight className="text-xl" />
          </div>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-12">
          <div className={isFeatured ? "xl:col-span-7" : "xl:col-span-12"}>
            <p className="max-w-2xl text-sm font-light leading-relaxed text-white/60">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/5 bg-white/[0.03] px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={isFeatured ? "xl:col-span-5" : "xl:col-span-12"}>
            <div className="h-full rounded-[24px] border border-white/5 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-sm">
              <div className="mb-5 text-[11px] uppercase tracking-[0.2em] text-white/40">
                Key Features
              </div>
              <div className="grid gap-3">
                {project.features.map((feature, featureIndex) => (
                  <div
                    key={feature}
                    className="group/feature flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                  >
                    <span className="text-sm font-light text-white/70 transition-colors group-hover/feature:text-white">
                      {feature}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 transition-colors group-hover/feature:text-accent">
                      0{featureIndex + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const WorkSlider = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-[minmax(380px,_1fr)]">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
          isFeatured={index === 0}
        />
      ))}
    </div>
  );
};

export default WorkSlider;
