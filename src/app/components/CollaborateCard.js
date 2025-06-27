"use client";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function CollaborateCard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // trigger fade-in on mount
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className="mt-16 px-4">
      <div
        className={`
          group
          max-w-[1140px] mx-auto
          bg-[var(--secondary-bg-two)]
          p-8 md:p-12
          rounded-2xl
          shadow-md
          transition-shadow duration-300
          hover:shadow-lg

          /* fade-in animation */
          opacity-0 translate-y-4
          ${
            mounted
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
              : ""
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
            <span className="block  text-[var(--secondary-text)]">Let’s</span>
            <span className="block  text-[var(--primary-text)]">
              Collaborate
            </span>
          </h2>

          <button
            type="button"
            onClick={() => router.push("/contact")}
            className="
              flex items-center justify-center
              text-[var(--primary-text)]
              text-2xl md:text-3xl
              p-2
              rounded-full
              transition-transform duration-300
              group-hover:translate-x-1
              group-hover:text-[var(--secondary-bg-two)]
              group-hover:bg-[var(--primary-text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--primary-text)]
            "
            aria-label="Start Collaboration"
          >
            <FiArrowRight />
          </button>
        </div>

        {/* Description */}
        <p className="mt-4 text-[var(--secondary-text)] text-base md:text-lg max-w-prose">
          I build user-centric web apps—from React frontends to Node.js APIs—to
          turn your ideas into reality. Let’s connect and make something great!
        </p>
      </div>
    </section>
  );
}
