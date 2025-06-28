// app/components/Intro.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
function Intro() {
  return (
    <motion.div
      className="rounded-xl bg-[var(--secondary-bg)] space-y-6 p-2 font-light"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
   <p className="text-base md:text-lg leading-relaxed text-justify">
    I’m a full-stack developer who brings ideas to life from the very first sketch all the way through to a live, production-ready application. I start by turning wireframes and Figma prototypes into pixel-perfect React/Next.js interfaces, then architect and implement a robust Node.js/Express backend—whether it’s MongoDB, PostgreSQL, or another datastore. From there I write comprehensive tests, enforce linting and formatting for maintainable code, and build CI/CD pipelines that automatically spin up Docker-containerized services on AWS, Vercel, or similar platforms. The result is a seamless, end-to-end workflow that delivers fast, secure, and scalable web applications.
  </p>
    </motion.div>
  );
}
export default React.memo(Intro);
