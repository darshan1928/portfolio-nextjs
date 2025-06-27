"use client";
import {
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiRedis,
  SiPostman,
  SiFirebase,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiSocketdotio,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import FAQAccordion from "./FAQAccordion";
import CollaborateCard from "./CollaborateCard";

import { motion } from "framer-motion";
import Link from "next/link";
import ResumeSection from "./ResumeSection";
import ToolsSection from "./ToolSection";

function Intro() {
  return (
    <motion.div
      className="rounded-xl bg-[var(--secondary-bg)] space-y-6 p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-base md:text-lg leading-relaxed text-[var(--secondary-text)]">
        I’m <strong className="text-[var(--primary-text)]">Darshan Raj</strong>,
        a full-stack <span className="bg-[var(--secondary-bg)]">MERN</span>{" "}
        developer with over{" "}
        <strong className="text-[var(--primary-text)]">2 years</strong> of
        professional experience. I build{" "}
        <span className="bg-[var(--bg-gradient-yellow-1)]/40">
          responsive React & Next.js UIs
        </span>{" "}
        and architect{" "}
        <span className="bg-[var(--bg-gradient-yellow-1)]/40">
          robust REST & GraphQL APIs
        </span>
        .
      </p>

      <p className="text-base md:text-lg leading-relaxed text-[var(--secondary-text)]">
        When I’m not coding, I write technical articles, optimize MongoDB
        schemas, and set up CI/CD pipelines. Feel free to{" "}
        <Link
          href="/contact"
          className="underline text-[var(--primary-text)] hover:text-[var(--secondary-text)] transition-colors"
        >
          get in touch
        </Link>{" "}
        to collaborate or just say hi!
      </p>
    </motion.div>
  );
}
export const metadata = {
  title: "About • Darshan Raj",
  description: "Learn more about Darshan Raj, MERN stack developer.",
};
export default function AboutMe() {
  const services = [
    {
      title: "Front-End Development",
      desc: "Converting Figma designs into production-ready, responsive web interfaces with React and Next.js.",
    },
    {
      title: "Back-End Development",
      desc: "Building robust RESTful and GraphQL APIs, authentication, and data workflows on Node.js/Express.",
    },
    {
      title: "Full Stack Web Development",
      desc: "End-to-end applications from UI to database, ensuring seamless integration and deployment.",
    },
    {
      title: "Photoshop & Graphic Design",
      desc: "Designing high-quality graphics, icons, and layouts to enhance user experience and branding.",
    },
  ];

  const tools = [
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: FaAws, name: "AWS" },
    { icon: SiGit, name: "Git" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React.js" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiPython, name: "Python" },
    { icon: SiFastapi, name: "FastAPI" },
    { icon: SiRedis, name: "Redis" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiSocketdotio, name: "Socket.IO" },
  ];

  return (
    <main className="h-full w-full   text-[var(--secondary-text)] px-4  py-4">
      {/* Content */}
      <Intro />

      <section className="space-y-12 px-4 py-6 max-w-[1140px] mx-auto">
        {/* What I'm Doing */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            {/* first line in secondary color */}
            <span className="text-[var(--secondary-text)]">
              What I’m{" "}
              <span className=" text-[var(--primary-text)]">Doing ?</span>
            </span>
          </h3>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            {services.map(({ title, desc }) => (
              <div
                key={title}
                className="
          bg-[var(--secondary-bg-two)]
          p-8
          rounded-3xl
          shadow-[0_4px_12px_rgba(0,0,0,0.1)]
          transition-transform duration-300
          hover:-translate-y-1
          flex flex-col
        "
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--secondary-text)] leading-snug">
                  {title}
                </h4>
                <p className="text-base text-[var(--secondary-text)] flex-1 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Top-Tier Tools */}
        <ToolsSection tools={tools} />
      </section>
      {/* FAQ */}
      <FAQAccordion />
      {/* Collaborate CTA */}
      <CollaborateCard />
      <ResumeSection />
    </main>
  );
}
