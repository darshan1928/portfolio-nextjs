// app/components/Doing.js

import React from "react";

const SERVICES = [
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

function Doing() {
  return (
    <div>
      <h3 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
        <span className="text-[var(--secondary-text)]">
          What I&rsquo;m Doing? <span className="text-[var(--primary-text)]">Doing?</span>
        </span>
      </h3>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
        {SERVICES?.map(({ title, desc }) => (
          <div
            key={title}
            className="bg-[var(--secondary-bg-two)] p-8 rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1 flex flex-col"
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
              {title}
            </h4>
          <p
  className="
    text-base
    leading-relaxed
    text-justify
    break-words
    hyphens-auto
  "
>
  {desc}
</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Doing);
