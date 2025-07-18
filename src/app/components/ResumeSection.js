// app/components/ResumeSection.jsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const dot = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  exit: { scale: 0, transition: { duration: 0.2 } },
};

function Timeline({ items }) {
  return (
    <motion.ol
      variants={container}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className="ml-10 space-y-8"
    >
      {items.map(({ title, period, desc }) => (
        <motion.li
          key={title}
          variants={item}
          layout
          className="relative pl-12"
        >
          {/* vertical line */}
          <span
            className="
              absolute left-6 top-1 bottom-1 w-px
              bg-[var(--jet)]
            "
          />
          {/* dot */}
          <motion.span
            variants={dot}
            className="
              absolute left-4 top-1 h-4 w-4
              rounded-full ring-2 ring-[var(--jet)]
              bg-[var(--text-gradient-yellow)]
            "
          />

          <h4 className="text-[var(--secondary-text)] font-semibold text-lg mb-1">
            {title}
          </h4>
          <time className="block text-[var(--primary-text)] font-medium mb-2">
            {period}
          </time>
          <p className="text-sm text-[var(--secondary-text)] leading-relaxed">
            {desc}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}

export default function ResumeSection() {
  const education = [
    {
      title: "University School of the Arts",
      period: "2007 — 2008",
      desc: "Nemo enim ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      title: "New York Academy of Art",
      period: "2006 — 2007",
      desc: "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
    },
    {
      title: "High School of Art and Design",
      period: "2002 — 2004",
      desc: "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
    },
  ];

const experience = [
  {
    title: "FullStack Developer in Aithemis",
    period: "May 2024 — Apr 2025",
    desc: "Architected and implemented end-to-end microservices using Node.js, Express, and FastAPI on the backend, and React.js with Next.js on the frontend, driving a 20% increase in user engagement.",
  },
  {
    title: "Front End Developer Intern in TechPranee",
    period: "Jan 2024 — Mar 2024",
    desc: "Built responsive, accessible UI components using React.js, Next.js, and Material-UI; collaborated with designers to implement pixel-perfect layouts and improved page load times by 35%.",
  },
  {
    title: "Full Stack Developer Intern in Entri Elevate",
    period: "Dec 2022 — Oct 2023",
    desc: "Developed interactive, real-time features using React.js with Tailwind CSS and Chakra UI, integrated Socket.io for live updates, and built RESTful APIs with Express.js, Node.js, and MongoDB.",
  },
];


  return (
    <motion.article
      variants={container}
      initial="hidden"
      whileInView="show"
      exit="hidden"
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-[1140px] mx-auto bg-[var(--secondary-bg)] rounded-4xl p-8 shadow-md space-y-12"
    >
      {/* Section Header */}
      <header>
        <h3 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
          <span className="text-[var(--secondary-text)]">What&rsquo;s</span>
          <span className="block text-[var(--secondary-text)]">
            My <span className="text-[var(--primary-text)]">Experience</span>
          </span>
        </h3>
      </header>

      {/* Education */}
      {/* <section className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="relative flex-none rounded-xl p-3 bg-[var(--border-gradient-onyx)] shadow-sm">
            <div className="absolute inset-1 bg-[var(--secondary-bg)] rounded-xl" />
            <ion-icon
              name="book-outline"
              className="relative text-[var(--primary-text)] text-2xl"
            />
          </div>
          <h3 className="text-2xl font-semibold text-[var(--secondary-text)]">
            Education
          </h3>
        </div>
        <Timeline items={education} />
      </section> */}

      {/* Experience */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4">
          <div className="relative flex-none rounded-xl p-3 bg-[var(--border-gradient-onyx)] shadow-sm">
            <div className="absolute inset-1 bg-[var(--secondary-bg)] rounded-xl" />
            <ion-icon
              name="briefcase-outline"
              className="relative text-[var(--primary-text)] text-2xl"
            />
          </div>
          {/* <h3 className="text-2xl font-semibold text-[var(--secondary-text)]">
            Experience
          </h3> */}
        </div>
        <Timeline items={experience} />
      </section>
    </motion.article>
  );
}
