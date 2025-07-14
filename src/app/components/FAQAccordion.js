"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I focus on the MERN stack (MongoDB, Express.js, React, Node.js) and modern tooling like Next.js, Tailwind CSS, and CI/CD pipelines.",
  },
  {
    question: "How do you ensure code quality?",
    answer:
      "I write unit and integration tests (Jest, React Testing Library) and enforce linting/formatting rules (ESLint, Prettier) to maintain consistent, error-free code.",
  },
  {
    question: "Can you work on both front-end and back-end?",
    answer:
      "Absolutely. I craft responsive UIs with React/Next.js on the front-end, and build RESTful or GraphQL APIs using Express and Node.js on the back-end.",
  },
  {
    question: 'What\'s your approach to database design?',
    answer:
      "I design schemas for MongoDB that balance normalization and performance, using indexes and aggregation pipelines where appropriate.",
  },
  {
    question: "How do you deploy your applications?",
    answer:
      "I containerize services with Docker or deploy to platforms like Vercel (front-end) and AWS/GCP (back-end), setting up CI/CD for automated testing and delivery.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mt-12 max-w-[1140px] mx-auto px-4">
      <h3 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
        <span className="text-[var(--secondary-text)]">Frequently</span>
        <span className="block text-[var(--secondary-text)]">
          Asked <span className="text-[var(--primary-text)]">Questions</span>
        </span>
      </h3>

      <div className="space-y-4">
        {faqs.map(({ question, answer }, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border border-[var(--secondary-bg-two)] rounded-lg overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="
                  w-full flex justify-between items-center
                  px-4 py-3 bg-[var(--secondary-bg-two)]
                  hover:bg-[var(--secondary-bg)] transition
                "
              >
                <span className="text-[var(--secondary-text)] font-medium">
                  {question}
                </span>
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-4 py-3 bg-[var(--secondary-bg)] text-sm text-[var(--secondary-text)]">
                  {answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
