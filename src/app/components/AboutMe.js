// app/components/HomePageServer.js
"use client";
import { useEffect, useState } from "react";
import Loader from "app/utils/Loader";
import Doing from "./Doing";
import CollaborateCard from "./CollaborateCard";
import FAQAccordion from "./FAQAccordion";
import ResumeSection from "./ResumeSection";
import ToolsSection from "./ToolsSection";
import Intro from "./Intro";

export default function AboutMe() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  if (!hydrated) return <Loader />;
  return (
    <main
      className="h-full w-full   text-[var(--secondary-text)] px-4  py-4  "
    >
      {/* Content */}

      <Intro />

      <section className="space-y-12 px-4 py-6 max-w-[1140px] mx-auto">
        {/* What I'm Doing */}

        <Doing />

        {/* Top-Tier Tools */}

        <ToolsSection />
      </section>

      <ResumeSection />

      {/* FAQ */}

      <FAQAccordion />

      {/* Collaborate CTA */}

      <CollaborateCard />
    </main>
  );
}
