// app/components/ToolsSection.js
"use client";

import { motion } from "framer-motion";
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
const sectionVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
  exit: {
    transition: { staggerChildren: 0.05, when: "afterChildren" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};
const TOOLS = [
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
export default function ToolsSection() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      className="space-y-12 px-4 py-12 max-w-[1140px] mx-auto"
    >
      {/* Animated Heading */}
      <motion.h3
        variants={headingVariants}
        className="text-4xl md:text-5xl font-bold leading-tight mb-6"
      >
        <span className="text-[var(--secondary-text)]">Top-Tier Tools for</span>
        <br />
        <span className="text-[var(--secondary-text)]">
          Exceptional{" "}
          <span className="text-[var(--primary-text)]">Results</span>
        </span>
      </motion.h3>

      {/* Animated Grid */}
      <motion.div
        variants={sectionVariants}
        className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
      >
        {TOOLS?.map(({ icon: Icon, name }) => (
          <motion.div
            key={name}
            variants={iconVariants}
            className="group flex flex-col items-center space-y-2 p-4 bg-[var(--secondary-bg-two)] rounded-xl transition-shadow duration-300 hover:shadow-md"
          >
            <Icon
              className="
                text-3xl text-[var(--primary-text)]
                transition-transform duration-300
                transform
                group-hover:scale-110
                group-hover:-rotate-2
              "
            />
            <span
              className="
              text-xs text-[var(--secondary-text)]
              text-center transition-colors duration-300
              group-hover:text-[var(--primary-text)]
            "
            >
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
